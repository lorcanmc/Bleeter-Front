import { useEffect, useState } from "react";
import TweetInput from "../TweetInput";

import TweetList from "../TweetList";
import Tweet from "../Tweet";
import "./main.css";

function Main() {
  const [tweetList, setTweetList] = useState([]);
  console.log("tweetList", tweetList);

  useEffect(() => {
    async function getTweets() {
      const response = await fetch("http://localhost:3001/tweets");
      const data = await response.json();
      console.log(data.payload)
      setTweetList(data.payload);
    }
    getTweets()
  }, []);

  

  return (
    <main className="Main">
      <TweetInput></TweetInput>
      <TweetList tweetList={tweetList}></TweetList>
    </main>
  );
}

export default Main;
