import React, { useContext } from 'react';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import {TagContext} from '../context/TagContext';

const Layout = ({ children }) => {
  const { loading, error } = useContext(TagContext);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return <>{children}</>;
};

export default Layout;
