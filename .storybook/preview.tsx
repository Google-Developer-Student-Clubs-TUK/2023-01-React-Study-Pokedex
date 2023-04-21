import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyles from '../src/styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Story />
    </QueryClientProvider>
  ),
];

export default preview;
