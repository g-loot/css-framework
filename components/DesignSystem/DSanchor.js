import React, { useContext } from "react";
import { UiContext } from "@/contexts/ui";
import Link from "next/link";

function stringToAnchor(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "") // remove spaces
    .replace(/[^a-z0-9-_]/gi, ""); // keep only alphanumeric, dashes, and underscores
}

export default function Anchor(props) {
  const uiContext = useContext(UiContext);
  const title = props.title || "";
  const anchor = stringToAnchor(title);

  const handleCopy = () => {
    let currentURL = window.location.href;

    const hashIndex = currentURL.indexOf("#");
    if (hashIndex !== -1) {
      currentURL = currentURL.substring(0, hashIndex);
    }

    uiContext.openToastr({
      size: "medium",
      text: "URL copied to your clipboard",
      color: "green",
      autoDelete: true,
      autoDeleteDelay: 2500,
    });
    navigator.clipboard.writeText(`${currentURL}#${anchor}`);
  };

  return (
    <div className="flex items-center gap-4 group mb-3" id={anchor}>
      <Link href={`#${anchor}`}>
        <button type="button" className="interactive" onClick={handleCopy}>
          <h2 className="h3">{title}</h2>
        </button>
      </Link>
      <Link href={`#${anchor}`}>
        <button
          type="button"
          className="button button-secondary rounded-full opacity-0 group-hover:opacity-100"
          onClick={handleCopy}
        >
          <span className="icon icon-url" />
        </button>
      </Link>
    </div>
  );
}
