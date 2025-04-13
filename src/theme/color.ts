import { MD3Colors } from 'react-native-paper/lib/typescript/types';

interface CustomColors {}
export type Colors = {
  colors: MD3Colors & CustomColors;
};

export const customColors: Colors = {
  colors: {
    primary: 'rgb(105, 95, 0)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(249, 229, 52)',
    onPrimaryContainer: 'rgb(32, 28, 0)',
    secondary: 'rgb(0, 99, 154)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(206, 229, 255)',
    onSecondaryContainer: 'rgb(0, 29, 50)',
    tertiary: 'rgb(154, 37, 174)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(255, 214, 254)',
    onTertiaryContainer: 'rgb(53, 0, 63)',
    error: 'rgb(186, 26, 32)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 3)',
    background: 'rgb(255, 251, 255)',
    onBackground: 'rgb(29, 28, 22)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(29, 28, 22)',
    surfaceVariant: 'rgb(232, 226, 208)',
    onSurfaceVariant: 'rgb(74, 71, 58)',
    outline: 'rgb(123, 119, 104)',
    outlineVariant: 'rgb(203, 198, 181)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(50, 48, 42)',
    inverseOnSurface: 'rgb(245, 240, 231)',
    inversePrimary: 'rgb(219, 201, 10)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(248, 243, 242)',
      level2: 'rgb(243, 239, 235)',
      level3: 'rgb(239, 234, 227)',
      level4: 'rgb(237, 232, 224)',
      level5: 'rgb(234, 229, 219)',
    },
    surfaceDisabled: 'rgba(29, 28, 22, 0.12)',
    onSurfaceDisabled: 'rgba(29, 28, 22, 0.38)',
    backdrop: 'rgba(51, 49, 36, 0.4)',
  },
};
