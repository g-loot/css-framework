import React from "react";

function AchievementIcon(props) {
  console.log(props.url);
  return (
    <img
      src={`${props.url}?${Date.now()}`}
      width="100%"
      height="100%"
      alt=""
      className="absolute z-0 animate-scale-in animate-delay"
      style={{
        "--delay": "1.2s",
      }}
    />
  );
}

export default React.memo(AchievementIcon);