import React, { useState } from "react";

export default function LoadMoreContainer({ children, ...props }) {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const label = props.label !== undefined ? props.label : "View more";

  function handleLoading() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 3000);
  }

  return (
    <>
      {isVisible ? (
        <>{children}</>
      ) : (
        <div className="text-center">
          <button
            type="button"
            className={`button ${props.className} ${
              loading ? "is-loading" : ""
            }`}
            onClick={handleLoading}
          >
            <span>{label}</span>
          </button>
        </div>
      )}
    </>
  );
}
