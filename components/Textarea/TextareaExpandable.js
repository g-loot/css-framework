import React, { useEffect, useRef, useState } from "react";

export default function TextareaExpandable(props) {
  const minRows = props.rows || 0;

  const [rows, setRows] = useState(minRows);
  const [value, setValue] = useState("");
  const text = props.text || "";

  useEffect(() => {
    const rowlen = text.split("\n");
    if (rowlen.length > minRows) {
      setRows(rowlen.length);
    }
  }, []);

  useEffect(() => {
    const rowlen = value.split("\n");
    if (rowlen.length > minRows) {
      setRows(rowlen.length);
    }
  }, [value]);

  const messageInput = useRef();

  return (
    <textarea
      ref={messageInput}
      name="message"
      id="message"
      className="max-h-[200px] resize-none"
      rows={rows}
      onChange={(text) => setValue(text.target.value)}
    >
      {text}
    </textarea>
  );
}
