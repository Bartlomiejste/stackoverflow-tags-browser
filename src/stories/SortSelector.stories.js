import React from "react";
import SortSelector from "../components/SortSelector";

export default {
  title: "Components/SortSelector",
  component: SortSelector,
};

const Template = (args) => <SortSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedSort: "activity",
};
