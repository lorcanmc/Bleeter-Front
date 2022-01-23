

import thumbUp from "../../assets/thumbUp.png" 
import "./NavBar.css";
import NavButton from "../NavButton";

function NavBar() {
  const navSettings = [
    {
      src: "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-house-icon-png-image_695726.jpg",
      text: "Home",
    },
    {
      src: "https://as1.ftcdn.net/v2/jpg/02/66/49/72/1000_F_266497240_sbKnQ0BEoOPafo9JaefZZz00WK7t8LHq.jpg",
      text: "Stats",
    },
    {
      src: thumbUp,
      text: "Likes",
    },
    {
      src: "https://as2.ftcdn.net/v2/jpg/00/98/26/11/1000_F_98261159_Po5JS7ds82XaePJIsG1MiEtHRzOeUPNj.jpg",
      text: "Messages",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/25/25667.png",
      text: "Bookmarks",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/151/151917.png",
      text: "Lists",
    },
  ];

  return (
    <nav className="Header">
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
