import React from 'react';
import './SongImage.css'

const SongImage = (props) => {
  return (
    <img alt = {`Album art for ${props.song.name}`} src = {props.song.artworkUrl100} className = "song-image"></img>
  )
}

export default SongImage;
