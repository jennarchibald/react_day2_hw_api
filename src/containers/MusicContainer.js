import React, {Component} from 'react';
import SongsList from '../components/SongsList';

class MusicContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      songs: []
    }
  }

  componentDidMount(){
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
  fetch(url)
    .then((response) => response.json())
    .then((songsData) => {
      const songs = songsData.feed.entry;
      this.setState({songs})
    })
    .catch((err) => console.log(err));
}

  render(){
    return(
      <>
      <SongsList songs = {this.state.songs}/>
      </>
    )
  }
}

export default MusicContainer;
