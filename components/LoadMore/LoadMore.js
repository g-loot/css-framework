import React, { useState } from "react";

export default function LoadMore(props) {
  const [loading, setLoading] = useState(false);
  const label = props.label || 'View more';

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
      <span>{label}</span>
    </button>
  );
}
