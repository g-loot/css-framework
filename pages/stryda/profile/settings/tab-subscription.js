import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import TextareaExpandable from "@/components/Textarea/TextareaExpandable";
import Link from "next/link";
import Tooltip from "@/components/Tooltip/Tooltip";
import ButtonFeedback from "@/components/Button/ButtonFeedback";

export default function TabSettingsSubscription() {
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
  const [inputValue, setInputValue] = useState(30);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {selectedUser && (
        <div className="max-w-md mx-auto">
          <h2 className="mb-8">Subscription &amp; payment</h2>
          <div className="mb-12">
            <h3 className="mb-4">Subscription</h3>
            <div className="mb-4 surface-ui-700 rounded p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>Your current Premium Plan</div>
                <div className="chip chip-xs chip-status chip-success animate-slide-in-bottom">
                  <span className="icon icon-check" />
                  <span>Active</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2 flex-2">
                  <h4>Quarterly</h4>
                  <div>
                    <span className="text-lg text-ui-100">250 kr</span>{" "}
                    <span className="text-sm text-ui-300">
                      / every third month
                    </span>
                  </div>
                  <ul className="text-sm space-y-1 pl-2 list-inside list-disc child:pl-2">
                    <li>Payment occurs quarterly</li>
                    <li>
                      Renews automatically{" "}
                      <b className="text-ui-100">November 06, 2023</b>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 flex-1">
                  <button
                    type="button"
                    className="w-full button button-secondary"
                  >
                    <span>Change plan</span>
                  </button>
                  <button
                    type="button"
                    className="w-full button button-sm button-ghost"
                  >
                    <span>cancel subscription</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm text-ui-300">
              Your credit/debit card will be billed the same amount every three
              months. Once you cancel your subscription, you will have access to
              Stryda Premium for 90 days after your last payment.
            </p>
          </div>
          <hr className="my-8" />
          <div className="mb-12">
            <h3 className="mb-4">Payment details</h3>
            <div className="surface-ui-700 rounded p-4 space-y-2">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2 flex-2 surface-ui-600 rounded p-2 flex flex-col gap-1 items-center justify-center aspect-landscape text-ui-300">
                  <span className="icon icon-card-favorite text-3xl" />
                  <span>Credit card</span>
                </div>
                <div className="space-y-2 flex-1">
                  <button
                    type="button"
                    className="w-full button button-secondary"
                  >
                    <span>Change method</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
