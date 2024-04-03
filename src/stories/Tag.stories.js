import React from "react";
import Tag from "../components/Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    count: {
      control: "number",
    },
  },
};

const Template = (args) => <Tag {...args} />;

export const JavaScriptTag = Template.bind({});
JavaScriptTag.args = {
  name: "Javascript",
  count: 2528893,
};
