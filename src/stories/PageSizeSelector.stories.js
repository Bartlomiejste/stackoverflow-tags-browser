import React, { useState } from "react";
import PageSizeSelector from "../components/PageSizeSelector";
import TagProvider from "../context/TagContext";

export default {
  title: "Components/PageSizeSelector",
  component: PageSizeSelector,
  decorators: [
    (Story) => (
      <TagProvider>
        <Story />
      </TagProvider>
    ),
  ],
};

const Template = (args) => {
  const [pageSize, setPageSize] = useState(args.pageSize);

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    args.onPageSizeChange(event.target.value);
  };

  return (
    <PageSizeSelector
      pageSize={pageSize}
      onPageSizeChange={handlePageSizeChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
  onPageSizeChange: (newSize) => console.log(`New pageSize: ${newSize}`),
};
