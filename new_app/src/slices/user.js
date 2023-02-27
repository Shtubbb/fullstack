import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: "",
  id: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {user, id} = action.payload;
      state.id = id;
      state.user = user;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions