import { useState } from "react";

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
      "http://localhost:3001/tweets",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Home</h1>
      <input onChange={handleChange} placeholder="What's happening?"></input>
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
