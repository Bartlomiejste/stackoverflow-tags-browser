import React, { useContext } from 'react';
import { TagContext } from '../context/TagContext';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

function OrderSelector() {
    const { order, setOrder } = useContext(TagContext);

    return (
        <Grid item>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Order</InputLabel>
                <Select value={order} onChange={(e) => setOrder(e.target.value)} label="Order">
                    <MenuItem value="asc">Ascending</MenuItem>
                    <MenuItem value="desc">Descending</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}

export default OrderSelector;
