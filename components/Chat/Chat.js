import React, { useContext, useEffect, useRef, useState } from "react";

import ModalReportMessage from "../../pages/prototype/clans-old/modal-report-message";
import Tooltip from "../Tooltip/Tooltip";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import GameIcon from "../GameIcon/GameIcon";
import Avatar from "../Avatar/Avatar";

const conversationFull = [
  {
    id: 0,
    author: 2,
    isEvent: true,
    messages: [
      {
        id: 1,
        type: "text",
        content: "Welcome Martin to the Clan!",
      },
    ],
  },
  {
    id: 1,
    time: "15 min. ago",
    author: 3,
    isYourself: false,
    messages: [
      {
        id: 1,
        type: "text",
        content: "Welcome aboard <code class='tag' href='#'>@Martin</code> 👋",
        reactions: [
          {
            emoji: "❤️",
            author: [4, 3, 7],
          },
          {
            emoji: "👏",
            author: [9, 2],
          },
        ],
      },
      {
        id: 2,
        type: "image",
        content: "https://media.giphy.com/media/HFMUv2KLirAyA7noXQ/giphy.gif",
      },
      {
        id: 3,
        type: "text",
        isDeleted: true,
        content:
          "Welcome aboard <code class='tag is-owner' href='#' content-editable='false'>@JackAttack123</code> 👋",
        reactions: [
          {
            emoji: "❤️",
            author: [4, 3],
          },
          {
            emoji: "👏",
            author: [1],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    time: "15 min. ago",
    author: 1,
    isYourself: true,
    messages: [
      {
        id: 1,
        type: "text",
        content: "Welcome mate! 🔥🔥🔥",
        reactions: [
          {
            emoji: "❤️",
            author: [4],
          },
          {
            emoji: "👏",
            author: [11],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    time: "15 min. ago",
    author: 4,
    isYourself: false,
    messages: [
      {
        id: 1,
        type: "text",
        content:
          "Nice to meet you guys, thank you for having me. Who is up for a quick valorant ladder game? <code class='tag' href='#'>@Kes2Band</code>, <code class='tag' href='#'>@Nomadiction</code>, <code class='tag is-owner' href='#'>@JackAttack123</code>?",
      },
    ],
  },
  {
    id: 4,
    time: "15 min. ago",
    author: 1,
    isYourself: true,
    messages: [
      {
        id: 1,
        type: "text",
        content:
          "I will be available in about 5 min. <code class='tag' href='#'>@Kes2Band</code> <code class='tag is-owner' href='#'>@JackAttack123</code>",
      },
    ],
  },
  {
    id: 5,
    time: "15 min. ago",
    author: 2,
    isYourself: false,
    messages: [
      {
        id: 1,
        type: "text",
        content: "Coming now <code class='tag' href='#'>@Kes2Band</code>",
      },
    ],
  },
  {
    id: 6,
    time: "15 min. ago",
    author: 4,
    isYourself: false,
    messages: [
      {
        id: 1,
        type: "text",
        content: "Awesome, can’t wait.",
        reactions: [
          {
            emoji: "❤️",
            author: [4],
          },
        ],
      },
      {
        id: 2,
        type: "text",
        content:
          "Is this the right link that you’ve sent? <a className='link' href='#' target='_blank'>https://stryda.gg/</a>",
        reactions: [
          {
            emoji: "👍",
            author: [4, 3, 1],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    time: "15 min. ago",
    author: 1,
    isYourself: true,
    messages: [
      {
        id: 1,
        type: "text",
        content: "Yes thats the right link I’ve sent. Check it out",
        reactions: [
          {
            emoji: "❤️",
            author: [4, 3, 1],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    author: 2,
    isEvent: true,
    messages: [
      {
        id: 1,
        type: "ladderresult",
      },
    ],
  },
  {
    id: 9,
    time: "5 min. ago",
    author: 3,
    isYourself: true,
    messages: [
      {
        id: 1,
        type: "text",
        content: "Great job guys! We got coiiiiiiiiins!",
        reactions: [
          {
            emoji: "❤️",
            author: [3],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    time: "2 min. ago",
    author: 2,
    isEvent: true,
    messages: [
      {
        id: 1,
        type: "text",
        content: "<a class='link'>MrKilla</a> has gifted <a class='link'>Nomadiction</a> 60 tokens",
        reactions: [
          {
            emoji: "❤️",
            author: [7],
          },
        ],
      },
    ],
  },
 
];

export default function Chat(props) {
  const maxHeight =
    props.maxheight !== undefined ? props.maxheight : "h-[700px]";
  const isDisabled = props.isdisabled;
  const isDemo = props.demo;
  const isAbsolute = props.isAbsolute || false;
  const variant = props.variant || false;
  const prototype = usePrototypeData();
  const [newMessageAdded, setNewMessageAdded] = useState(false);
  const conversationSelector =
    props.conversation === undefined ? conversationFull : props.conversation;
  const conversation = conversationSelector;
  const [messages, setMessages] = useState(conversation);

  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const modalReportMessage = query.modalreportmessage === "true" ? true : false;

  const [isActive, setActive] = useState(false);
  const ref = useRef(null);

  const dropdownActive = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  const handleHoverOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  };

  function openModalReportMessage() {
    uiContext.openModal(<ModalReportMessage></ModalReportMessage>);
  }

  useEffect(() => {
    if (modalReportMessage) {
      openModalReportMessage();
    }
  }, [modalReportMessage]);

  const minRows = 0;

  const [rows, setRows] = useState(minRows);
  const [value, setValue] = useState("");

  useEffect(() => {
    const rowlen = value.split("\n");

    if (rowlen.length > minRows) {
      setRows(rowlen.length);
    }
  }, [value]);

  let initialTotalMessageNumber = messages.reduce((acc, curr) => {
    const currentMesssageNomberOfMessages = curr.messages.length;
    acc = acc + currentMesssageNomberOfMessages;

    return acc;
  }, 0);
  const messageInput = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "instant",
      block: "end",
      inline: "end",
    });
  }, [
    messages.reduce((acc, curr) => {
      const currentMesssageNomberOfMessages = curr.messages.length;
      acc = acc + currentMesssageNomberOfMessages;
      return acc;
    }, 0),
  ]);

  function addEmoji(messageID, messageBubbleID, emoji) {
    setMessages((state) => {
      let updatedState;

      updatedState = [...state].map((msg) => {
        if (msg.id === messageID) {
          return {
            ...msg,
            messages: msg.messages.map((message) => {
              if (message.id === messageBubbleID) {
                let updatedReactions = message.reactions || [];
                if (
                  !updatedReactions.find((reaction) => reaction.emoji === emoji)
                ) {
                  updatedReactions = [
                    ...updatedReactions,
                    {
                      emoji,
                      author: [1],
                    },
                  ];
                }
                return {
                  ...message,
                  reactions: updatedReactions,
                };
              } else {
                return message;
              }
            }),
          };
        } else {
          return msg;
        }
      });
      return updatedState;
    });
  }

  function addMessage(e) {
    e.preventDefault();
    const newMessage = messageInput.current.value;

    if (newMessage.trim() === "") {
      return;
    }

    setMessages((state) => {
      let updatedState;

      if (!newMessageAdded) {
        setNewMessageAdded(true);
        updatedState = [
          ...state,
          {
            time: "15 min. ago",
            author: 1,
            isYourself: true,
            messages: [
              {
                type: "text",
                content: newMessage,
              },
            ],
          },
        ];
      } else {
        updatedState = [...state].map((msg, index, row) => {
          if (index < row.length - 1) {
            return msg;
          } else {
            return {
              ...msg,
              messages: [
                ...msg.messages,

                {
                  type: "text",
                  content: newMessage,
                },
              ],
            };
          }
        });
      }
      return updatedState;
    });
    messageInput.current.value = "";
  }
  return (
    <>
      <div
        className={`chat ${variant === "secondary" ? "chat-secondary" : ""}${
          isDemo ? "chat-responsive" : ""
        } ${isAbsolute ? "chat-absolute" : ""}`}
      >
        <div
          className={`chat-feed ${maxHeight} ${
            isDisabled ? "flex items-center justify-center" : ""
          }`}
        >
          {!isDisabled && (
            <ul className="chat-main">
              {messages?.map((message, messageIndex) => (
                <li
                  key={message.id}
                  className={`chat-group ${
                    message.isYourself ? "is-owner" : ""
                  } ${message.isEvent ? "is-event" : ""}`}
                >
                  {!message.isEvent && (
                    <>
                      <Link
                        href={`/prototype/profile/${
                          prototype.getUserByID(message.author)?.id
                        }`}
                      >
                        <div className="chat-author interactive">
                          <Avatar id={message.author} size="avatar-sm" hasTooltip={true} hasLevel={false} />
                        </div>
                      </Link>
                    </>
                  )}

                  <div className="chat-messages">
                    {!message.isEvent && (
                      <>
                        <div className="flex items-baseline gap-1">
                          <Link
                            href={`/prototype/profile/${
                              prototype.getUserByID(message.author)?.id
                            }`}
                          >
                            <span
                              className={`leading-none text-sm interactive ${
                                prototype.getUserByID(message.author)?.isPremium
                                  ? "text-premium-500"
                                  : "text-ui-100"
                              }`}
                            >
                              {message.isYourself && <>You</>}
                              {!message.isYourself && (
                                <>
                                  {
                                    prototype.getUserByID(message.author)
                                      ?.nickname
                                  }
                                </>
                              )}
                            </span>
                          </Link>
                          {message.time && (
                            <time dateTime="2008-02-14 20:00">
                              {message.time}
                            </time>
                          )}
                        </div>
                      </>
                    )}

                    {message.messages.map(
                      (messageBubble, messageBubbleIndex) => (
                        <div
                          key={messageBubble.id}
                          tabIndex={1}
                          className="chat-message"
                          onMouseLeave={handleHoverOutside}
                        >
                          <div
                            className={`chat-bubble ${
                              messageBubble.type === "image"
                                ? "chat-bubble-image"
                                : ""
                            } ${messageBubble.isDeleted ? "is-deleted" : ""}`}
                          >
                            {messageBubble.type === "text" && (
                              <>
                                {!messageBubble.isDeleted && (
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: messageBubble.content,
                                    }}
                                  />
                                )}
                                {messageBubble.isDeleted && (
                                  <div>Message deleted</div>
                                )}
                              </>
                            )}
                            {messageBubble.type === "image" && (
                              <>
                                <img src={messageBubble.content} alt="" />
                              </>
                            )}
                            {messageBubble.type === "ladderresult" && (
                              <div className="space-y-4">
                                <p>
                                  {prototype.getLadderByID("valorant", 2)?.name}{" "}
                                  is over, and the results are in:
                                </p>
                                <Link href={`/prototype/valorant/ladders/2${prototype.getURLparams()}`}>
                                  <div className="inline-flex flex-col lg:flex-row items-center gap-4 justify-center text-left surface-ui-600 p-2 rounded interactive">
                                    <div className="relative">
                                      <div className="absolute top-1 left-1">
                                        <Tooltip tooltip="Valorant">
                                          <GameIcon game={1} />
                                        </Tooltip>
                                      </div>
                                      <img
                                        src={
                                          prototype.getLadderByID("valorant", 2)
                                            ?.cover
                                        }
                                        className="aspect-cover object-cover rounded w-96"
                                        alt=""
                                      />
                                    </div>
                                    <div className="space-y-3">
                                      <h4 className="text-xl">
                                        {
                                          prototype.getLadderByID("valorant", 2)
                                            ?.name
                                        }
                                      </h4>
                                      <ul className="flex items-top gap-6">
                                        <li className="px-4 border-l border-ui-400/50">
                                          <div className="text-xs text-ui-300 uppercase font-bold">
                                            Total score
                                          </div>
                                          <div className="text-ui-100 text-xl lg:text-2xl">
                                            324 pts
                                          </div>
                                        </li>
                                        <li className="px-4 border-l border-ui-400/50">
                                          <div className="text-xs text-ui-300 uppercase font-bold">
                                            Position
                                          </div>
                                          <div className="text-ui-100 text-xl lg:text-2xl">
                                            #89
                                          </div>
                                        </li>
                                        <li className="px-4 border-l border-ui-400/50">
                                          <div className="text-xs text-ui-300 uppercase font-bold">
                                            Top match score
                                          </div>
                                          <div className="text-ui-100 text-xl lg:text-2xl">
                                            231 pts
                                          </div>
                                        </li>
                                      </ul>
                                      <div className="text-ui-300 text-sm">
                                        See stats and more results on the{" "}
                                          <a className="link">full leaderboard</a>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )}
                            <div className="chat-reactions">
                              {messageBubble.reactions?.map(
                                (reaction, reactionIndex) => (
                                  <Tooltip
                                    key={reactionIndex}
                                    placement="top"
                                    tooltip={
                                      <div className="relative text-sm">
                                        <ul>
                                          {reaction.author.map(
                                            (author, authorIndex) => (
                                              <li key={authorIndex}>
                                                {
                                                  prototype.getUserByID(author)
                                                    ?.nickname
                                                }
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    }
                                  >
                                    <div
                                      key={reactionIndex}
                                      className={`chat-reaction ${
                                        reaction.author.find(
                                          (auth) => auth === 1
                                        )
                                          ? "is-owner"
                                          : ""
                                      }`}
                                    >
                                      <span>{reaction.emoji}</span>
                                      <span>{reaction.author.length}</span>
                                    </div>
                                  </Tooltip>
                                )
                              )}
                              {variant != "secondary" && (
                                <div className="chat-react">
                                  <div
                                    ref={ref}
                                    className={`dropdown dropdown-bottom ${
                                      message.isYourself
                                        ? "dropdown-end"
                                        : "dropdown-start"
                                    } ${
                                      isActive
                                        ? "dropdown-open"
                                        : "dropdown-closed"
                                    }`}
                                    data-tooltip="React"
                                  >
                                    <button
                                      type="button"
                                      tabIndex="0"
                                      onClick={dropdownActive}
                                      className="chat-react-button rounded-full"
                                    >
                                      <span className="icon icon-smile"></span>
                                    </button>
                                    <div
                                      tabIndex="0"
                                      className="dropdown-content bg-ui-500 p-1"
                                    >
                                      <ul className="menu menu-secondary menu-rounded menu-horizontal">
                                        <li>
                                          <button
                                            type="button"
                                            className="p-0 w-7 h-7 flex justify-center items-center"
                                            tabIndex={0}
                                            onClick={addEmoji.bind(
                                              this,
                                              message.id,
                                              messageBubble.id,
                                              "❤️"
                                            )}
                                          >
                                            <span>
                                              <span className="text-xl">
                                                ❤️
                                              </span>
                                            </span>
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            type="button"
                                            className="p-0 w-7 h-7 flex justify-center items-center"
                                            tabIndex={0}
                                            onClick={addEmoji.bind(
                                              this,
                                              message.id,
                                              messageBubble.id,
                                              "👍"
                                            )}
                                          >
                                            <span>
                                              <span className="text-xl">
                                                👍
                                              </span>
                                            </span>
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            type="button"
                                            className="p-0 w-7 h-7 flex justify-center items-center"
                                            tabIndex={0}
                                            onClick={addEmoji.bind(
                                              this,
                                              message.id,
                                              messageBubble.id,
                                              "😂"
                                            )}
                                          >
                                            <span>
                                              <span className="text-xl">
                                                😂
                                              </span>
                                            </span>
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            type="button"
                                            className="p-0 w-7 h-7 flex justify-center items-center"
                                            tabIndex={0}
                                            onClick={addEmoji.bind(
                                              this,
                                              message.id,
                                              messageBubble.id,
                                              "👏"
                                            )}
                                          >
                                            <span>
                                              <span className="text-xl">
                                                👏
                                              </span>
                                            </span>
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="chat-actions">
                            {variant === "secondary" && (
                              <div
                                className="chat-action-hidden"
                                data-tooltip="React"
                              >
                                <div
                                  ref={ref}
                                  className={`dropdown dropdown-bottom dropdown-end ${
                                    isActive
                                      ? "dropdown-open"
                                      : "dropdown-closed"
                                  }`}
                                  data-tooltip="React"
                                >
                                  <button
                                    type="button"
                                    tabIndex="0"
                                    onClick={dropdownActive}
                                    className="button button-ghost rounded-full"
                                  >
                                    <span className="icon icon-smile"></span>
                                  </button>
                                  <div
                                    tabIndex="0"
                                    className="dropdown-content bg-ui-500 p-1"
                                  >
                                    <ul className="menu menu-secondary menu-rounded menu-horizontal">
                                      <li>
                                        <button
                                          type="button"
                                          className="p-0 w-7 h-7 flex justify-center items-center"
                                          tabIndex={0}
                                          onClick={addEmoji.bind(
                                            this,
                                            message.id,
                                            messageBubble.id,
                                            "❤️"
                                          )}
                                        >
                                          <span>
                                            <span className="text-xl">❤️</span>
                                          </span>
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          type="button"
                                          className="p-0 w-7 h-7 flex justify-center items-center"
                                          tabIndex={0}
                                          onClick={addEmoji.bind(
                                            this,
                                            message.id,
                                            messageBubble.id,
                                            "👍"
                                          )}
                                        >
                                          <span>
                                            <span className="text-xl">👍</span>
                                          </span>
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          type="button"
                                          className="p-0 w-7 h-7 flex justify-center items-center"
                                          tabIndex={0}
                                          onClick={addEmoji.bind(
                                            this,
                                            message.id,
                                            messageBubble.id,
                                            "😂"
                                          )}
                                        >
                                          <span>
                                            <span className="text-xl">😂</span>
                                          </span>
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          type="button"
                                          className="p-0 w-7 h-7 flex justify-center items-center"
                                          tabIndex={0}
                                          onClick={addEmoji.bind(
                                            this,
                                            message.id,
                                            messageBubble.id,
                                            "👏"
                                          )}
                                        >
                                          <span>
                                            <span className="text-xl">👏</span>
                                          </span>
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div
                              className="chat-action-hidden"
                              data-tooltip="More"
                            >
                              <div className="dropdown dropdown-end">
                                <label
                                  tabIndex="0"
                                  className="button button-ghost rounded-full"
                                >
                                  <span className="icon icon-dots-vertical"></span>
                                </label>
                                <div
                                  tabIndex="0"
                                  className="dropdown-content bg-ui-500 w-44 p-1"
                                >
                                  <ul className="menu menu-secondary menu-rounded">
                                    {!message.isYourself && (
                                      <li>
                                        <a onClick={openModalReportMessage}>
                                          <span className="icon icon-flag-diagonal-33" />
                                          <span className="text-ui-200">
                                            Report message
                                          </span>
                                        </a>
                                      </li>
                                    )}
                                    {message.isYourself && (
                                      <li>
                                        <a>
                                          <span className="icon icon-f-delete" />
                                          <span className="text-ui-200">
                                            Remove
                                          </span>
                                        </a>
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/*
                            <div
                              className="chat-action-hidden"
                              data-tooltip="Reply"
                            >
                              <button
                                type="button"
                                className="button button-ghost rounded-full"
                              >
                                <span className="icon icon-reply"></span>
                              </button>
                            </div>
                                    */}
                          </div>
                        </div>
                      )
                    )}

                    {message.time && !message.isEvent && (
                      <time className="hidden" dateTime="2008-02-14 20:00">
                        {message.time}
                      </time>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
          {isDisabled && (
            <div className="chat-main">
              <div className="max-w-xs mx-auto text-center">
                <img
                  className="mx-auto"
                  src="https://res.cloudinary.com/gloot/image/upload/v1659691391/Marketing/2022_prototype/Decoration-chat.webp"
                  width="220"
                  height="auto"
                  alt=""
                />
                <div className="mt-2 mb-6">
                  <p className="text-sm text-ui-400">Chat with your clan</p>
                  <p className="text-lg text-ui-300">
                    Coordinate and have fun together!
                  </p>
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
        {!isDemo && (
          <form className={`chat-footer flex items-end`} onSubmit={addMessage}>
            <div
              className={`dropdown dropdown-top  ${
                isDisabled ? "is-disabled" : ""
              }`}
            >
              <label
                tabIndex="0"
                className="button button-ghost rounded-full m-0"
              >
                <span
                  className={`icon ${isDisabled ? "icon-lock" : "icon-c-add"}`}
                ></span>
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
            <div className={`form-group ${isDisabled ? "is-disabled" : ""}`}>
              {/*
              <div limitreached="0" placeholder="Enter a message..." contenteditable="true" className="editable text-sm py-2 px-4 rounded-3xl border border-ui-500 shadow-sm bg-ui-700 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ui-300 focus-visible:z-20; pr-[3em] whitespace-pre-wrap w-full">
                <br />
              </div>
               */}

              <textarea
                ref={messageInput}
                name="send-message"
                id="send-message"
                className="rounded-[1.25rem] max-h-[200px] resize-none"
                rows={rows}
                onChange={(text) => setValue(text.target.value)}
                placeholder={`${
                  !isDisabled
                    ? "Message clan"
                    : "You need to be a member of this clan to participate"
                }`}
              ></textarea>
            </div>
            {!isDisabled && (
              <button
                type="submit"
                role="button"
                className="button button-tertiary rounded-full"
                disabled={value.length === 0}
              >
                <span className="icon icon-send-message" />
              </button>
            )}
          </form>
        )}
      </div>
    </>
  );
}
