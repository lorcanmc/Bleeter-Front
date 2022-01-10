import { useState } from "react";

import "./Header.css";
import NavButton from "../NavButton";

function Header() {
  const navSettings = [
    {
      src: "https://as2.ftcdn.net/v2/jpg/00/97/00/07/1000_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg",
      text: "Home",
    },
    {
      src: "https://as1.ftcdn.net/v2/jpg/02/66/49/72/1000_F_266497240_sbKnQ0BEoOPafo9JaefZZz00WK7t8LHq.jpg",
      text: "Explore",
    },
    {
      src: "https://as2.ftcdn.net/v2/jpg/01/08/24/99/1000_F_108249947_UMBLfSCpTWU6AGiUz0F7a524koG3eO0z.jpg",
      text: "Notifications",
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
    { src: "../Header/account_icon.png", text: "Profile" },
    {
      src: "https://as2.ftcdn.net/v2/jpg/03/16/59/73/1000_F_316597363_G8dPZwXqbsq9vs7uiomI9gIlwdT7sywy.jpg",
      text: "More",
    },
  ];

  return (
    <header className="Header">
      <div className="upper-header">
        <button className="home-button home-logo">
          <img src="https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png" alt=""></img>
        </button>
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
    </header>
  );
}

export default Header;
