import React, { useContext, useState } from "react";

import { UiContext } from "../../../contexts/ui.js";

const ModalClanCreate = (props) => {
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  return (
    <>
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
                <figure className="avatar avatar-lg avatar-squircle z-0">
                  <div>
                    <span className="icon icon-multiple-11" />
                  </div>
                </figure>
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
                <input type="text" name="clan-tag" id="clan-tag" />
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
                <label htmlFor="clan-lang">Clan chat&#39;s main language</label>
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
                <label className="label">Clan games</label>
                <span className="text-attention-500 text-sm">you must pick at least 1 game</span>
              </div>
              <div className="form-group flex flex-wrap justify-center gap-8">
                <label className="form-checkbox form-image">
                  <input type="checkbox" name="game-1" />
                  <div
                    className="w-24 h-36 bg-cover rounded-md"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644677000/Marketing/202109_gloot2/Game_cover_Valorant.jpg)`,
                    }}
                  />
                </label>
                <label className="form-checkbox form-image">
                  <input type="checkbox" name="game-2" />
                  <div
                    className="w-24 h-36 bg-cover rounded-md"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Apex_Legends.jpg)`,
                    }}
                  />
                </label>
                <label className="form-checkbox form-image">
                  <input type="checkbox" name="game-3" />
                  <div
                    className="w-24 h-36 bg-cover rounded-md"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_PUBG_Battlegrounds.jpg)`,
                    }}
                  />
                </label>
                <label className="form-checkbox form-image">
                  <input type="checkbox" name="game-4" />
                  <div
                    className="w-24 h-36 bg-cover rounded-md"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_CSGO.jpg)`,
                    }}
                  />
                </label>
                <label className="form-checkbox form-image">
                  <input type="checkbox" name="game-5" />
                  <div
                    className="w-24 h-36 bg-cover rounded-md"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Rocket_League.jpg)`,
                    }}
                  />
                </label>
                <label className="form-checkbox form-image">
                  <input type="checkbox" name="game-6" />
                  <div
                    className="w-24 h-36 bg-cover rounded-md"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1645621586/Marketing/202109_gloot2/Game_cover_League_of_Legends.jpg)`,
                    }}
                  />
                </label>
                <label className="form-checkbox form-image">
                  <input type="checkbox" name="game-7" />
                  <div
                    className="w-24 h-36 bg-cover rounded-md"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Dota_2.jpg)`,
                    }}
                  />
                </label>
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
    </>
  );
};

export default ModalClanCreate;
