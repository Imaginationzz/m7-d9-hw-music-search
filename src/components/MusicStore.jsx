import React, { Component } from "react";

import MusicDetail from "./MusicDetail";
import MusicList from "./MusicList";

class MusicStore extends Component {
  state = {
    trackSelected: null,
    tracks: [],
    loading: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.query !== this.props.query) {
      console.log(prevProps);
      try {
        let response = await fetch(
          `https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.props.query}`
        );
        let tracks = await response.json();
        this.setState({ loading: false });
        this.setState({ tracks: tracks });
      } catch (error) {
        console.log(error);
      }
    }
  };
  changeTrack = (id) => this.setState({ trackSelected: id });

  render() {
    return (
      <div className="row">
        <MusicList
          trackSelected={this.state.trackSelected}
          changeTrack={this.changeTrack}
          SetQuery={this.props.SetQuery}
          tracks={this.state.tracks}
        />
        <MusicDetail
          trackSelected={this.state.trackSelected}
          tracks={this.state.tracks}
        />
      </div>
    );
  }
}

export default MusicStore;
