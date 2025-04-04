import { useDispatch, useSelector } from "react-redux"
import logo from "../assets/spotify.png"
import { IoMdClose } from "react-icons/io";
import { setIsOpen, setSongs,setText } from "../app/songSlice";
import songsData from "../songs.json"

const Sidebar = () => {
  const { isOpen, favs, songs } = useSelector(state => state.song)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    if (e.target.innerText == "Favourites") {
      const favSongs = songs.filter((song) => favs.includes(song.id))
      dispatch(setSongs(favSongs))
      dispatch(setText(e.target.innerText))
      
    }else{
      dispatch(setSongs(songsData))
      dispatch(setText("For You"))

    }
    dispatch(setIsOpen(false))
  }
  return (
    <div className={`col-md-3 sidebar p-2 ${isOpen ? 'open' : ''}`}>
      <div className="d-flex align-items-center justify-content-between ">
        <img src={logo} alt="logo" width={130} />
        <IoMdClose size={25} onClick={() => dispatch(setIsOpen(false))} className="toggle-btn" />
      </div>
      <div className="my-3 d-flex flex-column px-3 gap-3">

        <h5 onClick={handleClick}>For You</h5>
        <h5>Top Tracks</h5>
        <h5 onClick={handleClick}>Favourites</h5>
        <h5>Recently Played</h5>
      </div>
      <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile" className="profile-img" />
    </div>
  )
}

export default Sidebar