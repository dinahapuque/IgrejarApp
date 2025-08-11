import React from 'react';

import { Path, Svg } from 'react-native-svg';
import { IconProps } from './IconProps';

export default function NavigationPointerIcon({
  strokeWidth,
  stroke,
}: Readonly<IconProps>) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <Path
        d="M4.55131 14.326C3.75752 14.0173 3.36062 13.8629 3.24475 13.6405C3.14429 13.4477 3.14416 13.2181 3.24438 13.0251C3.36 12.8026 3.75671 12.6478 4.55014 12.3382L27.0671 3.55103C27.7834 3.27152 28.1415 3.13177 28.3703 3.20822C28.5691 3.27461 28.725 3.43056 28.7914 3.6293C28.8679 3.85813 28.7281 4.21625 28.4486 4.93249L19.6615 27.4495C19.3518 28.2429 19.197 28.6396 18.9745 28.7552C18.7816 28.8555 18.5519 28.8553 18.3591 28.7549C18.1367 28.639 17.9824 28.2421 17.6737 27.4483L14.1695 18.4377C14.1068 18.2765 14.0755 18.196 14.0271 18.1281C13.9842 18.068 13.9317 18.0154 13.8715 17.9725C13.8037 17.9241 13.7231 17.8928 13.562 17.8301L4.55131 14.326Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
