import React,{Fragment} from 'react';
import SongDetail from './SongDetail';
import SongImage from './SongImage';

const SongsList = (props) => {
  const songs = props.songs.map((song, index) => {
    return (
      <Fragment key = {song.id.attributes["im:id"]}>
      <SongImage song = {song}/>
      <SongDetail song = {song}/>
      </Fragment>
    )
  });

  return (
    <ul>
    {songs}
    </ul>
  );
}

export default SongsList;
