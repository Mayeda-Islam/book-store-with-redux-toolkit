import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoApi";

//initial state
const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};
//async thunk
export const fetchVideo = createAsyncThunk("videos/fetchVideos", async (id) => {
  const video = await getVideo(id);
  return video;
});

//slice
const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.video = {};
        state.error = action.error?.message;
      });
  },
});
export default videoSlice.reducer;
