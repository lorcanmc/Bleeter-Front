import React from "react";
import Tweet from "../Tweet";

export default function TweetList({ tweetList }) {




  return (
    <div>
      {tweetList.map(({ text, timestamp, author, id, likes }) => {
        return (
          <Tweet
            key={id}
            tweetId={id}
            nickname={author}
            time={timestamp}
            text={text}
            likes={likes}
          ></Tweet>
        );
      })}
    </div>
  );
}
