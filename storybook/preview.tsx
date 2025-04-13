// .storybook/preview.tsx
import type { Preview } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

const preview: Preview = {
  decorators: [
    (Story) => (
      <View>
        <Story />
      </View>
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
