import React from 'react';

const SongDetail = (props) => {
  return (
    <>
    <h2>
    {props.song["im:name"].label}
    </h2>
    <p>
    {props.song["im:artist"].label}
    </p>
    </>
  )
}

export default SongDetail;
