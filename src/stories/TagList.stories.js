import React from "react";
import TagList from "../components/TagList";
import TagProvider from "../context/TagContext";

export default {
  title: "Components/TagList",
  component: TagList,
  decorators: [
    (Story) => (
      <TagProvider>
        <Story />
      </TagProvider>
    ),
  ],
};

const Template = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
};
