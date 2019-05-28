import React, {Component} from 'react';
import SongsList from '../components/SongsList';
import './MusicContainer.css';

class MusicContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      songs: []
    }
  }

  componentDidMount(){
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://rss.itunes.apple.com/api/v1/gb/apple-music/top-songs/all/25/explicit.json';
  fetch(proxyUrl + url)
    .then((response) => response.json())
    .then((songsData) => {
      const songs = songsData.feed.results;
      this.setState({songs})
    })
    .catch((err) => console.log(err));
}

  render(){
    return(
      <div className = "songs-list">
      <SongsList songs = {this.state.songs}/>
      </div>
    )
  }
}

export default MusicContainer;
