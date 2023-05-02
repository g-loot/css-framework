import React, { useState } from "react";

import Countdown from "./Countdown";

export default function ResetsIn(props) {
  const elStatus = props.status || 0;
  const [status, setStatus] = useState(elStatus);
  const label = props.label || "Resets";

  function incrementStatus() {
    console.log(status);
    setStatus(status+1);
    if (status === 2) {
      setStatus(0);
    }
  }

  return (
    <span onClick={incrementStatus} className="whitespace-nowrap">
      {status === 0 && <>{label} on August 24</>}
      {status === 1 && <>{label} on Monday at 2pm CET</>}
      {status === 2 && (
        <>
          {label} in{" "}
          <Countdown
            hasHours={true}
            hasMinutes={true}
            hasSeconds={true}
          />
        </>
      )}
    </span>
  );
}
