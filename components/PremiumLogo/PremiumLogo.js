import React from "react";

export default function PremiumLogo(props) {
  return (
    <img
      src={`${props.src}?${Date.now()}`}
      width={props.width || 'auto'}
      height={props.height || 'auto'}
      alt="Stryda Premium"
      className={props.className || ''}
    />
  );
}