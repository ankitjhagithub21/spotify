
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveSong, playNextSong, playPrevSong} from '../app/songSlice';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Player = () => {
    const { currentSong, favs } = useSelector(state => state.song) || {};

    const dispatch = useDispatch();
   
    if(!currentSong){
         return <div>No song</div>
    }

    return (
        <div className='col-md-4 player'>


            <div className='album'>
                <div className='album-detail'>
                    <h2 className='fs-4'>{currentSong.title}</h2>
                    <small>{currentSong.artistName}</small>
                </div>

                <div className='album-top'>
                    <img src={currentSong.thumbnail} alt={currentSong.title} className='img-fluid rounded mb-2' />

                </div>




                <div className="audio-player">
                    {
                       favs.find((song)=>song.id === currentSong.id) ?  <FaBookmark className="bookmark-button" cursor={"pointer"} size={20} onClick={() => dispatch(addRemoveSong(currentSong))} /> : <FaRegBookmark  className="bookmark-button" cursor={"pointer"} size={20} onClick={() => {
                            if (currentSong.id) {
                                dispatch(addRemoveSong(currentSong))
                            }
                        }} />
                    }
                    <AudioPlayer

                        autoPlay
                        src={currentSong.musicUrl}
                        showSkipControls={true}
                        showJumpControls={false}
                        onClickNext={() => dispatch(playNextSong())}
                        onClickPrevious={() => dispatch(playPrevSong())}

                        onEnded={() => dispatch(playNextSong())}
                    // other props here
                    />

                </div>

            </div>
        </div>
    );
};

export default Player;
