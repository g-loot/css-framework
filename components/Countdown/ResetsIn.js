import React, { useState } from "react";

import Countdown from "./Countdown";

export default function ResetsIn() {
  const [before24, setBefore24] = useState(true);

  return (
    <span onClick={() => setBefore24(!before24)}>
      {before24 ? (
        <>Resets on August 24</>
      ) : (
        <>
          Resets in{" "}
          <Countdown
            separator=":"
            hasHours={true}
            hasMinutes={true}
            hasSeconds={true}
          />
        </>
      )}
    </span>
  );
}
