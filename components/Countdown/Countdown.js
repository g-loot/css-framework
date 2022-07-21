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
  const hasDays = props.hasDays !== undefined ? props.hasDays : false;
  const hasSeconds = props.hasSeconds !== undefined ? props.hasSeconds : true;
  const hasLabels = props.hasLabels !== undefined ? props.hasLabels : false;
  const labelsAbbr = props.labelsAbbr !== undefined ? props.labelsAbbr : false;
  const additionalClassNames = props.additionalClassNames !== undefined ? props.additionalClassNames : '';
  const separator = props.separator !== undefined ? props.separator : '';

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
      { hasDays && (
        <>
          <span style={{"--value": timeLeft.days}}/>{ hasLabels && !labelsAbbr && (<><i>Days</i></>)}{ hasLabels && labelsAbbr && (<><i>Days</i></>)}{separator}
        </>
      )}
      <span style={{"--value": timeLeft.hours}}/>{ hasLabels && !labelsAbbr && (<><i>Hours</i></>)}{ hasLabels && labelsAbbr && (<><i>Hrs</i></>)}{separator}
      <span style={{"--value": timeLeft.minutes}}/>{ hasLabels && !labelsAbbr && (<><i>Minutes</i></>)}{ hasLabels && labelsAbbr && (<><i>Min</i></>)}
      { hasSeconds && (
        <>
          {separator}
          <span style={{"--value": timeLeft.seconds}}/>{ hasLabels && !labelsAbbr && (<><i>Seconds</i></>)}{ hasLabels && labelsAbbr && (<><i>Sec</i></>)}
        </>
      )}
      
    </span>
  );
}