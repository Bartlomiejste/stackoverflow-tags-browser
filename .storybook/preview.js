import React from "react";
import TagProvider from "../src/context/TagContext";
/** @type { import('@storybook/react').Preview } */

export const decorators = [
  (Story) => (
    <TagProvider>
      <Story />
    </TagProvider>
  ),
];
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
