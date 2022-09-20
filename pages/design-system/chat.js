import React, { useEffect, useRef, useState } from "react";

import Chat from "../../components/Chat/Chat";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Chat</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="surface rounded-lg">
          <Chat />
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/4q6jn89g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
          ></iframe>
        </div>
      </div>

      {/* Status writting */}
      <div className="mb-12" id="status-writting">
        <h2 className="h3 mb-3">Status writting</h2>

        <div className="surface rounded-lg">
          <div className="chat-group ">
            <div className="chat-author">
              <div className="avatar avatar-circle avatar-sm">
                <div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg"
                    alt="avatar"
                  />
                </div>
              </div>
              <time dateTime="2008-02-14 20:00">Message sent 1.22pm</time>
            </div>
            <div className="chat-messages">
              <span className="leading-none uppercase text-sm">Kes2Band</span>
              <div className="chat-message">
                <div className="chat-bubble is-writting">
                  <div>
                    <div className="loader-message">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="220"
            src="//jsfiddle.net/augustin_hiebel/87n65jcf/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
          ></iframe>
        </div>
      </div>

      {/* Actions in bubble */}
      <div className="mb-12" id="actions-in-bubble">
        <h2 className="h3 mb-3">Actions in bubble</h2>

        <div className="surface rounded-lg">
          <div className="chat-group ">
            <div className="chat-author">
              <div className="avatar avatar-circle avatar-sm">
                <div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg"
                    alt="avatar"
                  />
                </div>
              </div>
              <time dateTime="2008-02-14 20:00">Message sent 1.22pm</time>
            </div>
            <div className="chat-messages">
              <span className="leading-none uppercase text-sm">Kes2Band</span>
              <div className="chat-message">
                <div className="chat-bubble is-writting">
                  <div>
                    <div className="loader-message">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
                <div className="chat-actions is-inbubble">

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="100"
            src="//jsfiddle.net/augustin_hiebel/87n65jcf/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
          ></iframe>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
