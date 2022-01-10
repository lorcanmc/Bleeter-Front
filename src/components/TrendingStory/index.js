function TrendingStory({ story }) {
  return (
    <div>
      <button>
        <span>{story.topic}</span>
        <br></br>
        <span>{story.heading}</span>
      </button>
    </div>
  );
}

export default TrendingStory;
