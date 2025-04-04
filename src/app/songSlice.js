import { createSlice } from "@reduxjs/toolkit";
import songData from "../songs.json";

const initialState = {
  songs: songData,
  currentSong: null,
  isOpen:false,
  favs:[]
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
    addToFav:(state,action) =>{
      state.favs.push(action.payload)
    },
    removeFromFav:(state,action)=>{
      state.favs = state.favs.filter((song)=>song.id != action.payload)
    }
    
  },
});

export const { setCurrentSong,setIsOpen ,addToFav,removeFromFav} = songSlice.actions;

export default songSlice.reducer;
