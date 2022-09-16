import React, { useContext, useState } from "react";

import { UiContext } from "../../../contexts/ui.js";
import { usePrototypeData } from "../../../contexts/prototype.js";

export default function ModalClanCreate(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({size: "small", text: "Clan created successfully", color: "green", autoDelete: true, autoDeleteDelay: 2500});
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  return (
    <>
      <div className="modal">
        <button
          type="button"
          className="button button-secondary button-close"
          onClick={uiContext.closeModal}
        >
          <span className="icon icon-e-remove" />
        </button>
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Create my clan</h2>
            <p>
              As the creator of the Clan, you are its Captain. This comes with
              powers and responsibilities.
              <br />
              <b>Make this the clan you would have wanted to find. </b>
            </p>
            <div className="space-y-8 mt-8">
              <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch lg:items-center">
                <div className="relative">
                  <div className="avatar avatar-lg avatar-squircle z-0">
                    <div>
                      <span className="icon icon-multiple-11" />
                    </div>
                  </div>
                  <div className="form-group absolute z-10 bottom-0 right-0">
                    <label
                      htmlFor="file-button"
                      className="button button-sm button-tertiary rounded-full"
                    >
                      <span className="icon icon-camera" />
                    </label>
                    <input
                      type="file"
                      name="file-button"
                      id="file-button"
                      aria-describedby="file_input_help"
                    />
                  </div>
                </div>
                <div className="flex-1 form-group">
                  <label htmlFor="clan-name">Clan name</label>
                  <input type="text" name="clan-name" id="clan-name" />
                  <div className="text-sm text-ui-300 mt-1">
                    32 characters max.
                  </div>
                </div>
                <div className="lg:w-40 form-group">
                  <label htmlFor="clan-tag">Tag</label>
                  <div className="input-group">
                    <span>
                      &#91;
                    </span>
                    <input type="text" name="twitch" id="twitch" />
                    <span>
                      &#93;
                    </span>
                  </div>
                  <div className="text-sm text-ui-300 mt-1">
                    4 characters max.
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch lg:items-center">
                <div className="flex-1 form-group form-select">
                  <label htmlFor="clan-settings">Clan settings</label>
                  <select id="clan-settings">
                    <option selected>Anyone can join (recommended)</option>
                    <option>Invitations only</option>
                  </select>
                </div>
                <div className="flex-1 form-group form-select">
                  <label htmlFor="clan-lang">
                    Clan chat&#39;s main language
                  </label>
                  <select id="clan-lang">
                    <option>Arabic</option>
                    <option>Bengali</option>
                    <option>Chinese</option>
                    <option selected>English</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Hindi</option>
                    <option>Italian</option>
                    <option>Japanese</option>
                    <option>Korean</option>
                    <option>Lahnda</option>
                    <option>Malay</option>
                    <option>Marathi</option>
                    <option>Persian</option>
                    <option>Portuguese</option>
                    <option>Russian</option>
                    <option>Spanish</option>
                    <option>Tamil</option>
                    <option>Telugu</option>
                    <option>Turkish</option>
                    <option>Urdu</option>
                    <option>Vietnamese</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch lg:items-center">
                <div className="flex-1 form-group">
                  <label htmlFor="clan-desc">Clan description (optional)</label>
                  <textarea
                    id="clan-desc"
                    name="clan-desc"
                    rows="4"
                    placeholder=""
                  ></textarea>
                  <div className="text-sm text-ui-300 mt-1">
                    500 characters max.
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-baseline mb-4">
                  <label className="label">Clan favorite games</label>
                  <span className="text-attention-500 text-sm">
                    you must pick at least 1 game
                  </span>
                </div>
                <div className="form-group flex flex-wrap justify-center gap-1.5 xl:gap-4">
                  {prototype.games.map((game, gameIndex) => (
                    <label className="form-checkbox form-image" key={game.id}>
                      <input type="checkbox" name={`game-${gameIndex}`} />
                      <div
                        className="w-20 h-32 bg-cover rounded-md"
                        style={{ backgroundImage: `url(${game.assets.cover})` }}
                      />
                      <span className="sr-only">{game.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            {/* 
          {submitting && <span>...Submitting</span>}
          {!submitting && (
            <button type="button" onClick={closeModalWithDelay}>
              Ok
            </button>
          )}
          */}
            <button
              type="button"
              className={`button button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span>Create clan</span>
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={uiContext.closeModal}
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
