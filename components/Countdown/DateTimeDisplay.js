import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <>
      <span
        className={isDanger ? "countdown danger" : "countdown"}
      >
        <span style={{ "--value": value }} />
      </span>
    </>
  );
};

export default DateTimeDisplay;
