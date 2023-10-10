import { useEffect, useState, useRef, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";

export default function TopbarSidebarSearch() {
  const router = useRouter();
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      router.push(`/stryda/search?q=${filter}`);
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
      <div className="form-group w-full">
        <div className="input-group">
          {filter.length > maxLength && (
            <button
              type="button"
              className="button button-sm button-tertiary button-close"
              onClick={() => {
                setFilter(""), searchActive(), focusInput();
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
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </>
  );
}
