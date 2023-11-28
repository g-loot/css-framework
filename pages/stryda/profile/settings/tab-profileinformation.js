import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import TextareaExpandable from "@/components/Textarea/TextareaExpandable";
import Link from "next/link";

export default function TabSettingsProfileInformation() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(prototype.getUserByID(1));
  const [isValorantConnected, setIsValorantConnected] = useState(false);
  const [isAlreadyValorantConnected, setIsAlreadyValorantConnected] =
    useState(false);
  const [isLoLConnected, setIsLoLConnected] = useState(false);
  const [isLoLRegionSelected, setIsLoLRegionSelected] = useState(false);
  const [isAlreadyLoLConnected, setIsAlreadyLoLConnected] = useState(false);

  return (
    <>
      {selectedUser && (
        <div className="max-w-md mx-auto">
          <h2 className="mb-8">Profile information</h2>
          <p className="mb-12">
            Profile information Information you have put here is public on your
            profile. This is a social platform so adding more information about
            yourself will make it easier for people to connect with you. Read
            more in our{" "}
            <a href="#" className="link">
              Terms and Conditions
            </a>{" "}
            to find out more about how Stryda handles your information.
          </p>
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
              <label htmlFor="account-email">Email</label>
              <input
                type="email"
                name="account-email"
                id="account-email"
                value={selectedUser.email}
              />
            </div>
          </div>
          <div className="grid xl:grid-cols-2 gap-x-16 gap-y-4 mb-8">
            <div className="form-group">
              <label htmlFor="social-discord">Discord</label>
              <div className="input-group">
                <span className="icon icon-discord" />
                <button className="button button-ghost">
                  <span>Connect account</span>
                </button>
                <input type="text" name="social-discord" id="social-discord" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="social-tiktok">Tik-Tok</label>
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
        </div>
      )}
    </>
  );
}
