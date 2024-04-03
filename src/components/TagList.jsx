import React, { useState, useEffect, useCallback } from "react";
import { fetchTags } from "../api/api";
import Tag from "./Tag";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import { Box, Typography, Pagination, Stack } from "@mui/material";
import SortSelector from "./SortSelector";
import PageSizeSelector from "./PageSizeSelector";

function TagList() {
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [sort, setSort] = useState("activity");

    useEffect(() => {
        const loadTags = async () => {
            setLoading(true);
            try {
                const { items, total } = await fetchTags(page, pageSize, sort);
                setTags(items);
                setTotalPages(Math.ceil(total / pageSize));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        loadTags();
    }, [page, pageSize, sort]); 
    
    const handlePageChange = useCallback((event,value) => {
        setPage(value);
    }, []);
    
    const handlePageSizeChange = useCallback((event) => {
        setPageSize(Number(event.target.value));
    }, []);

    if (loading) return <LoadingState />;
    if (error) return <ErrorState message={error} />;

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                StackOverflow Tags
            </Typography>
            <Stack direction="row" spacing={2} mb={2} alignItems="center">
                <SortSelector selectedSort={sort} onSortChange={(e) => setSort(e.target.value)} />
                <PageSizeSelector pageSize={pageSize} onPageSizeChange={handlePageSizeChange} />
            </Stack>
            {tags && tags.map((tag) => (
                <Tag key={tag.name} name={tag.name} count={tag.count} />
            ))}
            <Pagination count={totalPages} page={page} onChange={handlePageChange} />
        </Box>
    );
}

export default TagList;
