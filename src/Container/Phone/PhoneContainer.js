import React from "react";

const PhoneContainer = () => {
  return (
    <div id="Main" className="PhoneBg">
      <div id="text">
        <h1>iPhone 13 Pro</h1>
        <h4>Oh. So. Pro.</h4>
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
        className="image_phone"
        src="https://www.macworld.co.uk/cmsdata/reviews/3809123/iphone_13_pro_cameras_thumb800.jpg"
      />
    </div>
  );
};

export default PhoneContainer;
