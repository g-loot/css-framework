import React, { useEffect, useState } from "react";

import Link from "next/link";
import PrototypeAuth from "../../../components/Prototype/PrototypeAuth";

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
      <PrototypeAuth title="Email verification">
        <div className="p-4 w-full max-w-xs text-center">
          <img
            className="mb-10 mx-auto"
            width="175"
            height="auto"
            src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
            alt="Stryda logo"
          />
          <h1 className="h3 mb-8">Verify your email</h1>
          <p className="mb-8">
            A verification link was just sent to: <span className="text-ui-100 text-bold">joppe@gmail.com</span>
          </p>
          <p className="mb-8">
            Click the link in the email to complete the registration process.
          </p>
          <p className="text-sm text-ui-300 mb-4">
            Haven&#39;t received the email?{" "}
            <a href="#" className="link link-main">
              Resend now
            </a>
          </p>
          <p className="text-sm text-ui-300">
            Wrong email address?{" "}
            <Link href="/prototype/auth-old/changeemail">
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
