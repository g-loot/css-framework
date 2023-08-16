import React, { useContext, useEffect, useState } from "react";

import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const modalClaimLadder = query.modalclaim === "true" ? true : false;
  const modalClaimDaily = query.modalclaimdaily === "true" ? true : false;
  const modalVideo = query.modalvideo === "true" ? true : false;

  const colorTypes = ["green", "orange", "red", "blue"];
  const [colorType, setColorType] = useState(colorTypes[0]);

  function handleColor(e) {
    setColorType(e.target.value);
  }

  const [title, setTitle] = useState("Lorem ipsum dolor");

  function handleTitle(e) {
    if (e.target.value.length > 0) {
      setTitle(e.target.value);
    } else {
      setTitle(false);
    }
  }

  const [description, setDescription] = useState("Consectetur adipiscing elit. Aliquam sed ante a ante <a href='#'>laoreet vulputate</a>.");

  function handleDescription(e) {
    if (e.target.value.length > 0) {
      setDescription(e.target.value);
    } else {
      setDescription(false);
    }
  }

  const [dismissable, setDismissable] = useState(true);

  function handleDismissable(e) {
    setDismissable(e.target.checked);
  }

  const [autoDelete, setAutoDelete] = useState(true);

  function handleAutoDelete(e) {
    setAutoDelete(e.target.checked);
  }

  const [autoDeleteDelay, setAutoDeleteDelay] = useState(5000);

  function handleAutoDeleteDelay(e) {
    setAutoDeleteDelay(e.target.value);
  }

  return (
    <>
      <PrototypeStructure title="Demo — banner">
        <div className="surface rounded-lg p-4 max-w-md mx-auto space-y-4">
          <h1 className="my-8">Banner builder</h1>

          <div className="form-group form-select">
            <label htmlFor="colour">Colour:</label>
            <select id="colour" onChange={(e) => handleColor(e)}>
              {colorTypes.map((value, key) => (
                <option key={key} value={value}>{value}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => handleTitle(e)}
              defaultValue={title}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={(e) => handleDescription(e)}
              defaultValue={description}
            />
          </div>

          <div className="form-toggle">
            <input
              type="checkbox"
              name="dismissable"
              id="dismissable"
              defaultChecked={dismissable}
              onChange={(e) => handleDismissable(e)}
            />
            <label htmlFor="dismissable">
              <i className="form-icon" /> Dismissable
            </label>
          </div>

          <div className="form-toggle">
            <input
              type="checkbox"
              name="autoDelete"
              id="autoDelete"
              defaultChecked={autoDelete}
              onChange={(e) => handleAutoDelete(e)}
            />
            <label htmlFor="autoDelete">
              <i className="form-icon" /> Auto-delete
            </label>
          </div>

          {autoDelete && (
            <div className="flex gap-2 items-center">
              <input
                type="range"
                className="form-range"
                min="0"
                max="20000"
                step="100"
                defaultValue={autoDeleteDelay}
                onChange={(e) => handleAutoDeleteDelay(e)}
              />
              <div className="form-group w-28">
                <input
                  min="1"
                  max="100"
                  name="autoDeleteDelay"
                  type="number"
                  className="is-nodefault"
                  defaultValue={autoDeleteDelay}
                  onChange={(e) => handleAutoDeleteDelay(e)}
                />
              </div>
              <span className="whitespace-nowrap">Auto-delete delay (in ms)</span>
            </div>
          )}

          <div className="flex items-center gap-4 justify-end border-t border-ui-700 pt-4">
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                uiContext.openAlert({
                  size: "medium",
                  title: title,
                  text: description,
                  color: colorType,
                  dismissable: dismissable,
                  autoDelete: autoDelete,
                  autoDeleteDelay: autoDeleteDelay,
                });
              }}
            >
              <span>Open alert</span>
            </button>
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                uiContext.openToastr({
                  size: "medium",
                  title: title,
                  text: description,
                  color: colorType,
                  dismissable: dismissable,
                  autoDelete: autoDelete,
                  autoDeleteDelay: autoDeleteDelay,
                });
              }}
            >
              <span>Open toast</span>
            </button>
          </div>
        </div>
      </PrototypeStructure>
    </>
  );
}
