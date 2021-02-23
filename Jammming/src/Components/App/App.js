import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [{ name: 'name1', artist:'artist1', album: 'album1', id: 1 }, 
                      { name: 'name2', artist:'artist2', album: 'album2', id: 2 },
                      { name: 'name3', artist:'artist3', album: 'album3', id: 3 }],
      playlistName: 'My playlist',
      playlistTracks: [{ name: 'playlistName1', artist:'playlistArtist1', album: 'playlistAlbum1', id: 4 },
                      { name: 'playlistName2', artist:'playlistArtist2', album: 'playlistAlbum2', id: 5 }, 
                      { name: 'playlistName3', artist:'playlistArtist3', album: 'playlistAlbum3', id: 6 } ]
    }
    // This binding is necessary to make 'this' work in the callback
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatedPlaylistName = this.updatedPlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  //addtrack method. 
  // Define a variable named tracks and store the state of playlistTracks.
  // if the searched track exists in the playlistTrack array, then exit.
  // if not, the searched track gets pushed into the playlistTrack array.
  // set the a new state that includes the newly added track.
  // The user can trigger the .addTrack() method by clicking the + sign from the search result list.

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(this.state.playlistTracks.track.id.find( savedTrack => 
      savedTrack.id === track.id)) {
        return;
      } 

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  // removeTrack method.
  // Define a variable named tracks and store the state of playlistTracks
  // Filter method looks at each item in the array and if the clicked track is equal to any of the items on the array, the filter method will return false and filter that track out of the array.
  // After the track is removed, the state of playlistTracks array is set again without the removed track.

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  // updatedPlaylistName method.
  // Takes name as an argument and sets the state of the playlistName to the input name.

  updatedPlaylistName(name) {
    this.setState({ playlistName: name });
  }

  // savePlaylist method.
  // Generates an array of uri values called trackURIs from the playlistTracks property.

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  // search method.
  // Accepts a search term and logs the term to the console.

  search(term) {
    console.log(term);
  }


  // render method.
  render(){
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
          <SearchBar 
          onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults 
            searchResults={this.state.searchResults}
            onAdd={this.addTrack} />
          <Playlist 
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatedPlaylistName}
            onSave={this.savePlaylist} />
        </div>
      </div>
    </div>
    )
  }
}


export default App;
