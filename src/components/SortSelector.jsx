import React from 'react';
import { Grid } from '@mui/material';
import SortBySelector from './SortBySelector';
import OrderSelector from './OrderSelector';

function SortSelector({ selectedSort, onSortChange, selectedOrder, onOrderChange }) {
    return (
        <Grid container spacing={2}>
            <SortBySelector selectedSort={selectedSort} onSortChange={onSortChange} />
            <OrderSelector selectedOrder={selectedOrder} onOrderChange={onOrderChange} />
        </Grid>
    );
}

export default SortSelector;
