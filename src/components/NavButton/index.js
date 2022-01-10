import { useState } from "react"

function NavButton({ text, imgSrc}) {

    console.log(imgSrc)

  return (
    <button className="nav-button">
        <span className="nav-button-span">
            <img src={imgSrc} alt=""></img>
            <h2>{text}</h2>
        </span>
    </button>
  );
}

export default NavButton;
