import TrendingStory from "../TrendingStory";

function Aside() {
  const trendingStories = [
    {
      topic: "Politics",
      heading: "Nigel Farage",
      NumberOfTweets: 8000,
    },
    {
      topic: "Sports",
      heading: "David Beckham",
      NumberOfTweets: 2000,
    },
  ];

  return (
    <aside className="Aside">
      <input id="aside-input" type="text" placeholder="Search Twitter"></input>
      <div className="whats-happening">
        <h2>What's Happening</h2>
        {trendingStories.map((story) => {
          return <TrendingStory story={story} key={story.heading}></TrendingStory>
        })}
      </div>
    </aside>
  );
}

export default Aside;
