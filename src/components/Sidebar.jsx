import { useDispatch, useSelector } from "react-redux"
import logo from "../assets/spotify.png"
import { IoMdClose } from "react-icons/io";
import { setIsOpen } from "../app/songSlice";

const Sidebar = () => {
  const {isOpen} = useSelector(state=>state.song)
  const dispatch = useDispatch()
  return (
    <div className={`col-md-3 sidebar p-2 ${isOpen && 'open'}`}>
      <div className="d-flex align-items-center justify-content-between">
      <img src={logo} alt="logo" width={130} />
      <IoMdClose size={25} onClick={()=>dispatch(setIsOpen(false))} className="toggle-btn"/> 
      </div>
     <div className="my-3 d-flex flex-column px-3 gap-3">
      {
        ["For You","Top Tracks","Favourites","Recently Played"].map((item,index)=>{
          return <h5 key={index}>{item}</h5>
        })
      }
     </div>
    </div>
  )
}

export default Sidebar