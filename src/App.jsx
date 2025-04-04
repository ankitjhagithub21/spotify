import Sidebar from "./components/Sidebar"
import SongList from "./components/SongList"
import Player from "./components/Player"
import { useSelector } from "react-redux"


const App = () => {
  const {currentSong} = useSelector(state=>state.song)
  return (
    <main className="main-container">
      <div className="row">
        <Sidebar />
        
        <SongList />
        <Player/>
       
      </div>
    </main>
  )
}

export default App