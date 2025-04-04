import { useDispatch, useSelector } from "react-redux"
import {setCurrentSong} from "../app/songSlice"

const Song = ({ song }) => {
  const dispatch = useDispatch();
  const {currentSong} = useSelector(state=>state.song) 
  return (
    <div className={`d-flex my-2 song rounded ${currentSong?.id === song.id && 'active-song' } align-items-center justify-content-between p-2`} onClick={()=>dispatch(setCurrentSong(song))}>
      <div className="d-flex gap-3 align-items-center">
        <img src={song.thumbnail} alt={song.title} className="thumbnail" />

        <div>
          <h5 className="mb-1">{song.title}</h5>
          <small>{song.artistName}</small>
        </div>


      </div>
      <small>{song.duration}</small>
    </div>
  )
}

export default Song