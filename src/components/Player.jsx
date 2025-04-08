
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveSong, playNextSong, playPrevSong} from '../app/songSlice';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Player = () => {
    const { currentSongIndex, songs, favs } = useSelector(state => state.song) || {};

    const dispatch = useDispatch();
    // Placeholder data if currentSong is null
    const songData = songs[currentSongIndex] || {
        title: "Unknown Song",
        artistName: "Unknown Artist",
        musicUrl: null,
        thumbnail: "https://placehold.co/400?text=no song found",
        duration: "0:00"
    };

    return (
        <div className='col-md-4 player'>


            <div className='album'>
                <div className='album-detail'>
                    <h2 className='fs-4'>{songData.title}</h2>
                    <small>{songData.artistName}</small>
                </div>

                <div className='album-top'>
                    <img src={songData.thumbnail} alt={songData.title} className='img-fluid rounded mb-2' />

                </div>




                <div className="audio-player">
                    {
                       favs.find((song)=>song.id === songData.id) ?  <FaBookmark className="bookmark-button" cursor={"pointer"} size={20} onClick={() => dispatch(addRemoveSong(songData))} /> : <FaRegBookmark  className="bookmark-button" cursor={"pointer"} size={20} onClick={() => {
                            if (songData.id) {
                                dispatch(addRemoveSong(songData))
                            }
                        }} />
                    }
                    <AudioPlayer

                        autoPlay
                        src={songData.musicUrl}
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
