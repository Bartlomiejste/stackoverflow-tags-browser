import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

function SortSelector({ selectedSort, onSortChange, selectedOrder, onOrderChange }) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
                    <InputLabel>Sort By</InputLabel>
                    <Select value={selectedSort} onChange={onSortChange} label="Sort By">
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="popular">Popular</MenuItem>
                        <MenuItem value="activity">Activity</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
                    <InputLabel>Order</InputLabel>
                    <Select value={selectedOrder} onChange={onOrderChange} label="Order">
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}


export default SortSelector;
