import React from 'react';
import { Grid } from '@mui/material';
import SortBySelector from './SortBySelector';
import OrderSelector from './OrderSelector';

function SortSelector() {
    return (
        <Grid container spacing={2}>
            <SortBySelector />
            <OrderSelector />
        </Grid>
    );
}

export default SortSelector;
