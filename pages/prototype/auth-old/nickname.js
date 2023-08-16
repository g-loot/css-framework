import React, { useEffect, useState } from "react";

import Link from "next/link";
import PrototypeAuth from "@/components/Prototype/PrototypeAuth";

export default function Login() {
  const [nicknameStr, setNicknameStr] = useState(0);

  function isNickname(str) {
    return /[A-Z][a-z]/.test(str);
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
      <PrototypeAuth title="Nickname">
        <div className="p-4 w-full max-w-xs text-center">
          <img
            className="mb-10 mx-auto"
            width="175"
            height="auto"
            src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
            alt="Stryda logo"
          />
          <h1 className="h3 mb-8">
            Choose a nickname
          </h1>
          <p className="mb-8">
            This is how other users will see you, for example, on leaderboards or stats pages.
          </p>
          <div className="form-group  mb-8" data-success={isLongEnough(nicknameStr, 2)}>
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              name="nickname"
              id="nickname"
              autoFocus
              onChange={(event) => setNicknameStr(event.target.value)}
            />
          </div>
          <Link href="/prototype/auth-old/age">
            <button
              type="button"
              className="button button-primary w-full mb-6"
              disabled={!isLongEnough(nicknameStr, 2)}
            >
              <span>Continue</span>
            </button>
          </Link>
        </div>
      </PrototypeAuth>
    </>
  );
}
