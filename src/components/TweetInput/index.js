import { useState } from "react";

import { API_URL } from "../../config.js";

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
    await fetch(`${API_URL}/tweets`, requestOptions);

    document.querySelector("input").value = "";
  }

  return (
    <div className="tweet-input-box">
    
      
      <input className="nickname-input" placeholder="Nickname(optional)"></input>
    
      <input
        class="tweet-input-textbox"
        onChange={handleChange}
        placeholder="What's happening?"
      ></input>
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
