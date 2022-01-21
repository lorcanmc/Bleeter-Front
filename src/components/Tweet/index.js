import React from 'react';

export default function Tweet({ text, time }) {

    function timeSincePosted(postTime) {
        const seconds = Math.round((Date.now() - Number(time)) / 1000)
        return seconds;
    }


  return <div>
      <h1>{text}</h1>
      <p>Posted {timeSincePosted(time)} seconds ago</p>
  </div>;
}
