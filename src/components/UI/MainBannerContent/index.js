import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  MainBannerDescImage,
  MainBannerDescImageSmall,
} from "../../../assets/images";

import "./index.scss";

function MainBannerContent() {
  const isMobile = useMediaQuery({ maxWidth: 478 });

  return (
    <div className="mainbanner-content-wrapper">
      <div className="mainbanner-content">
        <div className="desc-img-wrapper">
          {isMobile ? (
            <MainBannerDescImageSmall width="100%" />
          ) : (
            <MainBannerDescImage width="100%" />
          )}
        </div>
        <div className="text-wrapper">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum
          faucibus consequat semper integer ornare. Elementum enim id sed
          pellentesque donec turpis neque, eget a. Fames.
        </div>
        <div className="button-wrapper">
          <button className="mainbanner-button">Try Now</button>
        </div>
      </div>
    </div>
  );
}

export default MainBannerContent;
