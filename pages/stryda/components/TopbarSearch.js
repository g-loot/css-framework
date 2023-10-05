import { useEffect, useState, useRef, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";

const ResultsList = (props) => {
  const prototype = usePrototypeData();
  const filter = props.filter;
  const [loading, setLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredClans, setFilteredClans] = useState([]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  }, [loading, filter]);

  useEffect(() => {
    setFilteredUsers(
      prototype.users
        .filter((item) => {
          if (!filter) return true;
          if (item.nickname.toLowerCase().includes(filter.toLowerCase())) {
            return true;
          }
        })
        .slice(0, 4)
    );
    setFilteredClans(
      prototype.clans
        .filter((item) => {
          if (!filter) return true;
          if (item.nickname.toLowerCase().includes(filter.toLowerCase())) {
            return true;
          }
        })
        .slice(0, 4)
    );
  }, [filter]);

  return (
    <>
      {loading ? (
        <ul className="is-loading divide-y-0">
          <li className="item">
            <div className="item-body truncate">
              <div className="item-title">Loading</div>
            </div>
          </li>
          <li className="item">
            <div className="item-body truncate">
              <div className="item-title">Loading</div>
            </div>
          </li>
          <li className="item">
            <div className="item-body truncate">
              <div className="item-title">Loading</div>
            </div>
          </li>
          <li className="item">
            <div className="item-body truncate">
              <div className="item-title">Loading</div>
            </div>
          </li>
          <li className="item">
            <div className="item-body truncate">
              <div className="item-title">Loading</div>
            </div>
          </li>
        </ul>
      ) : (
        <div className="max-h-[calc(100dvh-92px-1rem)] overflow-y-auto scrollbar-desktop">
          <h3 className="text-base m-2">Players</h3>
          {filteredClans.length > 0 ? (
            <ul className="item-interactive divide-y-0">
              {filteredUsers.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={`/stryda/profile/${item.id}${prototype.getURLparams()}`}
                >
                  <li className="item">
                    <div className="item-image">
                      <Avatar
                        id={item.id}
                        size="avatar-tiny"
                        hasLevel={false}
                      />
                    </div>
                    <div className="item-body truncate">
                      <div className="item-title text-sm">
                        {item.clan && (
                          <>
                            {" "}
                            &#91;
                            {prototype.getClanByID(item.clan)?.tag}
                            &#93;
                          </>
                        )}{" "}
                        {item.nickname}
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <div className="p-2 text-sm">No Players found</div>
          )}

          <h3 className="text-base m-2 pt-2 border-t border-ui-500">Clans</h3>
          {filteredClans.length > 0 ? (
            <ul className="item-interactive divide-y-0">
              {filteredClans.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={`/stryda/profile/${item.id}${prototype.getURLparams()}`}
                >
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-squircle avatar-tiny">
                        <div>
                          <img src={item.avatar} alt="avatar" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body truncate">
                      <div className="item-title text-sm">{item.nickname}</div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <div className="p-2 text-sm">No Clans found</div>
          )}
        </div>
      )}
    </>
  );
};
export default function TopbarSearch() {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const maxLength = 0;
  const [filter, setFilter] = useState("");
  const [isActive, setActive] = useState(false);
  const ref = useRef(null);
  const inputRef = useRef(null);

  const dropdownActive = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const searchActive = () => {
    if (filter.length > maxLength) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    searchActive();
  }, [filter]);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <>
      <div ref={ref} className="hidden xl:block relative ml-2">
        <div className="form-group w-56">
          <div className="input-group">
            {filter.length > maxLength && (
              <button
                type="button"
                className="button button-sm button-tertiary button-close"
                onClick={() => {
                  setFilter(""), searchActive(), focusInput()
                }}
              >
                <span className="icon icon-e-remove" />
              </button>
            )}
            <span
              className={`icon icon-right icon-zoom ${
                filter.length > maxLength ? "opacity-0" : ""
              }`}
            />
            <input
              id="filter"
              name="filter"
              type="text"
              value={filter}
              placeholder="Search for Clans and Players"
              autoComplete="off"
              onFocus={searchActive}
              className="input-sm input-secondary"
              ref={inputRef}
              onChange={(event) => setFilter(event.target.value)}
            />
          </div>
        </div>

        {isActive && (
          <div className="absolute top-full inset-x-0 rounded surface-ui-600">
            <ResultsList filter={filter} />
            <div className="p-2 border-t border-ui-500">
              <Link
                href={`/stryda/search?q=${filter}${prototype.getURLparams()}`}
              >
                <button
                  type="button"
                  className="button button-ghost button-sm w-full"
                >
                  <span>View all results</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="block xl:hidden rounded-full bg-ui-600 interactive">
        <Link href={`/prototype/search${prototype.getURLparams()}`}>
          <a className="button button-ghost rounded-full">
            <span className="icon icon-zoom text-ui-200" />
          </a>
        </Link>
      </div>
      {/* <div
        ref={ref}
        className={`dropdown dropdown-end ${
          isActive ? "dropdown-open" : "dropdown-closed"
        }`}
      >
        <div className="flex items-center rounded-full bg-ui-500 interactive my-1.5">
          <button
            type="button"
            onClick={dropdownActive}
          >
            <span className="icon icon-video" />
          </button>
        </div>

        <div
          tabIndex="1"
          className="dropdown-content bg-ui-500 w-[calc(100vw-100px)] sm:w-[420px] overflow-hidden rounded-xl shadow-xl"
        >
        </div>
      </div> */}
    </>
  );
}
