import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rocketsSlice';
import missionsReducer from './missionsSlice';

export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
