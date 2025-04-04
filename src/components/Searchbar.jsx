import { GoSearch } from "react-icons/go"
import { useDispatch } from "react-redux"
import { setIsOpen } from "../app/songSlice"
import { RiMenu3Fill } from "react-icons/ri";

const Searchbar = () => {
  const dispatch = useDispatch()

  return (
    <div className="song-list-top">
    <div className="d-flex align-items-center justify-content-between mb-2">
      <h2 className='fs-4'>For You</h2>
      <RiMenu3Fill size={25} onClick={() => dispatch(setIsOpen(true))} className="toggle-btn" />
    </div>
    <div className='search-bar p-2 rounded d-flex align-items-center'>
        <input type="text" placeholder="Search Song, Artist" className="w-100 text-light"/>
        <GoSearch/>
    </div>
  </div>
  )
}

export default Searchbar