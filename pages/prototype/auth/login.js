import React, { useEffect, useState } from "react";

import Link from "next/link";
import PrototypeAuth from "../../../components/Prototype/PrototypeAuth";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const { tab } = router.query;
  const defaultTab = "overview";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      <PrototypeAuth title="Login">
        <div className="p-4 w-full max-w-xs">
          <img
            className="mb-8"
            width="175"
            height="auto"
            src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-white.svg"
            alt="Stryda logo"
          />

          <h2 className="mb-6">Welcome back!</h2>
          <div className="form-group mb-3">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group mb-8">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <button className="button button-sm button-ghost">
                <span>Show</span>
              </button>
              <input type="password" name="password" id="password" />
            </div>
          </div>
          <button type="button" className="button button-primary w-full mb-6">
            <span>Sign in</span>
          </button>
          <p className="text-sm mb-8">
            By clicking SIGN IN, you certify that you are at least 16 years old,
            and you have read and agree to the{" "}
            <a href="#" className="link">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="link">
              Privacy Policy
            </a>
          </p>
          <p className="text-sm mb-4">
            <a href="#" className="link link-main">
              Forgotten your password?
            </a>
          </p>
          <p className="text-sm mb-8">
            <a href="#" className="link link-main">
              Don&#39;t have an account? Create one
            </a>
          </p>
          <p className="text-ui-300 text-xs">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="link">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="link">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </PrototypeAuth>
    </>
  );
}
