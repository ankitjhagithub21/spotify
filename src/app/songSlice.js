import { createSlice } from "@reduxjs/toolkit";
import songData from "../songs.json";
import toast from "react-hot-toast";

const initialState = {
  songs: songData,
  currentSongIndex: 0,
  isOpen:false,
  favs:[]
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    addToFav: (state, action) => {
     
      if (!state.favs.includes(action.payload)) {
        state.favs.push(action.payload);
        toast.success("Added to favourites.")
      }
    },
    removeFromFav: (state, action) => {
      state.favs = state.favs.filter((songId) => songId !== action.payload);
      toast.success("Remove from favourites.")
    },
    playNextSong: (state) => {
      if (state.currentSongIndex < state.songs.length - 1) {
        state.currentSongIndex += 1;
      } else {
        state.currentSongIndex = 0; // Loop back to the first song
      }
    },
    playPrevSong: (state) => {
      if (state.currentSongIndex > 0) {
        state.currentSongIndex -= 1;
      } else {
        state.currentSongIndex = state.songs.length - 1; // Loop back to the last song
      }
    }
    
  },
});

export const { setCurrentSongIndex,setIsOpen ,addToFav,removeFromFav,playNextSong,playPrevSong} = songSlice.actions;

export default songSlice.reducer;
