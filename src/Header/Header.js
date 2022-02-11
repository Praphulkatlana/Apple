import React, { useState, useEffect } from "react";
import "./header.css";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
// import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
const Header = () => {
  const [NormalHeader, setNormalHeader] = useState(true);

  const toggleHeader = () => {
    setNormalHeader(!NormalHeader);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setNormalHeader(true);
  };
  return (
    <div>
      {NormalHeader && (
        <div id="NormalHeader">
          <div id="logo" className="cmnClass">
            <AppleIcon className="hoverWhite" />
          </div>
          <div id="navItems" className="">
            <ul>
              <li>
                <a className="hoverWhite">Store</a>
              </li>
              <li>
                <a className="hoverWhite">Mac</a>
              </li>
              <li>
                <a className="hoverWhite">iPad</a>
              </li>
              <li>
                <a className="hoverWhite">iPhone</a>
              </li>
              <li>
                <a className="hoverWhite">Watch</a>
              </li>
              <li>
                <a className="hoverWhite">AirPods</a>
              </li>
              <li>
                <a className="hoverWhite">
                  Tv<span>&#38;</span>Home
                </a>
              </li>
              <li>
                <a className="hoverWhite">
                  Only<span>&nbsp;</span>on<span>&nbsp;</span>Apple
                </a>
              </li>
              <li>
                <a className="hoverWhite">Accessories</a>
              </li>
              <li>
                <a className="hoverWhite">Support</a>
              </li>
            </ul>
          </div>
          <div
            id="searchIcon"
            className=" cmnClass hoverWhite"
            onClick={toggleHeader}
          >
            <SearchIcon />
          </div>
          <div id="cart" className="cmnClass hoverWhite">
            <WorkOutlineRoundedIcon />
          </div>
        </div>
      )}
      {!NormalHeader && (
        <div id="InputHeader">
          <div id="blurBg"></div>
          <div id="InputHeaderitems">
            <SearchIcon className="SearchIcon" />
            <input placeholder="Search apple.com"></input>
            <button onClick={toggleHeader}>X</button>
          </div>
          <div id="InputHeaderSuggestion">
            <ul>
              <p>Quick Links</p>
              <li>Visiting an Apple Store FAQ</li>
              <li>AirPods</li>
              <li>AirTag</li>
              <li>AppleCare+</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
