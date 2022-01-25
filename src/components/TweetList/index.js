import React from "react";
import Tweet from "../Tweet";

export default function TweetList({ tweetList }) {




  return (
    <div>
      {tweetList.map(({ text, timestamp, author, id }) => {
        return (
          <Tweet
            key={id}
            tweetId={id}
            time={timestamp}
            text={text}
            nickname={author}
          ></Tweet>
        );
      })}
    </div>
  );
}
