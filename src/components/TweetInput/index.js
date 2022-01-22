import { useState } from "react";

// import { API_URL } from "../../config.js";

export default function TweetInput({ handleClick }) {
  const [tweetText, setTweetText] = useState("");
  const [nickname, setNickName] = useState("");

  function handleTextChange(e) {
    setTweetText(e.target.value);
  }

  function handleNicknameChange(e) {
    setNickName(e.target.value);
  }

  function setTweetButtonStyle() {
    if (tweetText === "") {
      return { pointerEvents: "none", opacity: 0.4 };
    }
  }


  return (
    <div className="tweet-input-box">
      <input
        className="nickname-input"
        onChange={handleNicknameChange}
        placeholder="Nickname(optional)"
      ></input>

      <input
        className="tweet-input-textbox"
        onChange={handleTextChange}
        placeholder="What's happening?"
      ></input>

      <button
        onClick={() => handleClick(tweetText, nickname)}
        style={setTweetButtonStyle()}
        className="tweet-button"
      >
        Bleet
      </button>
    </div>
  );
}
