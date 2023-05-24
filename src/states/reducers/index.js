import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
  name: "incdec",
  initialState: 0,
  reducers: {
    inc: (state, action) => {
      return (state += action.payload);
    },
    dec: (state, action) => {
      return (state -= action.payload);
    },
  },
});

export default incdecSlice.reducer;
export const { inc, dec } = incdecSlice.actions;
