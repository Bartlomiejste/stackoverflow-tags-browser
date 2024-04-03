import React, { useState } from "react";
import PageSizeSelector from "../components/PageSizeSelector";

export default {
  title: "Components/PageSizeSelector",
  component: PageSizeSelector,
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
  onPageSizeChange: (newSize) => console.log(`Nowy pageSize: ${newSize}`),
};
