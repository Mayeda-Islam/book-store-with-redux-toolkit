import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { relatedGetVideos } from "./relatedVideosApi";

//initial state
const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchRelatedVideo = createAsyncThunk(
  "videos/relatedFetchVideos",
  async ({ id, tags }) => {
    const relatedVideo = await relatedGetVideos({ id, tags });
    return relatedVideo;
  }
);

//slice
const relatedVideoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});
export default relatedVideoSlice.reducer;
