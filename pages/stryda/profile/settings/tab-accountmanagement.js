import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import TextareaExpandable from "@/components/Textarea/TextareaExpandable";
import Link from "next/link";
import Tooltip from "@/components/Tooltip/Tooltip";
import ButtonFeedback from "@/components/Button/ButtonFeedback";

export default function TabSettingsAccountManagement() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(prototype.getUserByID(1));

  return (
    <>
      {selectedUser && (
        <div className="max-w-md mx-auto">
          <h2 className="mb-8">Account management</h2>
          <div className="space-y-8">
            <div className="form-group">
              <label htmlFor="account-id">Stryda ID</label>
              <div className="input-group">
                <input
                  type="text"
                  name="account-id"
                  id="account-id"
                  value="2564568562"
                  readOnly
                  disabled
                />
                <Tooltip
                  placement="top"
                  tooltip={
                    <span className="text-sm">Click to copy Stryda ID</span>
                  }
                >
                  <ButtonFeedback
                    value="2564568562"
                    variant="button-ghost rounded-full"
                    icon="icon-document-copy"
                    message="Stryda ID copied to your clipboard"
                  />
                </Tooltip>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="account-email">Email</label>
              <input
                type="email"
                name="account-email"
                id="account-email"
                value={selectedUser.email}
                readOnly
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="account-password">Password</label>
              <div className="input-group">
                <button className="button button-ghost">
                  <span>Change password</span>
                </button>
                <input
                  type="password"
                  name="account-password"
                  id="account-password"
                  value={selectedUser.email}
                  readOnly
                  disabled
                />{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
