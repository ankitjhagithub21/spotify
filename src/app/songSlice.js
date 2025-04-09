import { createSlice } from "@reduxjs/toolkit";
import songData from "../songs.json";
import toast from "react-hot-toast";

const initialState = {
  songs: songData || [],
  currentSongIndex: 0,
  currentSong:songData[0],
  isOpen:false,
  favs:JSON.parse(localStorage.getItem('favSongs')) || [],
  text:"For You"
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
    setFavs:(state,action)=>{
      state.favs = action.payload
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    setCurrentSong: (state, action) => {

      state.currentSong = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    addRemoveSong: (state, action) => {
     
      const index = state.favs.findIndex((song)=>song.id === action.payload.id)
      if(index<0){
        state.favs.push(action.payload);
        toast.success("Added to favourite")
        localStorage.setItem('favSongs',JSON.stringify(state.favs))
      }else{
        state.favs.splice(index,1);
        toast.success("Remove from favourite")
        localStorage.setItem('favSongs',JSON.stringify(state.favs))
      }
      
    },
    
    playNextSong: (state) => {
      if (state.currentSongIndex < state.songs.length - 1) {
        state.currentSongIndex += 1;
        
      } else {
        state.currentSongIndex = 0; // Loop back to the first song
      }
      state.currentSong = state.songs[state.currentSongIndex]
    },
    playPrevSong: (state) => {
      if (state.currentSongIndex > 0) {
        state.currentSongIndex -= 1;
      } else {
        state.currentSongIndex = state.songs.length - 1; // Loop back to the last song
      }
      state.currentSong = state.songs[state.currentSongIndex]
    }
    
  },
});

export const {setSongs,setText,setCurrentSong, setCurrentSongIndex,setIsOpen ,addRemoveSong,playNextSong,playPrevSong,setFavs} = songSlice.actions;

export default songSlice.reducer;
