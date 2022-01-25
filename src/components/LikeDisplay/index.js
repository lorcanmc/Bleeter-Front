import React from 'react';

import heart from "../../assets/heart.png"

export default function LikeDisplay({ likes, liked, handleClick }) {


    
  return (
    <div className="like-display">
    <p>{likes ? likes : ""}</p>
    <div
      className="like-button"
      onClick={handleClick}
      style={{ backgroundColor: liked ? `rgb(0, 174, 255)` : "" }}
    >
      <img src={heart} alt="thumb up"></img>
    </div>
    
  </div>
  )
}
