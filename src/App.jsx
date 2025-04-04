import Sidebar from "./components/Sidebar"
import SongList from "./components/SongList"
import Player from "./components/Player"



const App = () => {
 
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