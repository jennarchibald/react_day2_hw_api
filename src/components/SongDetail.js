import React from 'react';
import './SongDetail.css';

const SongDetail = (props) => {
  return (
    <div className = "song-detail">
    <h2>
    {props.position + ": " + props.song.name}
    </h2>
    <p>
    {props.song.artistName}
    </p>
    </div>
  )
}

export default SongDetail;
