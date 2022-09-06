import React, { useContext } from "react";

import Modal1 from "./modals/modal-example-1";
import { UiContext } from "../../contexts/ui";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  const uiContext = useContext(UiContext);
  function openModal1() {
    uiContext.openModal(<Modal1></Modal1>);
  }
  return (
    <>
      <h1 className="mb-2">Modal</h1>

      {/* Example */}
      <div className="mb-12" id="example">
        <h2 className="h3 mb-3">Example</h2>

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
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

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
      <div className="mb-12" id="inverted">
        <h2 className="h3 mb-3">Inverted</h2>

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

      {/* With inner image */}
      <div className="mb-12" id="with-inner-image">
        <h2 className="h3 mb-3">With inner image</h2>

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
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
