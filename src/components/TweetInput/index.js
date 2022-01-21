import { useState } from "react";

import { API_URL } from "../../config.js"

export default function TweetInput() {
  const [tweetText, setTweetText] = useState("");

  function handleChange(e) {
    setTweetText(e.target.value);
  }

  function setTweetButtonStyle() {
    if (tweetText === "") {
      return { pointerEvents: "none", opacity: 0.4 };
    }
  }

  async function handleClick(tweetText) {
    const tweetObj = {
      text: tweetText,
      timestamp: Date.now().toString(),
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tweetObj),
    };
    const response = await fetch(
      `${API_URL}/tweets`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="tweet-input-box">
      <h1>Home</h1>
      <input style={{fontSize: "22px"}}onChange={handleChange} placeholder="What's happening?"></input>
      <button
        onClick={() => handleClick(tweetText)}
        style={setTweetButtonStyle()}
        className="tweet-button"
      >
        Tweet
      </button>
    </div>
  );
}
