import React, { useState } from "react";
import TagList from "./components/TagList";
import SortSelector from "./components/SortSelector";
import PageSizeSelector from "./components/PageSizeSelector";

function App() {
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState("activity");

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <SortSelector selectedSort={sort} onSortChange={handleSortChange} />
      <PageSizeSelector
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
      <h1>StackOverflow Tag Browser</h1>
      <TagList pageSize={pageSize} sort={sort} />
    </div>
  );
}

export default App;
