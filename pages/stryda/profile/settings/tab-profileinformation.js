import React, { useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Tooltip from "@/components/Tooltip/Tooltip";

export default function TabSettingsProfileInformation() {
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(prototype.getUserByID(1));
  const [isDiscordConnected, setIsDiscordConnected] = useState(false);

  return (
    <>
      {selectedUser && (
        <div className="max-w-md mx-auto">
          <h2 className="mb-8">Profile information</h2>
          <div className="grid xl:grid-cols-2 gap-x-16 gap-y-8 mb-12">
            <div className="form-group">
              <label htmlFor="account-username">Username</label>
              <input
                type="text"
                name="account-username"
                id="account-username"
                value={selectedUser.nickname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="account-country">Country</label>
              <div className="input-group">
                <input
                  type="text"
                  name="account-country"
                  id="account-country"
                  readOnly
                  disabled
                  value="Trinidad and Tobago"
                />
                <span>
                  <Tooltip
                    tooltip={<>Contact support to change your country.</>}
                  >
                    <button className="button button-sm button-ghost rounded-full">
                      <span className="icon icon-c-info" />
                    </button>
                  </Tooltip>
                </span>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 gap-x-16 gap-y-4 mb-8">
            <div className="form-group">
              <label htmlFor="social-discord">Discord</label>
              {isDiscordConnected ? (
                <div className="input-group">
                  <span className="icon icon-discord" />
                  <button
                    type="button"
                    className="button button-ghost"
                    onClick={() => setIsDiscordConnected(!isDiscordConnected)}
                  >
                    <span class="icon icon-e-remove" />
                  </button>
                  <input
                    type="text"
                    name="social-discord"
                    id="social-discord"
                    readOnly
                    disabled
                    value={selectedUser.nickname}
                  />
                </div>
              ) : (
                <div className="input-group">
                  <span className="icon icon-discord" />
                  <button
                    type="button"
                    className="button button-ghost"
                    onClick={() => setIsDiscordConnected(!isDiscordConnected)}
                  >
                    <span>Connect account</span>
                  </button>
                  <input
                    type="text"
                    name="social-discord"
                    id="social-discord"
                    readOnly
                  />
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="social-tiktok">TikTok</label>
              <div className="input-group">
                <span className="icon icon-tiktok" />
                <input type="text" name="social-tiktok" id="social-tiktok" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="social-twitch">Twitch</label>
              <div className="input-group">
                <span className="icon icon-twitch" />
                <input type="text" name="social-twitch" id="social-twitch" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="social-twitter">X (Twitter)</label>
              <div className="input-group">
                <span className="icon icon-logo-twitter" />
                <input type="text" name="social-twitter" id="social-twitter" />
              </div>
            </div>
          </div>
          <p className="mb-12 text-sm">
            Profile information Information you have put here is public on your
            profile. This is a social platform so adding more information about
            yourself will make it easier for people to connect with you. Read
            more in our{" "}
            <a href="#" className="link">
              Terms and Conditions
            </a>{" "}
            to find out more about how Stryda handles your information.
          </p>
        </div>
      )}
    </>
  );
}
