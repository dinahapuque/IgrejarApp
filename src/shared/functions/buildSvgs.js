const { svgToJS } = require('./utils/svgToJS');

const assetModulesFolders = ['../../assets/icons'];

assetModulesFolders.forEach(asset => {
  svgToJS({
    inputDir: `src/assets/${asset}`,
    outputDir: `dist/${asset}`,
  });
});
