import {  useSelector } from "react-redux";
import Song from "./Song";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";


const SongList = () => {
  const { songs } = useSelector((state) => state.song);
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [searchTerm, setSearchTerm] = useState("");


  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const updatedSongs = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artistName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(updatedSongs);
  }, [searchTerm, songs]);

  return (
    <div className="song-list col-md-5">
      <Searchbar searchTerm={searchTerm} handleChange={handleChange} />
      <div className="songs">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song,index) => <Song key={song.id} song={song} index={index}/>)
        ) : (
          <p className="text-center mt-3">No songs found</p>
        )}
      </div>
    </div>
  );
};

export default SongList;
