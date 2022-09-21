import { useContext, useState } from "react";

import Accordion from "../../../components/Accordion/Accordion";
import Ad from "../../../components/Ad/Ad";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { UiContext } from "../../../contexts/ui";
import useFetch from "../../../hooks/use-fetch";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);
  const { query } = useRouter();
  const isConnected = query.connected === "true" ? true : false;

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({size: "small", text: "Settings updated successfully", color: "green", autoDelete: true, autoDeleteDelay: 2500});
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <PrototypeStructure title="Profile settings">
        <Ad width="1005" height="124" />

        <section>
          <h1 className="px-2 sm:px-0 py-2 text-2xl">Profile settings</h1>
          <div className="accordion surface sm:rounded-lg">
            <Accordion
              isopen={true}
              header={
                <>
                  <div className="item">
                    <div className="item-body">
                      <div className="py-1 px-2 item-title font-headings font-bold text-xl italic">
                        General
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <span className="icon icon-24 icon-arrow-sm-down" />
                      </div>
                    </div>
                  </div>
                </>
              }
            >
              <div className="p-8">
                <div className="max-w-lg mx-auto">
                  <div className="grid xl:grid-cols-2 gap-16">
                    <div className="flex flex-col gap-4 items-center">
                      <div className="flex justify-center items-center gap-4">
                        <div className="relative">
                          <div className="avatar avatar-lg avatar-circle z-0">
                            <div>
                              <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
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
                        <div className="">
                          <div className="flex flex-col sm:flex-row gap-3 mb-3">
                            <h2 className="text-2xl leading-none">
                              JackAttack123
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex bg-gradient-to-b from-ui-900/50 to-ui-900/10 rounded py-2 px-4 items-center justify-between gap-2">
                        <label className="label">Country:</label>
                        <div className="flex justify-center items-center gap-2">
                          <div className="w-6 flex justify-center">
                            <img
                              src="https://flagcdn.com/tt.svg"
                              className="aspect-video rounded-sm max-w-[1.5rem]"
                            />
                          </div>
                          <span className="text-ui-300">
                            Trinidad and Tobago
                          </span>
                          <button
                            className="tooltip tooltip-bottom text-ui-300 text-0"
                            data-tooltip="Contact support to change your country."
                          >
                            <span className="icon icon-16 icon-c-info" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-4">
                        <h2 className="h4">My social links</h2>
                        <div className="form-group flex items-start gap-2">
                          <label htmlFor="social-twitch" className="flex-1 mt-3">
                            Twitch:
                          </label>
                          <div className="flex-3 input-group">
                            <span className="icon icon-twitch" />
                            <input
                              type="text"
                              name="social-twitch"
                              id="social-twitch"
                            />
                          </div>
                        </div>
                        <div className="form-group flex items-start gap-2">
                          <label htmlFor="social-twitter" className="flex-1 mt-3">
                            Twitter:
                          </label>
                          <div className="flex-3 input-group">
                            <span className="icon icon-logo-twitter" />
                            <input
                              type="text"
                              name="social-twitter"
                              id="social-twitter"
                            />
                          </div>
                        </div>
                        <div className="form-group flex items-start gap-2">
                          <label htmlFor="social-discord" className="flex-1 mt-3">
                            Discord:
                          </label>
                          <div className="flex-3">
                            <button className="button button-primary w-full">
                              <span className="icon icon-discord" />
                              <span>Connect with Discord</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-8 mb-4" />
                      <div className="space-y-4">
                        <h2 className="h4">Game accounts</h2>
                        <div className="form-group flex items-start gap-2">
                          <label htmlFor="social-steam" className="flex-1 mt-3">
                            Steam:
                          </label>
                          <div className="flex-3">
                            <button className="button button-primary w-full">
                              <span className="icon icon-steam" />
                              <span>Connect with Steam</span>
                            </button>
                            <p className="text-ui-300 text-sm mt-2 leading-tight">
                              This site is not associated with Valve Corp.
                            </p>
                          </div>
                        </div>
                        <div className="form-group flex items-start gap-2">
                          <label htmlFor="social-steam" className="flex-1 mt-3">
                            Riot Games:
                          </label>
                          <div className="flex-3">
                            {isConnected && (
                              <div className="flex-3 input-group">
                                <span>
                                  <span className="icon icon-riotgames-symbol" />
                                </span>
                                <input type="text" name="gameaccount-riot" id="gameaccount-riot" disabled value="jackattack#3827" />
                              </div>
                            )}
                            {!isConnected && (
                              <button className="button button-primary w-full">
                                <span className="icon icon-riotgames-symbol" />
                                <span>Connect with Riot ID</span>
                              </button>
                            )}
                            
                            <p className="text-ui-300 text-sm mt-2 leading-tight">
                              By connecting with Riot I acknowledge making my profile public to all users.
                            </p>
                          </div>
                        </div>
                        <div className="form-group flex items-start gap-2">
                          <div className="flex-1 mt-3" />
                          <div className="flex-3">
                            <p className="text-ui-300 text-sm mt-2 leading-tight">
                              Contact support if you need to update your game accounts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-8 opacity-50" />
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
                    <button type="button" className="button button-secondary">
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion
              header={
                <>
                  <div className="item">
                    <div className="item-body">
                      <div className="py-1 px-2 item-title font-headings font-bold text-xl italic">
                        G-Loot &amp; game accounts
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <span className="icon icon-24 icon-arrow-sm-down" />
                      </div>
                    </div>
                  </div>
                </>
              }
            >
              <div className="p-8">
                <div className="max-w-lg mx-auto">
                  <div className="grid xl:grid-cols-2 gap-16">
                    <div className="space-y-4">
                      <h2 className="h4">G-Loot</h2>
                      <div className="form-group">
                        <label htmlFor="account-username">Username:</label>
                        <input
                          type="text"
                          name="account-username"
                          id="account-username"
                          value="JackAttack123"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="account-email">Email:</label>
                        <input
                          type="email"
                          name="account-email"
                          id="account-email"
                          value="jackjack@gmail.com"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-ui-300">
                          <span className="label">G-LOOT ID:</span>
                          <code className="font-bold font-body">
                            4769554309840896
                          </code>
                        </div>
                        <button
                          type="button"
                          className="button button-sm button-secondary"
                        >
                          <span>Change password</span>
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <h2 className="h4">Game ID&#39;s</h2>
                        <button
                          className="tooltip tooltip-bottom text-ui-300 text-0"
                          data-tooltip="Your in-game nickname is necessary if you want to join G-Loot tournaments"
                        >
                          <span className="icon icon-16 icon-c-info" />
                        </button>
                      </div>
                      <div className="form-group">
                        <label htmlFor="game-apex">
                          Apex Legends Nickname:
                        </label>
                        <input type="text" name="game-apex" id="game-apex" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="game-pubg">
                          PUBG BATTLEGROUNDS Nickname:
                        </label>
                        <input type="text" name="game-pubg" id="game-pubg" />
                      </div>
                    </div>
                  </div>
                  <hr className="my-8 opacity-50" />
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
                    <button type="button" className="button button-secondary">
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              </div>
            </Accordion>

            { /* 
            <Accordion
              header={
                <>
                  <div className="item">
                    <div className="item-body">
                      <div className="py-1 px-2 item-title font-headings font-bold text-xl italic">
                        Data Privacy
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <span className="icon icon-24 icon-arrow-sm-down" />
                      </div>
                    </div>
                  </div>
                </>
              }
            >
              <div className="p-8">
                <div className="max-w-lg mx-auto">
                  <div className="grid xl:grid-cols-2 gap-16">
                    <div className="space-y-4">
                      <p className="leading-relaxed">
                        To make G-Loot better we collect information from you as
                        visitor with help from cookies. We also conduct relevant
                        marketing of G-Loot&lsquo;s services within Meta,
                        Google, Adroll, Snapchat and Bing&lsquo;s network. Read
                        more in our{" "}
                        <a href="#" className="link" target="_blank">
                          Privacy Policy
                        </a>
                        . <br />
                        Here you can consent to share your data with the
                        following partners:
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="form-group">
                        <label className="form-toggle">
                          <input type="checkbox" name="data-meta" />
                          <i className="form-icon" /> Meta
                        </label>
                        <label className="form-toggle">
                          <input type="checkbox" name="data-google" />
                          <i className="form-icon" /> Google
                        </label>
                        <label className="form-toggle">
                          <input type="checkbox" name="data-adroll" />
                          <i className="form-icon" /> Adroll
                        </label>
                        <label className="form-toggle">
                          <input type="checkbox" name="data-bing" />
                          <i className="form-icon" /> Bing
                        </label>
                        <label className="form-toggle">
                          <input type="checkbox" name="data-quantcast" />
                          <i className="form-icon" /> Quantcast
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
            */}
          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
