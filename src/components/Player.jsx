import React, { useEffect, useRef, useState } from 'react';
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import { PiSpeakerHighFill } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, playNextSong, playPrevSong, removeFromFav } from '../app/songSlice';


const Player = () => {
    const { currentSongIndex,songs ,favs} = useSelector(state => state.song) || {};
    const songRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    // Placeholder data if currentSong is null
    const songData = songs[currentSongIndex] || {
        title: "Unknown Song",
        artistName: "Unknown Artist",
        musicUrl: "",
        thumbnail: "https://placehold.co/400?text=no song found",
        duration: "0:00"
    };

    // Play song when currentSong changes
    useEffect(() => {
        if (songRef.current && songData.musicUrl) {
            songRef.current.src = songData.musicUrl;
            songRef.current.play();
            setIsPlaying(true);
        }
    }, [currentSongIndex]);

    // Update progress bar as song plays
    useEffect(() => {
        const audio = songRef.current;
        if (!audio) return;

        const updateProgress = () => {
            const percent = (audio.currentTime / audio.duration) * 100;
            setProgress(percent || 0);
        };

        audio.addEventListener("timeupdate", updateProgress);
        return () => audio.removeEventListener("timeupdate", updateProgress);
    }, []);

    // Play/Pause function
    const togglePlayPause = () => {
        if (!songRef.current || !songData.musicUrl) return;

        if (isPlaying) {
            songRef.current.pause();
        } else {
            songRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Seek when user clicks on progress bar
    const handleProgressClick = (e) => {
        if (!songRef.current || !songData.musicUrl) return;

        const progressBar = e.target;
        const newTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * songRef.current.duration;
        songRef.current.currentTime = newTime;
    };

    return (
        <div className='col-md-4 player'>


            <div className='my-2 album'>
                <div className='album-top'>
                    <img src={songData.thumbnail} alt={songData.title} className='img-fluid rounded mb-2' />
                    <div className='album-detail'>
                        <h2 className='fs-4'>{songData.title}</h2>
                        <small>{songData.artistName}</small>
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="progress-bar-container" onClick={handleProgressClick}>
                    <progress id="file" className='w-100' value={progress} max="100">{progress}%</progress>
                </div>

                {/* Time Display */}
                <div className='d-flex align-items-center justify-content-between mb-2'>
                    <small>
                        {songRef.current && !isNaN(songRef.current.currentTime)
                            ? `${Math.floor(songRef.current.currentTime / 60)
                                .toString()
                                .padStart(2, "0")}:${Math.floor(songRef.current.currentTime % 60)
                                    .toString()
                                    .padStart(2, "0")}`
                            : "00:00"}
                    </small>
                    <small>{songData.duration}</small>
                </div>

                {/* Audio Element */}
                <audio ref={songRef}></audio>

                {/* Controls */}
                <div className='d-flex align-items-center   justify-content-between'>

                   {
                        favs.includes(songData.id) ?  <FaBookmark cursor={"pointer"} size={20} onClick={()=>dispatch(removeFromFav(songData.id))}/>  : <FaRegBookmark cursor={"pointer"} size={20} onClick={()=>dispatch(addToFav(songData.id))}/>
                   }

                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <IoPlayBack size={25} cursor={"pointer"} onClick={()=>dispatch(playPrevSong())} />
                        <button className="play-btn" onClick={togglePlayPause} disabled={!songData.musicUrl}>
                            {isPlaying ? <FaPause size={25} /> : <FaPlay size={25} />}
                        </button>
                        <IoPlayForward size={25} cursor={"pointer"} onClick={()=>dispatch(playNextSong())}/>
                    </div>
                    <PiSpeakerHighFill size={25} />
                </div>
            </div>
        </div>
    );
};

export default Player;
