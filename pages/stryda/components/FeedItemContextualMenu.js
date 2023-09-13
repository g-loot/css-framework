import { useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalShareActivity from "../modal-shareactivity";
import ModalReportMessage from "../clans/modal-report-message";

export default function FeedItemContextualMenu(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;

  function openModalShareActivity(item) {
    uiContext.openModal(<ModalShareActivity item={item} />);
  }
  function openModalReportMessage() {
    uiContext.openModal(<ModalReportMessage object="post" />);
  }

  return (
    <>
      {item && match && (
        <div className="dropdown dropdown-left">
          <label tabIndex="0" className="button button-ghost rounded-full">
            <span className="icon icon-dots-vertical" />
          </label>
          <div tabIndex="0" className="dropdown-content bg-ui-600 w-52 p-1">
            <ul className="menu menu-rounded menu-secondary">
              <li>
                <button
                  type="button"
                  onClick={() => openModalShareActivity(item)}
                >
                  <span className="icon icon-network-communication-1" />
                  <span>Share</span>
                </button>
              </li>
              {prototype.getUserByID(match.user).isYou ? (
                <>
                  <li>
                    <button type="button">
                      <span className="icon icon-pen-2" />
                      <span>Edit</span>
                    </button>
                  </li>
                  <li>
                    <button type="button">
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
