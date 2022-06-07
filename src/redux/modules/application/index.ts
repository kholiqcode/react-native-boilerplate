/**
 * IMPORTS
 */
import { createSlice } from '@reduxjs/toolkit';

/**
 * SLICE USER
 */
const initialState: ApplicationSlice.IState = {
  theme: 'blue',
  font: 'Poppins',
  force_dark: false,
  language: 'id',
  intro: true,
};

const slice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    // SET INTRO
    setIntro(state: ApplicationSlice.IState, action: ApplicationSlice.IAction) {
      state.intro = action?.payload;
    },

    // ON CHANGE THEME
    onChangeTheme(state: ApplicationSlice.IState, action: ApplicationSlice.IAction) {
      state.theme = action?.payload;
    },

    // ON FORCE THEME
    onForceTheme(state: ApplicationSlice.IState, action: ApplicationSlice.IAction) {
      state.force_dark = action?.payload;
    },

    // ON CHANGE FONT
    onChangeFont(state: ApplicationSlice.IState, action: ApplicationSlice.IAction) {
      state.font = action?.payload;
    },

    // ON CHANGE LANGUAGE
    onChangeLanguage(state: ApplicationSlice.IState, action: ApplicationSlice.IAction) {
      state.language = action?.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setIntro, onChangeTheme, onForceTheme, onChangeFont, onChangeLanguage } =
  slice.actions;
// ----------------------------------------------------------------------
