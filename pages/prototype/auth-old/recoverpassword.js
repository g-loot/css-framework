import React, { useEffect, useState } from "react";

import Link from "next/link";
import PrototypeAuth from "@/components/Prototype/PrototypeAuth";

export default function Login() {
  const [emailStr, setEmailStr] = useState(0);

  function isEmail(str) {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(str).toLowerCase());
  }

  return (
    <>
      <PrototypeAuth title="Recover password">
        <div className="p-4 w-full max-w-xs">
          <img
            className="mb-10 mx-auto"
            width="175"
            height="auto"
            src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
            alt="Stryda logo"
          />
          <div className="form-group mb-8" data-success={isEmail(emailStr)}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              autoFocus
              onChange={(event) => setEmailStr(event.target.value)}
            />
          </div>
          <Link href="/prototype/home">
            <button
              type="button"
              className="button button-primary w-full mb-6"
              disabled={!isEmail(emailStr)}
            >
              <span>Send recovery email</span>
            </button>
          </Link>
          <p className="text-sm text-center mb-4">
            <Link href="/prototype/auth-old/login">
              <a href="#" className="link link-main">
                Go back
              </a>
            </Link>
          </p>
        </div>
      </PrototypeAuth>
    </>
  );
}
