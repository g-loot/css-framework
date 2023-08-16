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
  const [commentOn, setCommentOn] = useState(false);
  const [likeOn, setLikeOn] = useState(false);

  useEffect(() => {
    setLikeOn(item.social.likes.hasLiked);
  }, [item]);

  return (
    <>
      {item && (
        <>
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6 items-stretch sm:items-center justify-between text-xs sm:text-sm text-ui-300">
            <div className="flex items-center gap-2">
              {item.social?.views && (
                <>
                  <div className="avatar-group -space-x-1 mr-1">
                    {item.social.views?.slice(0, 3).map((user, userIndex) => (
                      <Avatar id={user} key={userIndex} size="avatar-tiny" />
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
              {item.social?.likes.users && (
                <>
                  <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
                  <Tooltip
                    placement="top"
                    tooltip={
                      item.social.likes.length > 0 ? (
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
                      {item.social.likes.users.length} like
                      {item.social.likes.users.length > 1 && <>s</>}
                    </button>
                  </Tooltip>
                </>
              )}
              {item.social?.comments && (
                <>
                  <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
                  <span>
                    {item.social.comments.length} comment
                    {item.social.comments.length > 1 && <>s</>}
                  </span>
                </>
              )}
            </div>
            <div className="flex gap-1 items-stretch sm:items-center">
              <button
                type="button"
                className={`flex-1 sm:flex-none switch switch-slot button button-tertiary rounded ${
                  likeOn ? "switch-active" : ""
                }`}
                onClick={() => {
                  setLikeOn(!likeOn);
                }}
              >
                <div className="switch-on icon text-lg icon-favorite text-main" />
                <div className="switch-off icon text-lg icon-favorite-outline text-ui-300" />
              </button>
              <button
                type="button"
                className={`flex-1 sm:flex-none switch button button-tertiary rounded ${
                  commentOn ? "switch-active" : ""
                }`}
                onClick={() => {
                  setCommentOn(!commentOn);
                }}
              >
                <div className="switch-on icon text-lg icon-comment text-main" />
                <div className="switch-off icon text-lg icon-comment text-ui-300" />
              </button>
            </div>
          </div>
          {item.social.comments.length > 0 && (
            <ul className="px-4 pb-4 space-y-4 sm:px-6 sm:pb-6 sm:space-y-6 pt-2">
              {item.social.comments.map((comment, commentIndex) => (
                <FeedItemComment key={commentIndex} comment={comment} />
              ))}
            </ul>
          )}
          {commentOn && (
            <div className="flex items-start gap-3 px-4 pb-4 sm:px-6 sm:pb-6">
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
