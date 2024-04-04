import React, { useContext } from 'react';
import { TagContext } from '../context/TagContext';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

function SortBySelector() {
    const { sort, setSort } = useContext(TagContext);

    return (
        <Grid item>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Sort By</InputLabel>
                <Select value={sort} onChange={(e) => setSort(e.target.value)} label="Sort By">
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="popular">Popular</MenuItem>
                    <MenuItem value="activity">Activity</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}

export default SortBySelector;
