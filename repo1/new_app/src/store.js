import { configureStore } from '@reduxjs/toolkit';

import { restaurantsReducer } from './slices/restaurants';
import { userReducer } from './slices/user';


export const store = configureStore({
  reducer: {
    restaurant: restaurantsReducer,
    user: userReducer
  },
});