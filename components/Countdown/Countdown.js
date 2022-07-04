import React, { useRef, useState } from 'react';

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const date = new Date().getUTCDate();
  const difference = +new Date(`${year}-10-1`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
}

export default function Countdown(props) {
  const additionalClassNames = props.additionalClassNames !== undefined ? props.additionalClassNames : ''
  const separator = props.separator !== undefined ? props.separator : ''

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  
  return (
    <span className={`countdown ${additionalClassNames}`}>
      <span style={{"--value": timeLeft.hours}}></span>{separator}
      <span style={{"--value": timeLeft.minutes}}></span>{separator}
      <span style={{"--value": timeLeft.seconds}}></span>
    </span>
  );
}