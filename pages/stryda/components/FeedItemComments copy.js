import { useEffect, useState, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import Tooltip from "@/components/Tooltip/Tooltip";
import { UiContext } from "@/contexts/ui";

const FeedItemComment = (props) => {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const comment = props.comment;
  const [likeOn, setLikeOn] = useState(false);

  useEffect(() => {
    if (comment.likes && comment.likes.includes(1)) {
      setLikeOn(true);
    }
  }, [props]);

  return (
    <>
      <li className="flex items-start gap-3">
        <Avatar id={comment.author} size="avatar-xs" hasTooltip={true} />
        <div className="flex-1 text-sm">
          <div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-baseline sm:justify-between">
            <div className="truncate p-1">
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
            <span className="text-ui-400">{comment.date}</span>
          </div>
          <p
            className="text-sm text-ui-300 px-1"
            dangerouslySetInnerHTML={{
              __html: comment.text,
            }}
          />
          <button
            type="button"
            className={`switch switch-slot button button-ghost rounded-full ${
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
  const prototype = usePrototypeData();
  const item = props.item;
  const isExpanded = props.isExpanded !== undefined ? props.isExpanded : true;
  const [commentOn, setCommentOn] = useState(false);
  const [likeOn, setLikeOn] = useState(false);
  const [totalLikes, setTotalLikes] = useState(null);

  useEffect(() => {
    setLikeOn(item.social.likes.hasLiked);
    setTotalLikes(item.social.likes.length);
  }, [item]);

  useEffect(() => {
    console.log("likeOn", totalLikes);
    if (likeOn) {
      setTotalLikes(item.social.likes.length + 1);
    } else {
      setTotalLikes(item.social.likes.length);
    }
  }, [likeOn]);

  return (
    <>
      {item && (
        <>
          <div className="p-2 sm:px-4 flex flex-col sm:flex-row gap-6 items-stretch sm:items-center justify-between text-xs text-ui-300">
            <div className="flex items-center gap-1">
              {item.social?.views && (
                <>
                  <div className="avatar-group -space-x-1 mr-1">
                    {item.social.views?.slice(0, 3).map((user, userIndex) => (
                      <Avatar
                        id={user}
                        key={userIndex}
                        hasLevel={false}
                        size="avatar-tiny"
                      />
                    ))}
                  </div>
                  <Tooltip
                    placement="top"
                    tooltip={
                      item.social.views.length > 0 ? (
                        <ul className="text-xs leading-snug">
                          {item.social.views
                            .slice(0, 5)
                            .map((user, userIndex) => (
                              <li key={userIndex}>
                                {prototype.getUserByID(user).nickname}
                              </li>
                            ))}
                          {item.social.views.length > 5 && (
                            <li>+ {item.social.views.length - 5}</li>
                          )}
                        </ul>
                      ) : (
                        <div className="text-xs">Be the first to view</div>
                      )
                    }
                  >
                    <button type="button">
                      {item.social.views.length} view
                      {item.social.views.length > 1 && <>s</>}
                    </button>
                  </Tooltip>
                </>
              )}
            </div>
            <div className="flex gap-2 items-stretch sm:items-center">
              {item.social?.likes.users && (
                <>
                  <Tooltip
                    placement="top"
                    tooltip={
                      item.social.likes.length > 0 ? (
                        <ul className="text-xs leading-snug">
                          {item.social.likes
                            .slice(0, 5)
                            .map((user, userIndex) => (
                              <li key={userIndex}>
                                {prototype.getUserByID(user).nickname}
                              </li>
                            ))}
                          {item.social.likes.length > 5 && (
                            <li>+ {item.social.likes.length - 5}</li>
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
          </div>
          <div className="p-2 flex items-stretch gap-2 justify-around">
            <button
              type="button"
              className="flex-1 button button-ghost rounded button-sm"
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
              <span className={likeOn ? "text-main" : ""}>Like</span>
            </button>
            <button
              type="button"
              className="flex-1 button button-ghost rounded button-sm"
              onClick={() => {
                setCommentOn(!commentOn);
              }}
            >
              {/*
              <div
                className={`switch switch-slot ${
                  commentOn ? "switch-active" : ""
                }`}
              >
                <div className="switch-on icon icon-comment text-main" />
                <div className="switch-off icon icon-comment text-ui-300" />
              </div>
              */}
              <span className="icon icon-comment text-base" />
              <span>Comment</span>
            </button>
            {item.type === "match" && (
              <Link
                href={`/stryda/activity/${item.id}${prototype.getURLparams()}`}
              >
                <button
                  type="button"
                  className="flex-1 button button-ghost rounded button-sm"
                >
                  <span className="icon icon-view text-base" />
                  <span>View</span>
                </button>
              </Link>
            )}
            {item.type === "post" && item.url && (
              <Link href={item.url}>
                <button
                  type="button"
                  className="flex-1 button button-ghost rounded button-sm"
                >
                  <span className="icon icon-view text-base" />
                  <span>View</span>
                </button>
              </Link>
            )}
            {item.type === "advertising" && item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 button button-ghost rounded button-sm"
              >
                <span className="icon icon-view text-base" />
                <span>View</span>
              </a>
            )}
          </div>
          {isExpanded && (
            <>
              {item.social.comments.length > 0 && (
                <ul className="px-4 pb-4 space-y-4 sm:px-6 sm:pb-6 sm:space-y-6 pt-2">
                  {item.social.comments.map((comment, commentIndex) => (
                    <FeedItemComment key={commentIndex} comment={comment} />
                  ))}
                </ul>
              )}
            </>
          )}
          {commentOn && (
            <div className="flex items-start gap-3 pr-2 pb-2 pl-3">
              <div className="w-9">
                <Avatar id={1} hasLevel={false} />
              </div>
              <div className="form-group flex-1">
                <textarea
                  name="add-comment"
                  id="add-comment"
                  className="resize-none"
                  placeholder="Add a comment"
                  autoFocus
                ></textarea>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
