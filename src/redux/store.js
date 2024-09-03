import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketsSlice';
import missionsReducer from './missionsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
