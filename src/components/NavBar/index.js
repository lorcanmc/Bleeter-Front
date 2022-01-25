

import heart from "../../assets/heart.png";
import home from "../../assets/home.png";
import stats from "../../assets/stats.png";
import "./NavBar.css";
import NavButton from "../NavButton";

function NavBar() {
  const navSettings = [
    {
      src: home,
      text: "Home",
    },
    {
      src: stats,
      text: "Stats",
    },
    {
      src: heart,
      text: "Likes",
    },
    {
      src: "https://as2.ftcdn.net/v2/jpg/00/98/26/11/1000_F_98261159_Po5JS7ds82XaePJIsG1MiEtHRzOeUPNj.jpg",
      text: "Top Posters",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/25/25667.png",
      text: "Bookmarks",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/151/151917.png",
      text: "Settings",
    },
  ];

  return (
    <nav className="Nav-bar">
      <div className="upper-header">
        
        <img className="home-logo" src="https://static01.nyt.com/images/2015/08/09/arts/09SHAUN-SHEEP3/09SHAUN-SHEEP3-superJumbo.jpg" alt="sheep logo"></img>
        
        {navSettings.map((navSetting) => {
          return (
            <NavButton
              imgSrc={navSetting.src}
              text={navSetting.text}
              key={navSetting.text}
            ></NavButton>
          );
        })}
      </div>
      <div className="lower-header"></div>
    </nav>
  );
}

export default NavBar;
