import { useDispatch, useSelector } from "react-redux"
import { setCurrentSongIndex } from "../app/songSlice"


const Song = ({ song,index }) => {
  
  const {currentSong} = useSelector(state=>state.song) 
  const dispatch = useDispatch()
  return (
    <div onClick={()=>dispatch(setCurrentSongIndex(index))} className={`d-flex my-2 song rounded ${currentSong?.id === song.id && 'active-song' } align-items-center justify-content-between p-2`}>
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