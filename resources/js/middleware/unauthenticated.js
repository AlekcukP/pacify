import { HttpStatusCode } from 'axios';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { resetCredentials } from '../redux/auth';

export const unauthenticatedMiddleware = ({ dispatch }) => (next) => (action) => {
  if (isRejectedWithValue(action) && action.payload.status === HttpStatusCode.Unauthorized) {
    dispatch(resetCredentials());
  }

  return next(action);
};
