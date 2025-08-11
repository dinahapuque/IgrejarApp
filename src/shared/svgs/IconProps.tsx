import {PropsWithoutRef} from 'react';
import {ColorValue} from 'react-native';

export type IconProps = PropsWithoutRef<{
  stroke: ColorValue;
  strokeWidth: number;
  style?: any;
  height?: number;
  width?: number;
}>;
