import React, { useContext } from "react";

import Modal1 from "./modals/modal-example-1";
import { UiContext } from "@/contexts/ui";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const uiContext = useContext(UiContext);
  function openModal1() {
    uiContext.openModal(<Modal1></Modal1>);
  }
  return (
    <>
      <h1 className="mb-2">Modal</h1>

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
                  onClick={openModal1}
                >
                  <span>Open modal</span>
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
            <div className="flex-3">
              <div className="modal">
                <button className="button button-secondary button-close">
                  <span className="icon icon-e-remove" />
                </button>
                <div className="modal-image">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`,
                    }}
                  />
                </div>
                <div className="modal-content">
                  <div className="modal-body">
                    <h2 className="modal-title">Leave party?</h2>
                    <p>
                      We are looking to find you the best match. Leaving the
                      party means you lose your spot in the queue for the
                      tournament.
                    </p>
                  </div>
                  <div className="modal-action">
                    <button type="button" className="button button-primary">
                      <span>Stay in party</span>
                    </button>
                    <button type="button" className="button button-secondary">
                      <span>Leave party</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-2">
              <iframe
                className="rounded-lg"
                width="100%"
                height="345"
                src="//jsfiddle.net/augustin_hiebel/tqkcsob4/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Inverted */}
      <div className="mb-12">
        <Anchor title="Inverted" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="modal modal-inverted">
                <button
                  type="button"
                  className="button button-secondary button-close"
                >
                  <span className="icon icon-e-remove" />
                </button>
                <div className="modal-image">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`,
                    }}
                  />
                </div>
                <div className="modal-content">
                  <div className="modal-body">
                    <h2 className="modal-title">Leave party?</h2>
                    <p>
                      We are looking to find you the best match. Leaving the
                      party means you lose your spot in the queue for the
                      tournament.
                    </p>
                  </div>
                  <div className="modal-action">
                    <button type="button" className="button button-primary">
                      <span>Stay in party</span>
                    </button>
                    <button type="button" className="button button-secondary">
                      <span>Leave party</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-2">
              <iframe
                className="rounded-lg"
                width="100%"
                height="345"
                src="//jsfiddle.net/augustin_hiebel/wz2hme07/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Stacked */}
      <div className="mb-12">
        <Anchor title="Stacked" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="modal modal-stacked">
                <button
                  type="button"
                  className="button button-secondary button-close"
                >
                  <span className="icon icon-e-remove" />
                </button>
                <div className="modal-image">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`,
                    }}
                  />
                </div>
                <div className="modal-content">
                  <div className="modal-body">
                    <h2 className="modal-title">Leave party?</h2>
                    <p>
                      We are looking to find you the best match. Leaving the
                      party means you lose your spot in the queue for the
                      tournament.
                    </p>
                  </div>
                  <div className="modal-action">
                    <button type="button" className="button button-primary">
                      <span>Stay in party</span>
                    </button>
                    <button type="button" className="button button-secondary">
                      <span>Leave party</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-2">
              <iframe
                className="rounded-lg"
                width="100%"
                height="345"
                src="//jsfiddle.net/augustin_hiebel/Lb90o2vw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* With inner image */}
      <div className="mb-12">
        <Anchor title="With inner image" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="modal">
                <button
                  type="button"
                  className="button button-secondary button-close"
                >
                  <span className="icon icon-e-remove" />
                </button>
                <div className="modal-image">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653326622/Marketing/2022_prototype/DummyContent/trophy.png"
                    width="200"
                    height="auto"
                    alt="Trophy"
                  />
                </div>
                <div className="modal-content">
                  <div className="modal-body">
                    <h2 className="modal-title">Leave party?</h2>
                    <p>
                      We are looking to find you the best match. Leaving the
                      party means you lose your spot in the queue for the
                      tournament.
                    </p>
                  </div>
                  <div className="modal-action">
                    <button className="button button-primary">
                      <span>Stay in party</span>
                    </button>
                    <button className="button button-secondary">
                      <span>Leave party</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-2">
              <iframe
                className="rounded-lg"
                width="100%"
                height="345"
                src="//jsfiddle.net/augustin_hiebel/sq703g2h/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Centered */}
      <div className="mb-12">
        <Anchor title="Centered" />
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="modal modal-center">
                <button
                  type="button"
                  className="button button-secondary button-close"
                >
                  <span className="icon icon-e-remove" />
                </button>
                <div className="modal-content">
                  <div className="modal-body">
                    <h2 className="modal-title">Leave party?</h2>
                    <p>
                      We are looking to find you the best match. Leaving the
                      party means you lose your spot in the queue for the
                      tournament.
                    </p>
                  </div>
                  <div className="modal-action">
                    <button className="button button-primary">
                      <span>Stay in party</span>
                    </button>
                    <button className="button button-secondary">
                      <span>Leave party</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-2">
              <iframe
                className="rounded-lg"
                width="100%"
                height="345"
                src="//jsfiddle.net/augustin_hiebel/groact7q/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Flexibility */}
      <div className="mb-12">
        <Anchor title="Flexibility" />
        <p className="text-ui-300 mb-6">
          The modals have been designed to cater for various usages, you can
          pass extra class names such as <code>.surface-transparent</code> (to
          hide the modal surface) or <code>.max-w-xx</code> (to make the modal
          thiner), choose wether or not to have an image or actions or even
          padding.
        </p>
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="modal max-w-sm mx-auto">
                <button
                  type="button"
                  className="button button-secondary button-close"
                >
                  <span className="icon icon-e-remove" />
                </button>
                <div className="modal-content p-0">
                  <div className="modal-body text-center">
                    <iframe
                      className="mx-auto aspect-video rounded"
                      width="100%"
                      height="auto"
                      src="https://www.youtube.com/embed/EXb8cI4szRQ?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-2">
              <iframe
                className="rounded-lg"
                width="100%"
                height="345"
                src="//jsfiddle.net/augustin_hiebel/9osdvhmc/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="modal modal-center surface-transparent">
                <button
                  type="button"
                  className="button button-secondary button-close"
                >
                  <span className="icon icon-e-remove" />
                </button>
                <div className="modal-content">
                  <h2 className="modal-title animate-slide-in-top">
                    Congratulations
                  </h2>
                  <div className="flex gap-8 items-start justify-center leading-tight mt-4 animate-slide-in-bottom">
                    <div className="">
                      <img
                        className="mx-auto"
                        src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-small.png"
                        width="140"
                        height="auto"
                        alt=""
                      />
                      <div className="flex gap-2 items-baseline justify-center">
                        <div className="text-4xl text-currency-1-500">5</div>
                        <div className="uppercase text-lg text-currency-1-500">
                          Coins
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <img
                        className="mx-auto"
                        src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-token-extrasmall.png"
                        width="140"
                        height="auto"
                        alt=""
                      />
                      <div className="flex gap-2 items-baseline justify-center">
                        <div className="text-4xl text-currency-2-500">1</div>
                        <div className="uppercase text-lg text-currency-2-500">
                          Token
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-2">
              <iframe
                className="rounded-lg"
                width="100%"
                height="345"
                src="//jsfiddle.net/augustin_hiebel/yktnfa5b/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
