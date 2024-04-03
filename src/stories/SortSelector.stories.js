import React from "react";
import SortSelector from "../components/SortSelector";

export default {
  title: "Components/SortSelector",
  component: SortSelector,
  argTypes: {
    selectedSort: {
      control: "radio",
      options: ["name", "popular", "activity"],
    },
    selectedOrder: {
      control: "radio",
      options: ["asc", "desc"],
    },
  },
};

const Template = (args) => <SortSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedSort: "activity",
  selectedOrder: "desc",
};
