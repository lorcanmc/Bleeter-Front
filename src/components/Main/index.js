import { useEffect, useState } from "react";
import TweetInput from "../TweetInput";

import { API_URL } from "../../config.js"
import TweetList from "../TweetList";
import "./main.css";

function Main() {
  const [tweetList, setTweetList] = useState([]);
  console.log("tweetList", tweetList);

  useEffect(() => {
    async function getTweets() {
      const response = await fetch(`${API_URL}/tweets`);
        // `${API_URL}/tweets`);
      const data = await response.json();
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
