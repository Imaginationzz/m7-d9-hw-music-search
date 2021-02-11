import React from "react";
import Track from "./Track";

const MusicList = ({ tracks, changeTrack, trackSelected }) => (
  <ul className="col-md-4">
    {tracks.map((track, index) => (
      <Track
        {...track}
        key={index}
        changeTrack={changeTrack}
        trackSelected={trackSelected}
      />
    ))}
  </ul>
);
export default MusicList;
