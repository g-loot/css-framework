import React, { useEffect, useState } from "react";

import Link from "next/link";
import PrototypeAuth from "../../../components/Prototype/PrototypeAuth";

export default function Login() {
  const [yearStr, setYearStr] = useState(0);
  const [monthStr, setMonthStr] = useState(0);
  const [dayStr, setDayStr] = useState(0);

  function isLongEnough(str, length) {
    if (str.length >= length && str.length) {
      return true;
    }
  }

  function isExactLength(str, length) {
    if (str.length === length && str.length) {
      return true;
    }
  }

  function isMaxLength(str, length, max) {
    if (str.length <= length && str <= max && str.length) {
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
      <PrototypeAuth title="Age">
        <div className="p-4 w-full max-w-xs text-center">
          <img
            className="mb-10 mx-auto"
            width="175"
            height="auto"
            src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-white.svg"
            alt="Stryda logo"
          />
          <h1 className="h3 mb-8">Verify your age</h1>
          <p className="mb-8">
            It is important you provide your real date of birth. You can&#39;t
            change this later.
          </p>
          <div className="flex gap-2 mb-8">
            <div
              className="form-group"
              data-success={isMaxLength(dayStr, 2, 31)}
            >
              <label htmlFor="year">Day</label>
              <input
                type="number"
                name="year"
                id="year"
                min={1}
                className="input-number"
                placeholder="DD"
                onChange={(event) => setDayStr(event.target.value)}
              />
            </div>
            <div
              className="form-group"
              data-success={isMaxLength(monthStr, 2, 12)}
            >
              <label htmlFor="year">Month</label>
              <input
                type="number"
                name="year"
                id="year"
                min={1}
                className="input-number"
                placeholder="MM"
                onChange={(event) => setMonthStr(event.target.value)}
              />
            </div>
            <div
              className="form-group"
              data-success={isExactLength(yearStr, 4)}
            >
              <label htmlFor="year">Year</label>
              <input
                type="number"
                name="year"
                id="year"
                min={1}
                autoFocus
                className="input-number"
                placeholder="YYYY"
                onChange={(event) => setYearStr(event.target.value)}
              />
            </div>
          </div>
          <Link href="/prototype/auth/location">
            <button
              type="button"
              className="button button-primary w-full mb-6"
              disabled={
                !isExactLength(yearStr, 4) &&
                !isMaxLength(monthStr, 2, 12) &&
                !isMaxLength(dayStr, 2, 31)
              }
            >
              <span>Continue</span>
            </button>
          </Link>
        </div>
      </PrototypeAuth>
    </>
  );
}
