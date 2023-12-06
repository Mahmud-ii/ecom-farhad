import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    filterOut: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
