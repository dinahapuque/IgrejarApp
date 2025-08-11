const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const specialCharactherRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi;

function _matchSpecialCharacters() {
  return new RegExp(specialCharactherRegex);
}

function _normalizeName(name) {
  const regex = _matchSpecialCharacters();
  return !regex.test(name[0])
    ? name[0].toUpperCase() + name.slice(1, name.length)
    : name[1].toUpperCase() + name.slice(2, name.length);
}

function _camelCase(name) {
  return name
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/ (.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/ /g, '');
}

function svgToJS(config) {
  const scale = config.scale || 1;
  const files = fs.readdirSync(config.inputDir);
  const svgs = [];
  const isIcon = config.inputDir.includes('icons');
  const isIllustration = config.inputDir.includes('illustrations');
  const isAppStores = config.inputDir.includes('app_stores');

  for (const file of files) {
    if (file.slice(-4) !== '.svg') continue;

    const code = fs.readFileSync(path.join(config.inputDir, file), 'utf-8');
    const size = String(code.match(/viewBox="[^"]+/)).slice(9);
    const name = file.slice(0, -4);
    const svgExpression = /^[^>]+>|<[^<]+$/g;

    let body = code.replace(svgExpression, '').replace(/(\r\n|\n|\r)/g, '');

    if (isIcon) {
      body = body.replace(/fill="[^"]+/g, 'fill="currentColor');
    }

    const camelCase = name.replace(/-+./g, m => m.slice(-1).toUpperCase());
    const titleCase = camelCase.replace(/./, m => m.toUpperCase());
    const [w, h] = size
      .split(' ')
      .slice(2)
      .map(val => `${(val / scale).toFixed(3)}em`);

    if (!h) throw new Error(`Malformed viewBox in SVG ${file}`);

    const hasFillNone = /fill\s*=\s*["']none["']/i.test(code);

    svgs.push({
      camelCase,
      titleCase,
      name,
      svg: `<svg viewBox="${size}" class="${name}" width="${w}" height="${h}" aria-hidden="true" focusable="false" ${
        isIllustration || (isAppStores && hasFillNone) ? `fill="none"` : ''
      }>${body}</svg>`,
    });
  }

  const fileNameSplit = config.inputDir.split('/');
  let fileName = fileNameSplit[fileNameSplit.length - 1];
  fileName = _normalizeName(_camelCase(fileName));

  let commonAssetIndex = ``;
  let srcAssetIndex = ``;
  let svgsList = [];
  let svgTypes = `declare const ${fileName}: {\n`;
  let svgListTypes = `declare type TList${fileName} = `;

  svgs.forEach(({ svg, name }) => {
    const _name = name.replace(/-/g, '_').toLocaleLowerCase();
    const normalizedName = _normalizeName(_camelCase(_name));

    const currentFileContent = `const ${normalizedName} = '${svg}';\nexport default ${normalizedName}`;

    commonAssetIndex += `import ${normalizedName} from "./${_name}.js";\n`;
    srcAssetIndex += `import ${normalizedName} from "./${name}.svg";\n`;

    svgTypes += `  ${normalizedName}: string;\n`;
    svgListTypes += `'${normalizedName}' | `;

    svgsList.push(normalizedName);
    fse.outputFileSync(
      `${config.outputDir}/${name.replace(/-/g, '_').toLocaleLowerCase()}.js`,
      currentFileContent,
    );
  });

  const exportsAssets = `
const ${fileName} = {${svgs
    .map(svg => _normalizeName(_camelCase(svg.name)))
    .join()}}
\nexport default ${fileName};
`;
  commonAssetIndex += exportsAssets;
  srcAssetIndex += exportsAssets;

  fse.outputFileSync(`${config.outputDir}/index.js`, commonAssetIndex);

  if (svgTypes) {
    svgTypes += `};\n\nexport default ${fileName};`;
    fse.outputFileSync(`${config.outputDir}/index.d.ts`, svgTypes);
  }

  if (svgListTypes) {
    svgListTypes = `${svgListTypes.substring(
      0,
      svgListTypes.length - 2,
    )};\n\nexport default TList${fileName}`;
    fse.outputFileSync(`${config.outputDir}/list.d.ts`, svgListTypes);
  }

  fse.outputFileSync(
    `${config.outputDir}/assets-list.js`,
    `export default ${JSON.stringify(svgsList)}`,
  );
}

module.exports = { svgToJS };
