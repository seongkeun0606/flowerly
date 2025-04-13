import React from 'react';
import { Stack } from 'expo-router';

const SHOW_STORYBOOK = true;
const App: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const StorybookUIRoot = require('../storybook').default;

export default SHOW_STORYBOOK ? StorybookUIRoot : App;
