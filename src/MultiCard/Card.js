import React from "react";
import "./MasterCard.css";
const Card = ({ title, subtitle, img }) => {
  return (
    <div id="cardDiv">
      <div id="Cardcontainer">
        <h1 className="MrgTB">{title}</h1>
        <h3 className="MrgTB">{subtitle}</h3>
        <a>
          Shop <span>&gt;</span>
        </a>
      </div>
      <img src={img} />
    </div>
  );
};

export default Card;
