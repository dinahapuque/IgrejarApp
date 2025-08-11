import React from 'react';

import { Path, Svg } from 'react-native-svg';
import { IconProps } from './IconProps';

export default function SearchSmIcon({
  style,
  strokeWidth,
  stroke,
}: Readonly<IconProps>) {
  return (
    <Svg style={style} width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
