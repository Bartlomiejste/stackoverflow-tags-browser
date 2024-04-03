import React, { useState } from "react";
import TagList from "./components/TagList";
import SortSelector from "./components/SortSelector";
import PageSizeSelector from "./components/PageSizeSelector";
import { Box, Typography } from "@mui/material";

function App() {
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState("activity");
  const [order, setOrder] = useState("asc");

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const onOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <Box>
      <SortSelector selectedSort={sort} onSortChange={handleSortChange} />
      <SortSelector
        selectedSort={sort}
        onSortChange={handleSortChange}
        selectedOrder={order}
        onOrderChange={onOrderChange}
      />
      <PageSizeSelector
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
      <Typography variant="h1">StackOverflow Tag Browser</Typography>
      <TagList pageSize={pageSize} sort={sort} />
    </Box>
  );
}

export default App;
