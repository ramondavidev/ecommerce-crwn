import { createSlice } from '@reduxjs/toolkit';
import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    signInSuccess(state, action) {
      state.currentUser = action.payload;
    },
    signOutSuccess(state, action) {
      state.currentUser = null;
    },

    signOutFailed(state, action) {
      state.error = action.payload;
    },
    signInFailed(state, action) {
      state.error = action.payload;
    },
    signUpFailed(state, action) {
      state.error = action.payload;
    },
  }
});

export const {
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signInFailed,
  signUpFailed
} = userSlice.actions;

export const userReducer = userSlice.reducer;