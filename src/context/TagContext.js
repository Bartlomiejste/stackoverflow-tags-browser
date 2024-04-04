import React, { createContext, useState, useCallback } from "react";
import { fetchTags } from "../api/api";
import { sortItems } from "../utils/sorting";

export const TagContext = createContext();

const TagProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState("activity");
  const [order, setOrder] = useState("desc");

  const loadAndSortTags = useCallback(async () => {
    setLoading(true);
    try {
      const { items, total } = await fetchTags(page, pageSize, sort);
      const sortedItems = sortItems(items, sort, order);
      setTags(sortedItems);
      setTotalPages(Math.ceil(total / pageSize));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, sort, order]);

  return (
    <TagContext.Provider
      value={{
        tags,
        error,
        loading,
        page,
        totalPages,
        sort,
        pageSize,
        order,
        setPage,
        setPageSize,
        setSort,
        setOrder,
        loadAndSortTags,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export default TagProvider;
