import 'react-native-reanimated';

import { appTheme, createdStyledTheme } from '@/src/theme/theme';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components/native';

const SHOW_STORYBOOK = true;
const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={appTheme}>
        <ThemeProvider theme={createdStyledTheme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Router />
          </GestureHandlerRootView>
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const Router: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const StorybookUIRoot = require('../storybook').default;
export default SHOW_STORYBOOK ? StorybookUIRoot : App;
