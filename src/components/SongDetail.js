import React from 'react';
import './SongDetail.css';

const SongDetail = (props) => {
  return (
    <div className = "song-detail">
    <h2>
    {props.position + ": " + props.song["im:name"].label}
    </h2>
    <p>
    {props.song["im:artist"].label}
    </p>
    </div>
  )
}

export default SongDetail;
