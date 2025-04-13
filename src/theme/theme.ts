import { Colors, customColors } from './color';
import { MD3LightTheme, useTheme } from 'react-native-paper';

import { DefaultTheme } from 'styled-components/native';
import { ThemeProp } from 'react-native-paper/src/types';

export const theme: DefaultTheme = {
  colors: customColors.colors,
};

export const createdStyledTheme = (): DefaultTheme => {
  return { ...theme };
};

type CustomThemeProps = ThemeProp & Colors;
export const appTheme: CustomThemeProps = {
  ...MD3LightTheme,
  version: 3,
  roundness: 1,
  colors: {
    ...MD3LightTheme.colors,
    ...customColors.colors,
  },
  //   fonts: configureFonts({})
};

export const useAppTheme = () => useTheme<typeof appTheme>();
