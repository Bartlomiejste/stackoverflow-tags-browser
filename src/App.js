import React from "react";
import TagList from "./components/TagList";
import SortSelector from "./components/SortSelector";
import PageSizeSelector from "./components/PageSizeSelector";
import { Box, Typography } from "@mui/material";
import TagProvider from "./context/TagContext";

function App() {
  return (
    <TagProvider>
      <Box sx={{ p: 4 }}>
        <Typography variant="h1" gutterBottom>
          StackOverflow Tag Browser
        </Typography>
        <SortSelector />
        <PageSizeSelector />
        <TagList />
      </Box>
    </TagProvider>
  );
}

export default App;
