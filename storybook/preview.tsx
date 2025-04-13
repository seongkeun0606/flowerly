import { appTheme, createdStyledTheme } from '@/src/theme/theme';

import { PaperProvider } from 'react-native-paper';
import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

const preview: Preview = {
  decorators: [
    (Story) => (
      <PaperProvider theme={appTheme}>
        <ThemeProvider theme={createdStyledTheme}>
          <Story />
        </ThemeProvider>
      </PaperProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        { name: 'plain', value: 'white' },
        { name: 'warm', value: 'hotpink' },
        { name: 'cool', value: 'deepskyblue' },
      ],
    },
  },
};

export default preview;
