import { useEffect, useState } from "react";
import TweetInput from "../TweetInput";

import { API_URL } from "../../config.js";
import TweetList from "../TweetList";
import "./main.css";

function Main() {
  const [tweetList, setTweetList] = useState([]);
  const [tweetsPosted, setTweetsPosted] = useState(0);
  // console.log("tweetList", tweetList);

  useEffect(() => {
    async function getTweets() {
      const response = await fetch(`${API_URL}/tweets`);
      const data = await response.json();
      setTweetList(data.payload);
    }
    getTweets();
  }, [tweetsPosted]);

  async function handleTweetButtonClick(tweetText, nickname) {
    const tweetObj = {
      text: tweetText,
      timestamp: Date.now().toString(),
      name: nickname ? nickname : "Anon"
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tweetObj),
    };

    await fetch(`${API_URL}/tweets`, requestOptions);
    document.querySelector(".tweet-input-textbox").value = "";
    setTweetsPosted(tweetsPosted + 1)
  }

  return (
    <main className="Main">
      <h1>Home</h1>
      <TweetInput handleClick={handleTweetButtonClick}></TweetInput>
      <TweetList tweetList={tweetList}></TweetList>
    </main>
  );
}

export default Main;
