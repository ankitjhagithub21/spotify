import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import Player from "./components/Player";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux"; // if using Redux

const App = () => {
  const {currentSongIndex,songs} = useSelector((state) => state.song); 
  const currentSong = songs[currentSongIndex];
  return (
    <main
      className="main-container"
      style={{
        background: currentSong?.backgroundGradient || "linear-gradient(to right, #000, #222)",
      }}
    >
      <div className="row">
        <Toaster />
        <Sidebar/>
        <SongList />
        <Player />
      </div>
    </main>
  );
};

export default App;
