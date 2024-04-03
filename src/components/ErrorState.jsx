import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function ErrorState({ message }) {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
}

ErrorState.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorState;
