import React from 'react';

const SongImage = (props) => {
  return (
    <img alt = {`Album art for ${props.song["im:name"].label}`} src = {props.song["im:image"][0].label} className = "song-image"></img>
  )
}

export default SongImage;
