import React from "react";
import { useCountdown } from "../../hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const Countdown = (props) => {
  const hasDays = props.hasDays !== undefined ? props.hasDays : false;
  const hasHours = props.hasHours !== undefined ? props.hasHours : false;
  const hasMinutes = props.hasMinutes !== undefined ? props.hasMinutes : false;
  const hasSeconds = props.hasSeconds !== undefined ? props.hasSeconds : true;
  const hasLabels = props.hasLabels !== undefined ? props.hasLabels : false;
  const labelsAbbr = props.labelsAbbr !== undefined ? props.labelsAbbr : false;
  const className = props.className !== undefined ? props.className : "";
  const separator = props.separator !== undefined ? props.separator : "";
  const targetDate =
    props.targetDate !== undefined ? props.targetDate : dateTimeAfterThreeDays;

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <span className={`countdown ${className}`}>
        {hasDays && (
          <>
            <span style={{ "--value": days }} />
            {hasLabels && !labelsAbbr && (
              <>
                <small>Days</small>
              </>
            )}
            {hasLabels && labelsAbbr && (
              <>
                <small>Days</small>
              </>
            )}
            {separator}
          </>
        )}
        {hasHours && (
          <>
            <span style={{ "--value": hours }} />

            {hasLabels && !labelsAbbr && (
              <>
                <small>Hours</small>
              </>
            )}
            {hasLabels && labelsAbbr && (
              <>
                <small>Hrs</small>
              </>
            )}
            {separator}
          </>
        )}
        {hasMinutes && (
          <>
            <span style={{ "--value": minutes }} />
            {hasLabels && !labelsAbbr && (
              <>
                <small>Minutes</small>
              </>
            )}
            {hasLabels && labelsAbbr && (
              <>
                <small>Min</small>
              </>
            )}
            {separator}
          </>
        )}
        {hasSeconds && (
          <>
            <span style={{ "--value": seconds }} />
            {hasLabels && !labelsAbbr && (
              <>
                <small>Seconds</small>
              </>
            )}
            {hasLabels && labelsAbbr && (
              <>
                <small>Sec</small>
              </>
            )}
          </>
        )}
      </span>
    );
  }
};

export default Countdown;
