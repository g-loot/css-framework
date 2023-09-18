import { useEffect, useState, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import Tooltip from "@/components/Tooltip/Tooltip";
import ModalShareActivity from "../modal-shareactivity";
import ModalReportMessage from "../clans/modal-report-message";

const FeedItemComment = (props) => {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const comment = props.comment;
  const [likeOn, setLikeOn] = useState(false);

  useEffect(() => {
    if (comment.likes && comment.likes.includes(1)) {
      setLikeOn(true);
    }
  }, [props]);

  function openModalReportMessage() {
    uiContext.openModal(<ModalReportMessage object="comment" />);
  }

  return (
    <>
      <li className="flex items-start gap-3 group">
        <Avatar id={comment.author} size="avatar-xs" hasTooltip={true} />
        <div className="flex-1 text-sm">
          <div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-baseline sm:justify-between">
            <div className="flex-1 truncate p-1">
              <Link
                href={`/stryda/profile/${
                  comment.author
                }${prototype.getURLparams()}`}
              >
                <span className="interactive truncate font-bold">
                  {prototype.getUserByID(comment.author)?.nickname}
                </span>
              </Link>
            </div>
            <div className="flex gap-4 items-baseline text-sm">
              <span className="text-ui-400">{comment.date}</span>
              <button
                type="button"
                className="hidden group-hover:block interactive"
                onClick={() => openModalReportMessage()}
              >
                <span className="text-main">Report</span>
              </button>
            </div>
          </div>
          <p
            className="text-sm text-ui-300 px-1"
            dangerouslySetInnerHTML={{
              __html: comment.text,
            }}
          />
          <button
            type="button"
            className={`switch switch-slot button button-ghost rounded-full rounded-full ${
              likeOn ? "switch-active" : ""
            }`}
            onClick={() => {
              setLikeOn(!likeOn);
            }}
          >
            <div className="switch-on icon text-xs icon-favorite text-main" />
            <div className="switch-off icon text-xs icon-favorite-outline text-ui-300" />
          </button>
        </div>
      </li>
    </>
  );
};

export default function FeedItemComments(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const isExpanded = props.isExpanded !== undefined ? props.isExpanded : true;
  const [commentOn, setCommentOn] = useState(false);
  const [likeOn, setLikeOn] = useState(false);
  const [totalLikes, setTotalLikes] = useState(null);

  useEffect(() => {
    setLikeOn(item.social.likes.hasLiked);
    setTotalLikes(item.social.likes.users.length);
  }, [item]);

  useEffect(() => {
    console.log("likeOn", totalLikes);
    if (likeOn) {
      setTotalLikes(item.social.likes.users.length + 1);
    } else {
      setTotalLikes(item.social.likes.users.length);
    }
  }, [likeOn]);

  function openModalShareActivity(item) {
    uiContext.openModal(<ModalShareActivity item={item} />);
  }

  return (
    <>
      {item && (
        <>
        <div className="p-3 flex flex-col sm:flex-row gap-6 items-stretch sm:items-center justify-between text-ui-300 text-base">
            <div className="flex gap-0.5 items-center text-xs">
              {item.social?.likes.users && (
                <>
                  <Tooltip
                    placement="top"
                    tooltip={
                      item.social.likes.users.length > 0 ? (
                        <ul className="text-xs leading-snug">
                          {item.social.likes.users
                            .slice(0, 5)
                            .map((user, userIndex) => (
                              <li key={userIndex}>
                                {prototype.getUserByID(user).nickname}
                              </li>
                            ))}
                          {item.social.likes.users.length > 5 && (
                            <li>+ {item.social.likes.users.length - 5}</li>
                          )}
                        </ul>
                      ) : (
                        <div className="text-xs">Be the first to like</div>
                      )
                    }
                  >
                    <button type="button">
                      {totalLikes} like
                      {totalLikes > 1 && <>s</>}
                    </button>
                  </Tooltip>
                </>
              )}
              {item.social?.comments && (
                <>
                  <span>•</span>
                  <Link
                    href={`/stryda/activity/${
                      item.id
                    }#comments${prototype.getURLparams()}`}
                  >
                    <a className="interactive">
                      <span>
                        {item.social.comments.length} comment
                        {item.social.comments.length > 1 && <>s</>}
                      </span>
                    </a>
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-stretch gap-2 sm:gap-0 justify-around">
              <button
                type="button"
                className="button button-ghost rounded-full"
                onClick={() => {
                  setLikeOn(!likeOn);
                }}
              >
                <div
                  className={`switch switch-slot ${
                    likeOn ? "switch-active" : ""
                  }`}
                >
                  <div className="switch-on icon icon-favorite text-main" />
                  <div className="switch-off icon icon-favorite text-ui-300" />
                </div>
              </button>
              <button
                type="button"
                className="button button-ghost rounded-full"
                onClick={() => {
                  setCommentOn(!commentOn);
                }}
              >
                <span className="icon icon-comment text-base" />
              </button>
              <button
                type="button"
                className="button button-ghost rounded-full"
                onClick={() => openModalShareActivity(item)}
              >
                <span className="icon icon-network-communication text-base" />
              </button>
              {item.type === "match" && (
                <Link
                  href={`/stryda/activity/${
                    item.id
                  }${prototype.getURLparams()}`}
                >
                  <button type="button" className="button button-ghost rounded-full">
                    <span className="icon icon-view text-base" />
                  </button>
                </Link>
              )}
              {item.type === "post" && item.url && (
                <Link href={item.url}>
                  <button type="button" className="button button-ghost rounded-full">
                    <span className="icon icon-view text-base" />
                  </button>
                </Link>
              )}
              {item.type === "advertising" && item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-ghost rounded-full"
                >
                  <span className="icon icon-view text-base" />
                </a>
              )}
            </div>
          </div>
        {/*
          <div className="p-3 flex flex-col sm:flex-row gap-6 items-stretch sm:items-center justify-between text-ui-300 text-base">
            <div className="flex gap-0.5 items-center text-xs">
              {item.social?.likes.users && (
                <>
                  <Tooltip
                    placement="top"
                    tooltip={
                      item.social.likes.users.length > 0 ? (
                        <ul className="text-xs leading-snug">
                          {item.social.likes.users
                            .slice(0, 5)
                            .map((user, userIndex) => (
                              <li key={userIndex}>
                                {prototype.getUserByID(user).nickname}
                              </li>
                            ))}
                          {item.social.likes.users.length > 5 && (
                            <li>+ {item.social.likes.users.length - 5}</li>
                          )}
                        </ul>
                      ) : (
                        <div className="text-xs">Be the first to like</div>
                      )
                    }
                  >
                    <button type="button">
                      {totalLikes} like
                      {totalLikes > 1 && <>s</>}
                    </button>
                  </Tooltip>
                </>
              )}
              {item.social?.comments && (
                <>
                  <span>•</span>
                  <Link
                    href={`/stryda/activity/${
                      item.id
                    }#comments${prototype.getURLparams()}`}
                  >
                    <a className="interactive">
                      <span>
                        {item.social.comments.length} comment
                        {item.social.comments.length > 1 && <>s</>}
                      </span>
                    </a>
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-stretch gap-2 sm:gap-0 justify-around">
              <button
                type="button"
                className="button button-ghost rounded-full"
                onClick={() => {
                  setLikeOn(!likeOn);
                }}
              >
                <div
                  className={`switch switch-slot ${
                    likeOn ? "switch-active" : ""
                  }`}
                >
                  <div className="switch-on icon icon-favorite text-main" />
                  <div className="switch-off icon icon-favorite text-ui-300" />
                </div>
              </button>
              <button
                type="button"
                className="button button-ghost rounded-full"
                onClick={() => {
                  setCommentOn(!commentOn);
                }}
              >
                <span className="icon icon-comment text-base" />
              </button>
              <button
                type="button"
                className="button button-ghost rounded-full"
                onClick={() => openModalShareActivity(item)}
              >
                <span className="icon icon-network-communication text-base" />
              </button>
              {item.type === "match" && (
                <Link
                  href={`/stryda/activity/${
                    item.id
                  }${prototype.getURLparams()}`}
                >
                  <button type="button" className="button button-ghost rounded-full">
                    <span className="icon icon-view text-base" />
                  </button>
                </Link>
              )}
              {item.type === "post" && item.url && (
                <Link href={item.url}>
                  <button type="button" className="button button-ghost rounded-full">
                    <span className="icon icon-view text-base" />
                  </button>
                </Link>
              )}
              {item.type === "advertising" && item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-ghost rounded-full"
                >
                  <span className="icon icon-view text-base" />
                </a>
              )}
            </div>
          </div>
              */}
          {isExpanded && (
            <>
              {item.social.comments.length > 0 && (
                <ul className="px-4 pb-4 space-y-4 sm:px-6 sm:pb-6 sm:space-y-6 pt-2 text-base">
                  {item.social.comments.map((comment, commentIndex) => (
                    <FeedItemComment key={commentIndex} comment={comment} />
                  ))}
                </ul>
              )}
            </>
          )}
          {commentOn && (
            <div className="flex items-start gap-3 pr-2 pb-2 pl-3 text-base">
              <div className="w-9">
                <Avatar id={1} hasLevel={false} />
              </div>
              <div className="form-group flex-1">
                <textarea
                  name="add-comment"
                  id="add-comment"
                  className="resize-none text-sm"
                  placeholder="Add a comment, @ to mention"
                  autoFocus
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  className="button button-sm button-ghost"
                >
                  <span>Post</span>
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
