
import React, { useRef, useState } from 'react'
import './App.css'
import Player from './Player/Player';
import {songsdata} from './Player/audios';


const App = () => {

   const [songs, setSongs] = useState(songsdata);
   const [isPlaying, setisPlaying] = useState(false);
   const [currentSong, setCurrentSong] = useState(songsdata[0]);
 
   const audioElem = useRef();
 
   return (
      <div className ="custom-background">
         
         <div className='App'>
         <audio src="https://soundcloud.com/new-hindi-songs-2024/o-maahi-arijit-singh-pritam?utm_source=clipboard&=text&utm_campaign=social_sharing" ref={audioElem} />
         <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setisPlaying={setisPlaying} audioElem={audioElem}/>
         </div>
      </div>
   );
};

export default App;