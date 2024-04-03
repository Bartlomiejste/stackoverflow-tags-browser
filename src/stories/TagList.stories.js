import React from "react";
import TagList from "../components/TagList";

export default {
  title: "Components/TagList",
  component: TagList,
};

const Template = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
};
