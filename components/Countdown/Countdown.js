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
  const hasDays = props.hasDays || false;
  const hasHours = props.hasHours || true;
  const hasMinutes = props.hasMinutes || true;
  const hasSeconds = props.hasSeconds || true;
  const hasLabels = props.hasLabels || true;
  const labelsAbbr = props.labelsAbbr || true;
  const className = props.className || "";
  const labelClassName = props.labelClassName || "";
  const separator = props.separator || "";
  const isAnimated = props.isAnimated !== undefined ? props.isAnimated : true;
  const targetDate =
    props.targetDate !== undefined ? props.targetDate : dateTimeAfterThreeDays;

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <>
        {isAnimated ? (
          <span className={`countdown ${className}`}>
            {hasDays && (
              <>
                <span style={{ "--value": days }} />
                {hasLabels && !labelsAbbr && (
                  <>
                    <i className={labelClassName}>Days</i>
                  </>
                )}
                {hasLabels && labelsAbbr && (
                  <>
                    <i className={labelClassName}>D</i>
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
                    <i className={labelClassName}>Hours</i>
                  </>
                )}
                {hasLabels && labelsAbbr && (
                  <>
                    <i className={labelClassName}>H</i>
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
                    <i className={labelClassName}>Minutes</i>
                  </>
                )}
                {hasLabels && labelsAbbr && (
                  <>
                    <i className={labelClassName}>M</i>
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
                    <i className={labelClassName}>Seconds</i>
                  </>
                )}
                {hasLabels && labelsAbbr && (
                  <>
                    <i className={labelClassName}>S</i>
                  </>
                )}
              </>
            )}
          </span>
        ) : (
          <span className={`${className}`}>
            {hasDays && (
              <>
                {days}
                {hasLabels && !labelsAbbr && (
                  <>
                    <span className={labelClassName}>Days</span>
                  </>
                )}
                {hasLabels && labelsAbbr && (
                  <>
                    <span className={labelClassName}>D</span>
                  </>
                )}
                {separator}
                {"  "}
              </>
            )}
            {hasHours && (
              <>
                {hours}
                {hasLabels && !labelsAbbr && (
                  <>
                    <span className={labelClassName}>Hours</span>
                  </>
                )}
                {hasLabels && labelsAbbr && (
                  <>
                    <span className={labelClassName}>H</span>
                  </>
                )}
                {separator}
                {"  "}
              </>
            )}
            {hasMinutes && (
              <>
                {minutes}
                {hasLabels && !labelsAbbr && (
                  <>
                    <span className={labelClassName}>Minutes</span>
                  </>
                )}
                {hasLabels && labelsAbbr && (
                  <>
                    <span className={labelClassName}>M</span>
                  </>
                )}
                {separator}
                {"  "}
              </>
            )}
            {hasSeconds && (
              <>
                {seconds}
                {hasLabels && !labelsAbbr && (
                  <>
                    <span className={labelClassName}>Seconds</span>
                  </>
                )}
                {hasLabels && labelsAbbr && (
                  <>
                    <span className={labelClassName}>S</span>
                  </>
                )}
              </>
            )}
          </span>
        )}
      </>
    );
  }
};

export default Countdown;
