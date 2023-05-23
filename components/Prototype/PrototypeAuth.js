import PrototypeHead from "./PrototypeHead";
import React, { useContext } from "react";

export default function PrototypeAuth({ children, title }) {
  return (
    <>
      <PrototypeHead title={title} />
      <div className="min-h-[100dvh] flex items-stretch bg-main">
        <div className="w-full lg:w-2/3 bg-ui-900 relative z-20">
          <div className="absolute z-10 inset-0 overflow-y-auto overflow-x-hidden scrollbar scrollbar-secondary flex flex-col justify-start items-center mx-2 md:mx-auto">
            <div
              className="w-full flex-1 m-auto flex flex-col justify-center items-center py-8 animate-slide-in-left animate-delay"
              style={{
                "--delay": "calc(1 * 0.1s)",
              }}
            >
              {children}
            </div>
          </div>
        </div>
        <div className="hidden lg:block flex-1 relative z-10 after:content-[''] after:absolute after:inset-0 after:bg-ui-900 after:animate-scale-out-x-right">
          <div className="absolute z-10 inset-0 overflow-y-auto overflow-x-hidden scrollbar-hidden flex flex-col justify-start items-center mx-2 md:mx-auto">
            <div className="w-full flex-1 m-auto flex flex-col justify-center items-center py-8">
              <div
                className="max-w-xs mb-8 animate-slide-in-left animate-delay border-l border-ui-900 pl-4"
                style={{
                  "--delay": "calc(0 * 0.1s)",
                }}
              >
                <h1 className="text-left md:text-left text-ui-900 leading-[0.8] text-7xl md:text-8xl">
                  <span
                    className="block animate-slide-in-left animate-delay"
                    style={{
                      "--delay": "calc(1 * 0.1s)",
                    }}
                  >
                    Every
                  </span>
                  <span
                    className="block animate-slide-in-left animate-delay"
                    style={{
                      "--delay": "calc(2 * 0.1s)",
                    }}
                  >
                    round
                  </span>
                  <span
                    className="block animate-slide-in-left animate-delay"
                    style={{
                      "--delay": "calc(3 * 0.1s)",
                    }}
                  >
                    counts
                  </span>
                </h1>
                <ul className="text-ui-900 mt-2 -mb-1.5 space-y-1 child:block child:animate-slide-in-left">
                  <li
                    className="animate-delay"
                    style={{
                      "--delay": "calc(4 * 0.1s)",
                    }}
                  >
                    Innovative Competitions
                  </li>
                  <li
                    className="animate-delay"
                    style={{
                      "--delay": "calc(5 * 0.1s)",
                    }}
                  >
                    Track your progression
                  </li>
                  <li
                    className="animate-delay"
                    style={{
                      "--delay": "calc(6 * 0.1s)",
                    }}
                  >
                    Play and get rewarded
                  </li>
                  <li
                    className="animate-delay"
                    style={{
                      "--delay": "calc(7 * 0.1s)",
                    }}
                  >
                    Discover communities
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute z-0 bottom-0 top-1/3 right-0">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/f_auto/v1673204805/Stryda/illustrations/3D_logo_BG.png"
              alt=""
              className="w-full h-full object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
      {/*
    <div className="bg-main fixed inset-0 overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center mx-2 md:mx-auto">
        <div className="w-full flex-1 m-auto flex flex-col justify-center items-center py-8">
          {children}
        </div>
      </div>  
  */}
    </>
  );
}
