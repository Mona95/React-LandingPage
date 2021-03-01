import React from "react";
import MainBannerRightImage from "../../../assets/images/mainbanner-right.png";

import "./index.scss";

function MainBannerImg() {
  return (
    <div className="mainbanner-img-wrapper">
      <img
        className="mainbanner-img"
        alt="mainbanner-img"
        src={MainBannerRightImage}
      />
    </div>
  );
}

export default MainBannerImg;
