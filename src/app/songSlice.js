import { createSlice } from "@reduxjs/toolkit";
import songData from "../songs.json";

const initialState = {
  songs: songData,
  currentSong: null,
  isOpen:false
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setCurrentSong,setIsOpen } = songSlice.actions;

export default songSlice.reducer;
