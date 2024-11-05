import React, { useState } from 'react'
import './Video.css'
import videop from '../../assets/classroom.mp4'

const Video = () => {
    // {playState, setPlayState}
    // const player = useRef(null);

    // const closePlayer = (e)=>{
    //     if(e.target === player.current){
    //         setPlayState(false);
    //     }
    // }

  return (
    <div className='video hide'>
        {/* `video ${playState?'':'hide'}`} ref={player} onClick={closePlayer} */}
        <video src={videop} autoPlay muted controls></video>
    </div>
  )
}

export default Video