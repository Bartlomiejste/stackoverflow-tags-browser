import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function SortSelector({ selectedSort, onSortChange }) {
    return (
        <FormControl variant="outlined" size="small" style={{ minWidth: 200, marginRight: 15 }}>
            <InputLabel id="sort-selector-label">Sort By</InputLabel>
            <Select
                labelId="sort-selector-label"
                id="sort-selector"
                value={selectedSort}
                onChange={onSortChange}
                label="Sort By"
            >
                <MenuItem value="popular">Popular</MenuItem>
                <MenuItem value="activity">Activity</MenuItem>
                <MenuItem value="name">Name</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SortSelector;
