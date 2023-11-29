import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemove: (state, action) => {
      const currentIndex = state.tags.indexOf(action.payload);
      if (currentIndex !== -1) {
        state.tags.splice(currentIndex, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});
export default filterSlice.reducer;
export const { tagSelected, tagRemove, searched } = filterSlice.actions;
