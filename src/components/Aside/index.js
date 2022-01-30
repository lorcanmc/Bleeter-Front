

import LoginPortal from "../LogInPortal";

export default function Aside() {
  // const trendingStories = [
  //   {
  //     topic: "SoC",
  //     heading: "Week 10 soon",
  //     NumberOfTweets: 8000,
  //   },
  //   {
  //     topic: "Sports",
  //     heading: "David Beckham",
  //     NumberOfTweets: 2000,
  //   },
  // ];

  return (
    <aside className="Aside">
      <input id="aside-input" type="text" placeholder="Search Bleeter"></input>
      <LoginPortal></LoginPortal>
    </aside>
  );
}
