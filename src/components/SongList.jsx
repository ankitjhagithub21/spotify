import { useDispatch, useSelector } from "react-redux"
import Song from "./Song"
import Searchbar from "./Searchbar"
import { RiMenu3Fill } from "react-icons/ri";
import { setIsOpen } from "../app/songSlice";

const SongList = () => {
  const {songs} = useSelector((state) => state.song)
  const dispatch = useDispatch()
  return (
    <div className={`song-list col-md-5`}>
      <div className="song-list-top px-1">
        <div className="d-flex align-items-center justify-content-between">
        <h2 className='fs-4'>For You</h2>
        <RiMenu3Fill size={25} onClick={()=>dispatch(setIsOpen(true))} className="toggle-btn"/>
        </div>
        <Searchbar />
      </div>
      <div className="px-1">

        {songs.map((song) => (
          <Song key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}

export default SongList