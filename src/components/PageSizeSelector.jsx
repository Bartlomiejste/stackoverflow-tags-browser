import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function PageSizeSelector({ pageSize, onPageSizeChange }) {
  return (
    <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
      <InputLabel id="page-size-select-label">Page Size</InputLabel>
      <Select
        labelId="page-size-select-label"
        id="page-size-select"
        value={pageSize}
        onChange={onPageSizeChange}
        label="Page Size"
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
  );
}

export default PageSizeSelector;
