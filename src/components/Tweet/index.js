import React from "react";

import "./tweet.css";

export default function Tweet({ text, time, nickname }) {
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
    return days + "days";
  }

  return (
    <div className="tweet">
      <div className="initials-div">
        <p className="initials">AA</p>
      </div>
      <div>
        <div className="tweet-header">
          <p style={{ fontWeight: "bold" }}>{nickname}</p>
          <p className="post-age">{timeSincePosted(time)} ago</p>
        </div>

        <p className="tweet-text">{text}</p>
      </div>
    </div>
  );
}
