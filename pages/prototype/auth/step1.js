import React, { useEffect, useState } from "react";

import Link from "next/link";
import PrototypeAuth from "../../../components/Prototype/PrototypeAuth";

export default function AuthLogin() {
  const [emailStr, setEmailStr] = useState(0);
  const [passwordStr, setPasswordStr] = useState(0);
  const [passwordShown, setPasswordShown] = useState(false);

  function isEmail(str) {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(str).toLowerCase());
  }

  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  function containsLowercase(str) {
    return /[a-z]/.test(str);
  }
  function containsDigit(str) {
    if (str.length) {
      return /[0-9]/.test(str);
    }
  }
  function isLongEnough(str, length) {
    if (str.length >= length) {
      return true;
    }
  }

  function checkAll(str) {
    if (
      containsUppercase(str) &&
      containsLowercase(str) &&
      containsDigit(str) &&
      isLongEnough(str, 8) &&
      isEmail(emailStr)
    ) {
      return true;
    } else {
      return false;
    }
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <PrototypeAuth title="Login">
        <div className="p-4 w-full max-w-xs text-center">
          <img
            className="mb-10 mx-auto"
            width="175"
            height="auto"
            src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
            alt="Stryda logo"
          />
          {/*
          <h2 className="mb-6">Welcome</h2>
          <p className="mb-6">
            You are only a few clicks from a whole new esports experience!
          </p>
  */}
          <div className="form-group mb-3" data-success={isEmail(emailStr)}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              autoFocus
              autoComplete="off"
              tabIndex={1}
              placeholder="Email..."
              onChange={(event) => setEmailStr(event.target.value)}
            />
          </div>
          <div className="form-group mb-8" data-success={checkAll(passwordStr)}>
            <label htmlFor="password">Create password</label>
            <div className="input-group">
              <button
                onClick={togglePassword}
                tabIndex={2}
                className="button button-sm button-ghost"
              >
                {!passwordShown ? <span>Show</span> : <span>Hide</span>}
              </button>
              <input
                type={passwordShown ? "text" : "password"}
                tabIndex={1}
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Password..."
                onChange={(event) => setPasswordStr(event.target.value)}
              />
            </div>
          </div>
          <ul className="mb-8 flex items-start justify-between text-sm">
            <li className="flex flex-col items-center gap-1">
              <span
                className={`transition-all duration-500 ease-in-out ${
                  containsLowercase(passwordStr)
                    ? "text-success-500"
                    : "text-ui-400"
                }`}
              >
                lowercase
              </span>
              <span
                className={`transition-all duration-500 ease-in-out rounded-full h-1 ${
                  containsLowercase(passwordStr)
                    ? "w-7 bg-success-500"
                    : "w-1 bg-ui-400"
                }`}
              />
            </li>
            <li className="flex flex-col items-center gap-1">
              <span
                className={`transition-all duration-500 ease-in-out ${
                  containsUppercase(passwordStr)
                    ? "text-success-500"
                    : "text-ui-400"
                }`}
              >
                uppercase
              </span>
              <span
                className={`transition-all duration-500 ease-in-out rounded-full h-1 ${
                  containsUppercase(passwordStr)
                    ? "w-7 bg-success-500"
                    : "w-1 bg-ui-400"
                }`}
              />
            </li>
            <li className="flex flex-col items-center gap-1">
              <span
                className={`transition-all duration-500 ease-in-out ${
                  containsDigit(passwordStr)
                    ? "text-success-500"
                    : "text-ui-400"
                }`}
              >
                digit
              </span>
              <span
                className={`transition-all duration-500 ease-in-out rounded-full h-1 ${
                  containsDigit(passwordStr)
                    ? "w-7 bg-success-500"
                    : "w-1 bg-ui-400"
                }`}
              />
            </li>
            <li className="flex flex-col items-center gap-1">
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isLongEnough(passwordStr, 8)
                    ? "text-success-500"
                    : "text-ui-400"
                }`}
              >
                8 characters
              </span>
              <span
                className={`transition-all duration-500 ease-in-out rounded-full h-1 ${
                  isLongEnough(passwordStr, 8)
                    ? "w-7 bg-success-500"
                    : "w-1 bg-ui-400"
                }`}
              />
            </li>
          </ul>
          <Link href="/prototype/auth/step2">
            <button
              type="button"
              className="button button-primary w-full mb-6"
              disabled={!checkAll(passwordStr)}
            >
              <span>Create free account</span>
            </button>
          </Link>
          <p className="text-sm mb-6">
            By clicking CREATE FREE ACCOUNT, you certify that you are at least
            16 years old, and you have read and agree to the{" "}
            <a href="#" className="link">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="link">
              Privacy Policy
            </a>
          </p>
          <p className="text-sm mb-6">
            <Link href="/prototype/auth/login">
              <a className="link link-main">Already have an account? Log in</a>
            </Link>
          </p>
        </div>
      </PrototypeAuth>
    </>
  );
}
