import React, { Component } from "react";

class MusicDetail extends Component {
  state = {
    track: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.trackSelected !== this.props.trackSelected) {
      this.setState({
        track: this.props.tracks.find(
          (track) => track.id === this.props.trackSelected.id
        ),
      });
    }
  }

  render() {
    return this.state.track ? (
      <div className="col-md-8">
        <div className="row mt-2">
          <div className="col-sm-12">
            <h1>{this.state.track.title}</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-5 mt-3">
            <img
              className="book-cover"
              src={this.state.track.img}
              alt="song selected"
            />
          </div>
          <div className="col-sm-7">
            <p>
              <span className="font-weight-bold">Description:</span>{" "}
              {this.state.track.description}
            </p>
            <p>
              <span className="font-weight-bold">Price:</span>{" "}
              {this.state.track.price}
            </p>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-sm-8">
        <div className="row mt-2">
          <div className="col-sm-12">
            <h3>Please select a Track!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicDetail;
