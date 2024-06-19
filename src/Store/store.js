import {configureStore, createSlice} from '@reduxjs/toolkit';

// Define el slice para el usuario
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: ''
  },
  reducers: {
    setUser(state, action) {
      state.name = action.payload;
    }
  }
});

// Exporta los actions creados por el slice
export const { setUser } = userSlice.actions;

// Configura el store de Redux
export default configureStore({
  reducer: {
    user: userSlice.reducer
  }
});
