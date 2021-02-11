import React from "react";

const Track = ({
  id,
  title,
  album,
  img,
  duration,
  changeTrack,
  trackSelected,
}) => (
  <li
    onClick={() => changeTrack(id)}
    className={trackSelected === id ? "border-thick card mt-3" : "card mt-3"}
    key={title}
    style={{ cursor: "pointer" }}
  >
    <div className="media card-body">
      <img className="song-image" src={img} alt="song cover" />
      <div>
        <p className="card-title font-weight-bold">{title}</p>
        <p>{}</p>
      </div>
    </div>
  </li>
);
export default Track;
