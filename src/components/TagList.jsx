import React, { useEffect, useCallback, useContext } from "react";
import Tag from "./Tag";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import { Box, Typography, Pagination, Stack } from "@mui/material";
import SortSelector from "./SortSelector";
import PageSizeSelector from "./PageSizeSelector";
import Layout from "./Layout";
import { TagContext } from "../context/TagContext";

function TagList() {
  const {
    tags,
    error,
    loading,
    page,
    totalPages,
    setPage,
    pageSize,
    setPageSize,
    sort,
    setSort,
    order,
    setOrder,
    loadAndSortTags,
  } = useContext(TagContext);

  useEffect(() => {
    loadAndSortTags();
  }, [loadAndSortTags]);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handlePageSizeChange = useCallback((event) => {
    setPageSize(Number(event.target.value));
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        StackOverflow Tags
      </Typography>
      <Stack direction="row" spacing={2} mb={2} alignItems="center">
        <SortSelector
          selectedSort={sort}
          onSortChange={(e) => setSort(e.target.value)}
          selectedOrder={order}
          onOrderChange={(e) => setOrder(e.target.value)}
        />
        <PageSizeSelector
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
        />
      </Stack>
      <Layout isLoading={loading} error={error}>
        {tags &&
          tags.map((tag) => (
            <Tag key={tag.name} name={tag.name} count={tag.count} />
          ))}
      </Layout>
      <Pagination count={totalPages} page={page} onChange={handlePageChange} />
    </Box>
  );
}

export default TagList;
