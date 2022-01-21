import React from "react";
import Tweet from "../Tweet";

export default function TweetList({ tweetList }) {
  return (
    <div>
      <h1>TweetList</h1>
      {tweetList.map(({ text, timestamp }) => {
        return <Tweet key={timestamp} time={timestamp} text={text}></Tweet>;
      })}
    </div>
  );
}
