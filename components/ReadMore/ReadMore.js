import React, { useState, useEffect } from "react";

export default function ReadMore(props) {
  const [isActive, setActive] = useState(false);
  const maxNumberChar = props.max;
  const content = props.content;
  const trimmedContent = content.substring(0,maxNumberChar)
  

  function changeActive(bool){
    setActive(bool)
  }

  if (content.length > maxNumberChar) {
    return (
      <>
        {!isActive ? (
          <>
            {trimmedContent}{"..."}
            <button type="button" onClick={changeActive.bind(this, true)} className="link link-main">
              Read more
            </button>
          </>
        ) : (
          <>
            {content}{" "}
            <button type="button" onClick={changeActive.bind(this, false)} className="link link-main">
              Read less
            </button>
          </>
        )}
      </>
    );
  } else {
    return content;
  }
}
