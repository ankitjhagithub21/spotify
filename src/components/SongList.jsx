import { useSelector } from "react-redux"
import Song from "./Song"
import Searchbar from "./Searchbar"

const SongList = () => {
  const { songs} = useSelector((state) => state.song)


  return (
    <div className={`song-list col-md-5`}>
      <Searchbar/>
      <div>

        {songs.map((song) => (
          <Song key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}

export default SongList