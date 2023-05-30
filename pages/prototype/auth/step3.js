import React, { useEffect, useState, useContext } from "react";

import Link from "next/link";
import PrototypeAuth from "../../../components/Prototype/PrototypeAuth";
import { UiContext } from "../../../contexts/ui";

export default function AuthStep3() {
  const uiContext = useContext(UiContext);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const delay = 4000;
    setTimeout(() => {
      setShowHelp(true);
    }, delay);
  }, []);

  return (
    <>
      <PrototypeAuth title="Nickname">
        <div className="p-4 w-full max-w-xs text-center">
          <h1 className="h4 mb-8">Verify your email</h1>
          <ul className="step step-secondary mb-8">
            <li>
              <div>
                <i>1</i>
                <span></span>
              </div>
            </li>
            <li>
              <div>
                <i>2</i>
                <span></span>
              </div>
            </li>
            <li className="is-active">
              <div>
                <i>3</i>
                <span></span>
              </div>
            </li>
          </ul>
          <p className="mb-2">
            A verification link was just sent to:{" "}
            <span className="text-ui-100 text-bold">joppe@gmail.com</span>
          </p>
          <p
            className={`text-sm text-ui-300 mb-8 transition-opacity duration-1000 ${
              showHelp ? "" : "opacity-0 pointer-events-none select-none"
            }`}
          >
            Haven&#39;t received the email?{" "}
            <button
              type="button"
              className="link link-main"
              onClick={() => uiContext.openToastr({
                text: "Confirmation email sent",
                color: "green",
                autoDelete: true,
                autoDeleteDelay: 2500,
              })}
            >
              Resend now
            </button>
          </p>
          <p className="mb-2">
            Click the link in the email to complete the registration process.
          </p>
          <p
            className={`text-sm text-ui-300 mb-4 transition-opacity duration-1000 ${
              showHelp ? "" : "opacity-0 pointer-events-none select-none"
            }`}
          >
            Wrong email address?{" "}
            <Link href="/prototype/auth/changeemail">
              <a href="#" className="link link-main">
                Change email address
              </a>
            </Link>
          </p>
        </div>
      </PrototypeAuth>
    </>
  );
}
