import React from 'react';
import SongDetail from './SongDetail';
import SongImage from './SongImage';
import './SongList.css';

const SongsList = (props) => {
  const songs = props.songs.map((song, index) => {
    return (
      <div className = "song" key = {song.id}>
      <SongImage song = {song}/>
      <SongDetail song = {song} position = {index + 1}/>
      </div>
    )
  });

  return (
    <>
    {songs}
    </>
  );
}

export default SongsList;
