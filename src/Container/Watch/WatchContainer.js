import React from "react";
import AppleIcon from "@mui/icons-material/Apple";

import "./Watch.css";
const WatchContainer = () => {
  return (
    <div id="Main_w">
      <div id="text_w">
        <h6>New</h6>
        <div className="logo_w">
          <AppleIcon className="logoImg_w" />
          <h1>Watch</h1>
        </div>
        <h5>SERIES 7</h5>
        <h4>Introducing our largest display yet.</h4>
        <div className="LinkText">
          <a>
            Learn more <span>&gt;</span>
          </a>
          <a>
            Buy <span>&gt;</span>
          </a>
        </div>
      </div>
      <img
        className="image_w"
        src="https://onsitego.com/blog/wp-content/uploads/2021/09/Apple-Watch-Series-7-Green-768x400.jpg"
      />
    </div>
  );
};

export default WatchContainer;
