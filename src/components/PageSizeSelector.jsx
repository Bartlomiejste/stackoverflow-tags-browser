import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function PageSizeSelector({ pageSize, onPageSizeChange }) {
  const pageSizes = [5, 10, 15, 20, 25, 30];

  return (
    <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="page-size-select-label">Page Size</InputLabel>
      <Select
        labelId="page-size-select-label"
        id="page-size-select"
        value={pageSize}
        onChange={onPageSizeChange}
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
