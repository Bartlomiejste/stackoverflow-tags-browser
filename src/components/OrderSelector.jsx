import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

function OrderSelector({ selectedOrder, onOrderChange }) {
    return (
        <Grid item>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Order</InputLabel>
                <Select value={selectedOrder} onChange={onOrderChange} label="Order">
                    <MenuItem value="asc">Ascending</MenuItem>
                    <MenuItem value="desc">Descending</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}

export default OrderSelector;
