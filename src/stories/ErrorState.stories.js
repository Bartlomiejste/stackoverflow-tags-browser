import React from "react";
import ErrorState from "../components/ErrorState";

export default {
  title: "Components/ErrorState",
  component: ErrorState,
};

const Template = (args) => <ErrorState {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "This is an error message!",
};
