import React, { useState } from "react";

import "./tweet.css";
import heart from "../../assets/heart.png";
import { API_URL } from "../../config.js"

export default function Tweet({ text, time, nickname, tweetId }) {
  const [liked, setLiked] = useState(false);

  function timeSincePosted(postTime) {
    const seconds = Math.round((Date.now() - Number(time)) / 1000);
    if (seconds < 60) {
      return seconds + "s";
    }
    const minutes = Math.round(seconds / 60);
    if (minutes < 60) {
      return minutes + "m";
    }
    const hours = Math.round(minutes / 60);
    if (hours < 24) {
      return hours + "h";
    }
    const days = Math.round(hours / 24);
    if (days < 4000) {
      return days + " days";
    }
    return "unknown date / > 10 years";
  }

  function getInitials(nickname) {
    if (!nickname) {
      return "?";
    }
    const arr = nickname.split(" ");
    if (arr.length === 1) {
      return arr[0][0].toUpperCase();
    } else {
      return (arr[0][0] + arr[arr.length - 1][0]).toUpperCase();
    }
  }

  function getInitialsColor() {
    let hue = 100;
    if (nickname) {
      hue = nickname.charCodeAt(0) ** 3;
    } else {
      return `rgb(45, 45, 59)`;
    }

    const saturation = (hue % 50) + 50;

    return `hsl(${hue}, ${saturation}%, 30%)`;
  }

  async function handleLikeClick() {
    setLiked(!liked);
    const update = {
      liked: liked
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    };
    console.log(`${API_URL}/tweets/${tweetId}`)
    await fetch(`${API_URL}/tweets/${tweetId}`, requestOptions);
  }

  return (
    <div className="tweet">
      <div
        className="initials-div"
        style={{ backgroundColor: getInitialsColor() }}
      >
        <p className="initials">{getInitials(nickname)}</p>
      </div>
      <div className="tweet-main">
        <div className="tweet-header">
          <p style={{ fontWeight: "bold" }}>{nickname ? nickname : "Anon"}</p>
          <p className="post-age">{timeSincePosted(time)} ago</p>
        </div>

        <p className="tweet-text">{text}</p>
        <div
          className="like-button"
          onClick={handleLikeClick}
          style={{ backgroundColor: liked ? `rgb(0, 174, 255)` : "" }}
        >
        
          <img src={heart} alt="thumb up"></img>
        </div>
      </div>
    </div>
  );
}
