import React from "react";
import "./TV.css";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";

const TVcontainer = () => {
  return (
    <div id="Main_tv">
      <div id="text_tv1">
        <h4>An Apple Original Flim</h4>
        <h1>CODA</h1>
      </div>
      <img
        className="image_tv"
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1451C/production/_119782238_fbc1526f-08be-476f-84e1-059940d1e151.jpg"
      />
      <div id="text_tv2">
        <h2>ACADEMY AWARD NOMINEE</h2>
        <h2>BEST PICTURE</h2>
        <div id="bottomText">
          <h4>Stream now</h4>
          <PlayCircleOutlineSharpIcon className="playIcon" />
        </div>
      </div>
    </div>
  );
};

export default TVcontainer;
