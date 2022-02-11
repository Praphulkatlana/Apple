import React from "react";
import MasterCard from "../MultiCard/MasterCard";
import "./container.css";
import PhoneContainer from "./Phone/PhoneContainer";
import TVcontainer from "./TV/TVcontainer";
import WatchContainer from "./Watch/WatchContainer";

const Container = () => {
  return (
    <div id="container">
      <PhoneContainer />
      <WatchContainer />
      <TVcontainer />
      <MasterCard />
    </div>
  );
};

export default Container;
