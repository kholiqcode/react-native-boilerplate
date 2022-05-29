/**
 * IMPORTS
 */
import { createSlice } from '@reduxjs/toolkit';

/**
 * SLICE USER
 */
const initialState: InitialState.IState = {
  isLoading: false,
  isAuthenticated: false,
  error: false,
  errorMessage: 'Something Wrong',
  user: {
    name: '',
    email: '',
    status: true,
  },
  users: [
    {
      name: '',
      email: '',
      status: true,
    },
  ],
  token: {
    type: 'access',
    access: '',
    refresh: '',
  },
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state: any) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state: any, action: any) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ON GET USERS SUCCESS
    onGetUsersSuccess(state: any, action: any) {
      state.isLoading = false;
      state.users = action?.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, hasError, onGetUsersSuccess } = slice.actions;

// ----------------------------------------------------------------------
