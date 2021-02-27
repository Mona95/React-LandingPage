import React from "react";

import "./index.scss";

function FeatureCard({title, icon, children}) {
  return (
    <div className="feature-card">
      <div className="feature-card-icon" style={{backgroundColor : icon.bgColor}}>
        {icon.icon}
      </div>
      <div className="feature-card-title">{title}</div>
      <div className="feature-card-desc">
        {children}
      </div>
    </div>
  );
}

export default FeatureCard;
