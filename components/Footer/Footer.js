import React, { useRef, useState } from "react";

export default function Footer(props) {
  const [isActive, setActive] = useState(false);
  const elementRef = useRef(null);

  var height = elementRef.current?.clientHeight;

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return (
    <footer
      className={`relative z-50 bg-ui-800 border-t border-ui-700 py-12 ${
        props.className ? props.className : ""
      }`}
    >
      <div>
        <div className="container mx-auto md:gap-12 px-4 2xl:px-0 md:flex justify-between">
          <div className="mb-12 lg:mb-0">
            <img
              width={148}
              height={40}
              src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
              alt="Stryda logo"
            />

            <p className="my-8 text-sm leading-relaxed">
              © Stryda Global Esports AB. <br />
              <span className="text-ui-300">
                All rights reserved. Made in Stockholm, Sweden
              </span>
            </p>

            <p className="mb-2 text-xs text-ui-300">
              Secure payment methods with
            </p>

            <img
              width={288}
              height={40}
              src="https://stryda.gg/payment-providers@2x.png"
              alt="Payment providers"
            />
          </div>

          <ul className="grid auto-cols-max gap-16 md:grid-flow-col">
            <li>
              <strong className="flex mb-4 items-center h5">
                <span className="block flex-shrink-0 mr-2 w-1 h-6 bg-main" />
                <span>Company</span>
              </strong>

              <ul className="text-sm">
                <li className="p-2">
                  <a
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://stryda.gg/company"
                  >
                    About
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://investor.gloot.com/"
                  >
                    Investor
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://career.gloot.com/"
                  >
                    Jobs
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <strong className="flex mb-4 items-center h5">
                <span className="block flex-shrink-0 mr-2 w-1 h-6 bg-main" />
                <span>Further information</span>
              </strong>

              <ul className="text-sm">
                <li className="p-2">
                  <a
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://stryda.gg/terms-conditions"
                  >
                    Terms of service
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://stryda.gg/privacy-policy"
                  >
                    Privacy policy
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://stryda.gg/developer-terms"
                  >
                    Developer terms
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://help.gloot.com/hc/en-us"
                  >
                    Support & FAQ
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://stryda.gg/how-it-works"
                  >
                    How it works
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong className="flex mb-4 items-center h5">
                <span className="block flex-shrink-0 mr-2 w-1 h-6 bg-main" />
                <span>Social</span>
              </strong>
              <ul className="text-sm">
                <li className="p-2">
                  <a
                    className="text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.gg/gloot"
                  >
                    <span className="icon icon-discord icon-24" />
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCkd1qPsv1j10r914QU1vOFw"
                  >
                    <span className="icon icon-logo-youtube icon-24" />
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/glootesports"
                  >
                    <span className="icon icon-logo-twitter icon-24" />
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/glootesports"
                  >
                    <span className="icon icon-logo-facebook icon-24" />
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/glootesports/"
                  >
                    <span className="icon icon-logo-instagram icon-24" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
