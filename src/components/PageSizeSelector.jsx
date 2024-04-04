import React, { useContext } from 'react';
import { TagContext } from '../context/TagContext';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const pageSizes = [5, 10, 15, 20, 25, 30];

function PageSizeSelector() {
  const { pageSize, setPageSize } = useContext(TagContext);

  return (
    <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="page-size-select-label">Page Size</InputLabel>
      <Select
        labelId="page-size-select-label"
        id="page-size-select"
        value={pageSize}
        onChange={(e) => setPageSize(e.target.value)}
        label="Page Size"
      >
        {pageSizes.map((size) => (
          <MenuItem key={size} value={size}>{size}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PageSizeSelector;
