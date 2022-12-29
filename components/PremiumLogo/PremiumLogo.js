import React from "react";

function PremiumLogo(props) {
  return (
    <img
      src={`${props.src}?${Date.now()}`}
      width={props.width}
      height={props.height}
      alt="Stryda Premium"
    />
  );
}

export default React.memo(PremiumLogo);