import { useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalReportMessage from "../clans/modal-report-message";
import ModalDeletePost from "../modal-deletepost";
import Link from "next/link";

export default function FeedItemContextualMenu({ item, match, onEdit }) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();

  function openModalReportMessage() {
    uiContext.openModal(<ModalReportMessage object="post" />);
  }

  function openDeletePost() {
    uiContext.openModal(<ModalDeletePost match={match} item={item} />);
  }

  return (
    <>
      {item && (
        <div className="dropdown dropdown-left">
          <label tabIndex="0" className="button button-ghost rounded-full">
            <span className="icon icon-dots" />
          </label>
          <div tabIndex="0" className="dropdown-content bg-ui-600 w-52 p-1">
            <ul className="menu menu-rounded menu-secondary">
              {match && item.type === "match" && (
                <>
                {match.meta.media?.videoUrl && (
                  <li>
                    <button type="button" onClick={() => onEdit()}>
                      <span className="icon icon-data-download" />
                      <span>Download video</span>
                    </button>
                  </li>
                )}
                  {prototype.getUserByID(match.user).isYou ? (
                    <>
                      <li>
                        <button type="button" onClick={() => onEdit()}>
                          <span className="icon icon-pen-2" />
                          <span>Edit title</span>
                        </button>
                      </li>
                      <li>
                        <button type="button" onClick={() => openDeletePost()}>
                          <span className="icon icon-trash" />
                          <span>Delete post</span>
                        </button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <button
                        type="button"
                        onClick={() => openModalReportMessage()}
                      >
                        <span className="icon icon-c-warning" />
                        <span>Report</span>
                      </button>
                    </li>
                  )}
                </>
              )}
              {item.type === "advertising" && (
                <li>
                  <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                    <button type="button">
                      <span className="icon icon-notification" />
                      <span>Remove ads</span>
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
