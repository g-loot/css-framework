import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Alert</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="alert">
                  <div>
                    <span className="icon icon-24 icon-c-info" />
                    <span>3 new tournaments available.</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/gm3p84ho/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With close */}
      <div className="mb-12" id="with-close">
        <h2 className="h3 mb-3">With close</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="alert">
                  <div>
                    <span className="icon icon-24 icon-c-info" />
                    <span>3 new tournaments available.</span>
                  </div>
                  <div className="flex-none">
                    <button
                      type="button"
                      className="button button-tertiary button-close"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/xz76pau0/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With buttons */}
      <div className="mb-12" id="with-buttons">
        <h2 className="h3 mb-3">With buttons</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="alert">
                  <div>
                    <span className="icon icon-24 icon-c-info" />
                    <span>3 new tournaments available.</span>
                  </div>
                  <div className="flex-none">
                    <button
                      type="button"
                      className="button button-sm button-error"
                    >
                      <span>Deny</span>
                    </button>
                    <button
                      type="button"
                      className="button button-sm button-success"
                    >
                      <span>Accept</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/2n3dxuz1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small */}
      <div className="mb-12" id="small">
        <h2 className="h3 mb-3">Small</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="alert alert-sm">
                  <div>
                    <span className="icon icon-24 icon-c-info" />
                    <span>3 new tournaments available.</span>
                  </div>
                  <div className="flex-none">
                    <button
                      type="button"
                      className="button button-sm button-error"
                    >
                      <span>Deny</span>
                    </button>
                    <button
                      type="button"
                      className="button button-sm button-success"
                    >
                      <span>Accept</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/Lyonwxdb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-12" id="colors">
        <h2 className="h3 mb-3">Colors</h2>

        <div className="surface rounded-lg p-4">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Green</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 flex justify-center">
                <div className="alert alert-success">
                  <div>
                    <span className="icon icon-24 icon-f-check" />
                    <span>Your token purchase has been confirmed.</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/0y9fbe3d/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Blue</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 flex justify-center">
                <div className="alert alert-info">
                  <div>
                    <span className="icon icon-24 icon-c-info" />
                    <span>3 new tournaments available.</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/cfgd0u7j/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Orange</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 flex justify-center">
                <div className="alert alert-attention">
                  <div>
                    <span className="icon icon-24 icon-warning-sign" />
                    <span>Warning. Tournament enrolment invalid.</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/6fcoxy8w/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Red</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 flex justify-center">
                <div className="alert alert-error">
                  <div>
                    <span className="icon icon-24 icon-skull-2" />
                    <span>
                      Error! We were unable to retrieve your Brawl result.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/bocn37zt/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With SVG */}
      <div className="mb-12" id="with-svg">
        <h2 className="h3 mb-2">With SVG</h2>
        <p className="text-ui-300 mb-4">Remove any <code>fill</code> to have the SVG colored automatically depending on the alert color.</p>
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="alert">
                  <div>
                    <svg
                      width="120"
                      height="38"
                      viewBox="0 0 158 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M144.346 43.1142L153.128 44.5889L153.668 50.086H140.633L140.864 48.0057L150.199 47.6304V46.6298L141.239 45.0958L141.779 39.5988H152.635L152.845 41.7844L144.517 42.1004L144.346 43.1142ZM68.9275 45.7476L69.0592 43.6738H75.0039L75.366 50.086H61.7385L62.805 39.5066H74.7143L74.8591 41.6923L65.6424 41.9029L65.3462 47.7094L72.048 47.8937V45.8134L68.9275 45.7476V45.7476ZM126.466 45.8332V47.6699L134.998 47.8806V49.9543H122.865L123.22 39.3749H134.741V41.5211L126.196 41.7054V43.5356H132.674V45.6159L126.466 45.8332V45.8332ZM91.3569 50.0465H95.0172L92.1206 39.4671H83.582L80.7051 50.0465H84.3654L84.925 47.3802H90.8632L91.3569 50.0465ZM85.32 45.3592L86.0508 41.9029L89.5728 41.7383L90.3233 45.2275L85.32 45.3592V45.3592ZM117.203 50.0465L116.123 39.4671H113.062L108.651 44.5099L104.254 39.4671H101.166L100.067 50.0465H103.734L104.089 43.1998L108.665 47.8608L113.247 43.1998L113.602 50.0465H117.203V50.0465ZM89.9942 33.4565H80.4944L77.973 21.9093L71.8768 25.2273L71.6662 33.4697H63.1934L65.8136 7.63008L60.3955 7.81442L61.1855 0.717585H85.3661L88.7236 16.0831L83.7993 18.7493L89.9876 33.4499L89.9942 33.4565ZM79.3489 7.189L72.3969 7.41942L72.1204 17.4919L80.1389 13.7526L79.3489 7.189ZM101.772 0.704419H94.5696L93.9047 33.4433H102.634L101.772 0.704419ZM157.25 0.704419L158 7.86708L149.172 7.57742L151.752 33.4433H143.023L142.292 7.32725L135.195 7.09683L135.011 0.691247L157.25 0.704419V0.704419ZM108.665 0.73733H131.16L132.766 33.4565H107.769L108.665 0.73733V0.73733ZM116.222 26.6164L124.188 26.3728V7.63008L115.86 7.3865L116.222 26.6164V26.6164ZM0 14.5821L30.9483 0L49.0524 4.37133L45.8266 36.3795H36.6626L34.9641 13.0613L33.9766 13.3708L32.2847 36.3795H25.3327L22.0213 17.0377L21.0338 17.3339L21.2839 36.3795H14.7269L10.9744 20.4478L9.98692 20.7638L11.1061 36.3993H4.80583L0 14.5821ZM23.3708 39.5329L25.6355 45.3921L44.3783 50.0268L45.3592 40.6784L23.3708 39.5329V39.5329Z" />
                    </svg>
                    <div>
                      <div className="uppercase">Important:</div>
                      <p className="max-w-[80ch]">
                        You need to
                        connect your Steam account to Stryda.
                      </p>
                    </div>
                  </div>
                  <div className="flex-none">
                    <button
                      type="button"
                      className="button button-sm button-secondary"
                    >
                      <span>Connect my account</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/nfgtpvum/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With image */}
      <div className="mb-12" id="with-image">
        <h2 className="h3 mb-2">With image</h2>
        <p className="text-ui-300 mb-4">Note that unlike the SVG, the color of the image won&#39;t change depending on the alert color.</p>
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="alert">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1660723695/Marketing/2022_prototype/Logo/logo-steam.svg" alt="Riot Games" width="120" height="auto"  />
                    <div>
                    <div className="uppercase">Important:</div>
                      <p className="max-w-[80ch]">
                        You need to
                        connect your Steam account to Stryda.
                      </p>
                    </div>
                  </div>
                  <div className="flex-none">
                    <button
                      type="button"
                      className="button button-sm button-secondary"
                    >
                      <span>Connect my account</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/u1vd72kw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
