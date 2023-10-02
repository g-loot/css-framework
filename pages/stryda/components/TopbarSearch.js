import { useEffect, useState, useRef, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";

export default function TopbarSearch() {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const [filter, setFilter] = useState("");

  return (
    <>
      <div className="form-group w-56 ml-2">
        <div className="input-group">
          <span className="icon icon-right icon-zoom" />
          <input
            id="filter"
            name="filter"
            type="text"
            value={filter}
            placeholder="Search for Clans and Players"
            autoComplete="off"
            className="input-sm input-secondary"
            onChange={(event) => setFilter(event.target.value)}
          />
        </div>

        {filter.length > 1 && (
          <div className="absolute top-0 left-0 w-52 rounded h-36">

          </div>
        )}
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
