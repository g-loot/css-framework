import { useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalReportMessage from "../clans/modal-report-message";
import ModalDeleteMatch from "../modal-deletematch";

export default function FeedItemContextualMenu({ item, match, onEdit }) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();

  function openModalReportMessage() {
    uiContext.openModal(<ModalReportMessage object="post" />);
  }

  function openDeleteMatch() {
    uiContext.openModal(<ModalDeleteMatch match={match} item={item} />);
  }

  return (
    <>
      {item && match && (
        <div className="dropdown dropdown-left">
          <label tabIndex="0" className="button button-ghost rounded-full">
            <span className="icon icon-dots" />
          </label>
          <div tabIndex="0" className="dropdown-content bg-ui-600 w-52 p-1">
            <ul className="menu menu-rounded menu-secondary">
              {prototype.getUserByID(match.user).isYou ? (
                <>
                  <li>
                    <button type="button" onClick={() => onEdit()}>
                      <span className="icon icon-pen-2" />
                      <span>Edit</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => openDeleteMatch()}>
                      <span className="icon icon-trash" />
                      <span>Delete</span>
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
                    <span>Report abuse</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
