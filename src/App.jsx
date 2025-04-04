import Sidebar from "./components/Sidebar"
import SongList from "./components/SongList"
import Player from "./components/Player"
import {Toaster} from "react-hot-toast"


const App = () => {
 
  return (
    <main className="main-container">
      <div className="row">
        <Toaster/>
        <Sidebar />
        <SongList />
        <Player/>
       
      </div>
    </main>
  )
}

export default App