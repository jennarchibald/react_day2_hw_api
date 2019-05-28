import React from 'react';
import './SongImage.css'

const SongImage = (props) => {
  return (
    <img alt = {`Album art for ${props.song["im:name"].label}`} src = {props.song["im:image"][2].label} className = "song-image"></img>
  )
}

export default SongImage;
