import React, { useContext } from "react";

import ToastContainer from "@/components/Toast/ToastContainer";
import { UiContext } from "@/contexts/ui";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const uiContext = useContext(UiContext);
  function addToast(toast) {
    uiContext.openToastr(toast);
  }
  return (
    <>
      <h1 className="mb-2">Toasts</h1>

      {/* Example */}
      <div className="mb-12">
        <Anchor title="Example" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="surface rounded-lg p-4 text-center">
                <button
                  type="button"
                  className="button button-primary"
                  onClick={addToast.bind(this, {
                    title: "Success",
                    text: "Settings saved successfully.",
                    autoDelete: false,
                    autoDeleteDelay: 2500,
                  })}
                >
                  <span>Open toast</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div>
                <div className="toast" role="alert" aria-live="assertive">
                  <span className="icon icon-20 icon-c-info" />
                  <div>
                    <div className="toast-title">Success</div>
                    <div className="toast-text">
                      Your profile has been successfully updated.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button button-sm button-ghost button-close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded-lg"
                width="100%"
                height="270"
                src="//jsfiddle.net/augustin_hiebel/91zL0uka/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* With buttons */}
      <div className="mb-12">
        <Anchor title="With buttons" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div>
                <div className="toast" role="alert" aria-live="assertive">
                  <span className="icon icon-20 icon-c-info" />
                  <div>
                    <div className="toast-title">New invite</div>
                    <div className="toast-text">
                      CtrlChampion is inviting you to join his clan.
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        className="button button-secondary button-sm"
                      >
                        <span>Accept</span>
                      </button>
                      <button
                        type="button"
                        className="button button-ghost button-sm"
                      >
                        <span>Refuse</span>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button button-sm button-ghost button-close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded-lg"
                width="100%"
                height="270"
                src="//jsfiddle.net/augustin_hiebel/e1nj5ghb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Small */}
      <div className="mb-12">
        <Anchor title="Small" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div>
                <div
                  className="toast toast-sm"
                  role="alert"
                  aria-live="assertive"
                >
                  <span className="icon icon-c-info" />
                  <div>
                    <div className="toast-text">
                      Ladder URL copied to you clipboard.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button button-sm button-ghost button-close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded-lg"
                width="100%"
                height="270"
                src="//jsfiddle.net/augustin_hiebel/63xhuvek/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-12">
        <Anchor title="Message" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div>
                <div className="toast" role="alert" aria-live="assertive">
                  <div className="avatar avatar-circle avatar-sm">
                    <div>
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_10.jpg"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="toast-title">CtrlChampion</div>
                    <div className="toast-text">
                      Wanna have a quick game of Valorant?
                    </div>
                    <button
                      type="button"
                      className="button button-sm button-primary"
                    >
                      <span>Reply</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="button button-sm button-ghost button-close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded-lg"
                width="100%"
                height="270"
                src="//jsfiddle.net/augustin_hiebel/5uex1n24/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-12">
        <Anchor title="Colors" />

        <div className="surface rounded-lg p-4">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Green</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 flex justify-center">
                <div
                  className="toast toast-green"
                  role="alert"
                  aria-live="assertive"
                >
                  <span className="icon icon-20 icon-f-check" />
                  <div>
                    <div className="toast-title">Success</div>
                    <div className="toast-text">
                      Your token purchase has been confirmed.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button button-sm button-ghost button-close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3hdy0f2p/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Blue</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 flex justify-center">
                <div
                  className="toast toast-blue"
                  role="alert"
                  aria-live="assertive"
                >
                  <span className="icon icon-20 icon-c-info" />
                  <div>
                    <div className="toast-title">New tournaments</div>
                    <div className="toast-text">
                      3 new tournaments available.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button button-sm button-ghost button-close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/eoqus5cv/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Orange</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 flex justify-center">
                <div
                  className="toast toast-orange"
                  role="alert"
                  aria-live="assertive"
                >
                  <span className="icon icon-20 icon-warning-sign" />
                  <div>
                    <div className="toast-title">Warning</div>
                    <div className="toast-text">
                      Tournament enrolment invalid.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button button-sm button-ghost button-close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/Lxs438th/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Red</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 flex justify-center">
                <div
                  className="toast toast-red"
                  role="alert"
                  aria-live="assertive"
                >
                  <span className="icon icon-20 icon-skull-2" />
                  <div>
                    <div className="toast-title">Error</div>
                    <div className="toast-text">
                      We were unable to retrieve your Ladder result.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button button-sm button-ghost button-close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/buah47ok/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
