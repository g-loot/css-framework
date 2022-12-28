import React from "react";

function AchievementFrame(props) {
  return (
    <img
      src={`${props.url}?${Date.now()}`}
      width="100%"
      height="100%"
      alt=""
      className="relative z-10"
    />
  );
}

export default React.memo(AchievementFrame);