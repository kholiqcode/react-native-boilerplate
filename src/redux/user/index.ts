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

const reducerName = 'user';

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    // START LOADING
    startLoading(state: InitialState.IState) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state: InitialState.IState, action: InitialState.IAction) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ON GET USERS SUCCESS
    onGetUsersSuccess(state: InitialState.IState, action: InitialState.IAction) {
      state.isLoading = false;
      state.users = action?.payload;
    },
  },
});

// Reducer
export const usersSliceReducer = { [reducerName]: slice.reducer };
// Actions
export const { startLoading, hasError, onGetUsersSuccess } = slice.actions;

// ----------------------------------------------------------------------
