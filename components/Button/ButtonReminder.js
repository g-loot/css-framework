import React, { useState } from "react";

export default function ButtonReminder(props) {
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <button
      type="button"
      className={`button ${props.className} ${
        loading ? "is-loading" : ""
      }`}
      onClick={handleLoading}
    >
      <span>View more</span>
    </button>
  );
}