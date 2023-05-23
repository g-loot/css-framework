import React, { useEffect, useRef, useState } from "react";

import Chat from "../../components/Chat/Chat";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const conversationSingleOthers = [
  {
    id: 1,
    time: "15 min. ago",
    author: 2,
    isYourself: false,
    messages: [
      {
        id: 1,
        type: "text",
        content:
          "Welcome aboard <a className='font-bold' href='#'>@James</a> 👋",
        reactions: [
          {
            emoji: "❤️",
            author: [4, 0],
          },
          {
            emoji: "👏",
            author: [1],
          },
        ],
      },
    ],
  },
];
const conversationSingleSelf = [
  {
    id: 1,
    time: "15 min. ago",
    author: 2,
    isYourself: true,
    messages: [
      {
        id: 1,
        type: "text",
        content:
          "Welcome aboard <a className='font-bold' href='#'>@James</a> 👋",
        reactions: [
          {
            emoji: "❤️",
            author: [4, 0],
          },
          {
            emoji: "👏",
            author: [1],
          },
        ],
      },
    ],
  },
];
const conversationSingleEvent = [
  {
    id: 1,
    time: "15 min. ago",
    author: 2,
    isEvent: true,
    messages: [
      {
        id: 1,
        type: "text",
        content:
          "Welcome Martin to the Clan!",
      },
    ],
  },
];

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Chat</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <div className="flex items-center justify-between">
          <h2 className="h3 mb-3">Structure</h2>

        </div>

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

      {/* Variant */}
      <div className="mb-12" id="variant">
        <h2 className="h3 mb-3">Variant: secondary</h2>

        <div className="surface rounded-lg">
          <Chat variant="secondary" />
        </div>
      </div>

      {/* Chat group (others) */}
      <div className="mb-12" id="chat-group-others">
        <h2 className="h3 mb-3">Chat group (others)</h2>

        <div className="surface rounded-lg">
          <Chat
            conversation={conversationSingleOthers}
            demo={true}
            maxheight={"auto"}
          />
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/9bwjd47f/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
          ></iframe>
        </div>
      </div>

      {/* Chat group (self) */}
      <div className="mb-12" id="chat-group-self">
        <h2 className="h3 mb-3">Chat group (self)</h2>

        <div className="surface rounded-lg">
          <Chat
            conversation={conversationSingleSelf}
            demo={true}
            maxheight={"auto"}
          />
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/3oa8Lces/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
          ></iframe>
        </div>
      </div>
      
      {/* Chat message (event) */}
      <div className="mb-12" id="chat-message-event">
        <h2 className="h3 mb-3">Chat message (event)</h2>

        <div className="surface rounded-lg">
          <Chat
            conversation={conversationSingleEvent}
            demo={true}
            maxheight={"auto"}
          />
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/ksdygrox/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
                    src="https://res.cloudinary.com/gloot/image/upload/f_auto/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg"
                    alt="avatar"
                  />
                </div>
              </div>
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
              <time dateTime="2008-02-14 20:00">15 min. ago</time>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="200"
            src="//jsfiddle.net/augustin_hiebel/87n65jcf/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
          ></iframe>
        </div>
      </div>

      {/* Chat reactions */}
      <div className="mb-12" id="chat-reactions">
        <h2 className="h3 mb-3">Chat reactions</h2>

        <div className="surface rounded-lg p-4 flex items-center justify-center">
          <div className="chat-reactions">
            <div className="chat-reaction">
              <span>👍</span>
              <span>3</span>
            </div>
            <div className="chat-reaction is-owner">
              <span>❤️</span>
              <span>1</span>
            </div>
            <div className="chat-reaction">
              <span>❤️</span>
              <span>👍</span>
              <span>😡</span>
              <span>4</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="250"
            src="//jsfiddle.net/augustin_hiebel/rveL6xt8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
          ></iframe>
        </div>
      </div>


      {/* Chat footer */}
      <div className="mb-12" id="chat-footer">
        <h2 className="h3 mb-3">Chat footer</h2>

        <div className="surface rounded-lg">
          <form className="chat-footer flex items-end">
            <div className="dropdown dropdown-top">
              <label
                tabIndex="0"
                className="button button-ghost rounded-full m-0"
              >
                <span className="icon icon-c-add"></span>
              </label>
              <div tabIndex="0" className="dropdown-content bg-ui-500 p-1">
                <ul className="menu menu-secondary menu-rounded menu-horizontal">
                  <li>
                    <a>
                      <span>
                        <span className="text-xl">❤️</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>
                        <span className="text-xl">👍</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>
                        <span className="text-xl">😂</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>
                        <span className="text-xl">👏</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="send-message"
                id="send-message"
                className="rounded-3xl max-h-[200px] resize-none"
                rows={1}
                placeholder="Message clan"
              ></textarea>
            </div>
            <button
              type="submit"
              role="button"
              className="button button-tertiary rounded-full"
            >
              <span className="icon icon-send-message" />
            </button>
          </form>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/jr2nv5a3/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
          ></iframe>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
