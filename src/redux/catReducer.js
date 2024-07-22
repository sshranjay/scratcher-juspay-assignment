import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  x: 0,
  y: 0,
  rotation: 0,
  message: "",
  size: 100,
  visible: true,
};

const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    move(state, action) {
      state.x += action.payload.x;
      state.y += action.payload.y;
    },
    rotate(state, action) {
      state.rotation += action.payload;
    },
    showMessage(state, action) {
      state.message = action.payload;
    },
    hideMessage(state) {
      state.message = "";
    },
    changeSize(state, action) {
      state.size = action.payload;
    },
    setVisible(state, action) {
      state.visible = action.payload;
    },
  },
});

export const { move, rotate, showMessage, hideMessage, changeSize, setVisible } = catSlice.actions;
export default catSlice.reducer;
