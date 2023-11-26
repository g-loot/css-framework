import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import TextareaExpandable from "@/components/Textarea/TextareaExpandable";
import Link from "next/link";
import Tooltip from "@/components/Tooltip/Tooltip";

export default function TabSettingsGameAccounts() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(prototype.getUserByID(1));
  const [submitting, setSubmitting] = useState(false);
  const [isValorantConnected, setIsValorantConnected] = useState(false);
  const [isAlreadyValorantConnected, setIsAlreadyValorantConnected] =
    useState(false);
  const [isLoLConnected, setIsLoLConnected] = useState(false);
  const [isLoLRegionSelected, setIsLoLRegionSelected] = useState(false);
  const [isAlreadyLoLConnected, setIsAlreadyLoLConnected] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      {selectedUser && (
        <div className="max-w-lg mx-auto">
          <h2 className="mb-8">Game accounts</h2>
          <div className="flex flex-col xl:flex-row items-stretch xl:items-start gap-x-16 gap-y-8">
            <div className="flex-1 order-2 xl:order-1 space-y-8">
              <div className="form-group">
                <label htmlFor="game-steam">
                  <span className="icon icon-steam" />
                  <span className="flex-1">Steam</span>
                  <div className="chip chip-xs chip-status chip-success">
                    <span className="icon icon-check" />
                    <span>Connected</span>
                  </div>
                </label>
                <div className="input-group">
                  <span className="icon icon-discord" />
                  <button className="button button-ghost">
                    <span>Connect account</span>
                  </button>
                  <input type="text" name="game-steam" id="game-steam" />
                </div>
                <p className="text-sm text-ui-300">This site is not associated with Valve Corp.</p>
              </div>
              <div className="form-group">
                <label htmlFor="game-valorant">
                  <span className="flex-1">Valorant</span>
                  <div className="chip chip-xs chip-status chip-success">
                    <span className="icon icon-check" />
                    <span>Connected</span>
                  </div>
                </label>
                <div className="input-group">
                  <Tooltip tooltip={<></>}>
                    <button className="button button-sm button-ghost">
                      <span className="icon icon-c-info" />
                    </button>
                  </Tooltip>
                  <input type="text" name="game-valorant" id="game-valorant" readOnly value={`${selectedUser.socials.riotValorantNickname}#${selectedUser.socials.riotValorantHashtag}`} />
                </div>
              </div>
            </div>
            <div className="w-full xl:w-72 order-1 xl:order-2">
              <div className="flex items-start gap-4 p-4 surface-ui-500">
                <span className="icon icon-20 icon-c-info" />
                <div>
                  <h5 className="text-lg mb-2">Connect game accounts</h5>
                  <ul className="list-outside ml-2 pl-1 space-y-1 list-disc text-sm">
                    <li>
                      Needed to play Missions and Ladders on Stryda in API games
                    </li>
                    <li>Get stats from your games</li>
                    <li>To record in-game play with the Stryda recorder.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-8" />
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className={`button button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={addToastWithDelay.bind(this, {
                title: "Success",
                icon: "f-check",
                color: "green",
                text: "Settings saved successfully.",
                autoDelete: true,
                autoDeleteDelay: 5000,
              })}
            >
              <span>Save changes</span>
            </button>
            <Link href={`/stryda/profile/1${prototype.getURLparams()}`}>
              <button type="button" className="button button-secondary">
                <span>Cancel</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
