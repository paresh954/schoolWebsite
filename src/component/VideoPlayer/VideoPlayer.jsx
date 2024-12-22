import React, { useRef } from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({playState,setPlayState}) => {
  
    const player=useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }
    return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src='https://cdn.pixabay.com/video/2024/04/03/206779_large.mp4' autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer