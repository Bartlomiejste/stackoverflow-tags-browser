import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

function SortBySelector({ selectedSort, onSortChange }) {
    return (
        <Grid item>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Sort By</InputLabel>
                <Select value={selectedSort} onChange={onSortChange} label="Sort By">
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="popular">Popular</MenuItem>
                    <MenuItem value="activity">Activity</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}

export default SortBySelector;
