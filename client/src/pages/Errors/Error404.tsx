import React from 'react';
import {useRouteError} from 'react-router-dom';
import { ErrorWrapper } from '../../css/Error/ErrorPageStyle';

export const Error404 = () => {
  const error = useRouteError() as any;
  let message;
  if (error.status === 404) {
    message = 'not Found error 404';
  }
  return (
    <ErrorWrapper>
      <h3>{message}</h3>
    </ErrorWrapper>
  );
};
