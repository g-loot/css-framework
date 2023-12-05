import React, { useContext, useState, useRef, useEffect } from "react";
import ModalInfoBeforeYouPlay from "@/pages/stryda/ladders/modal-info-beforeyouplay";
import { UiContext } from "@/contexts/ui";

const Options = [
  {
    id: 0,
    match: 1,
    cost: 1,
    isDisabled: true,
  },
  {
    id: 1,
    match: 3,
    cost: 2,
    isFree: true,
  },
  {
    id: 2,
    match: 5,
    cost: 3,
  },
  {
    id: 3,
    match: 10,
    cost: 7,
  },
];

export default function MatchToggle(props) {
  const uiContext = useContext(UiContext);
  const defaultOptionId = props.id || 1;
  const isFreeEntry = props.isFreeEntry || false;
  const [selectedOption, setSelectedOption] = useState(defaultOptionId);

  const [isActive, setActive] = useState(false);
  const ref = useRef(null);

  const dropdownActive = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

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

  function openModalInfoBeforeYouPlay(number) {
    uiContext.openModal(
      <ModalInfoBeforeYouPlay incrementNumber={number}></ModalInfoBeforeYouPlay>
    );
  }

  function SwitchOption(id) {
    setSelectedOption(id);
    setActive(false);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div
        ref={ref}
        className={`dropdown w-full md:w-auto ${
          isActive ? "dropdown-open" : "dropdown-closed"
        }`}
      >
        <label
          tabIndex="1"
          className="item interactive border border-ui-500 bg-ui-600 py-0"
          onClick={dropdownActive}
        >
          <div className="item w-full md:w-44">
            <div className="item-body flex justify-between">
              <div className="item-title">
                {Options[selectedOption].match} match
                {Options[selectedOption].match > 1 && <>es</>}
              </div>
              <div className="flex gap-2 items-center text-gold-500">
                <span className="icon icon-20 icon-token" />
                <span>{Options[selectedOption].cost}</span>
              </div>
            </div>
            <div className="item-actions">
              <span className="icon icon-arrow-sm-down" />
            </div>
          </div>
        </label>
        <div tabIndex="1" className="dropdown-content w-52 p-1">
          <ul className="menu menu-rounded">
            {Options.map((item, itemIndex) => (
              <li
                key={item.id}
                className={`${item.isDisabled && "is-disabled"}`}
              >
                <a
                  tabIndex="1"
                  onClick={SwitchOption.bind(this, item.id)}
                  className={`flex justify-between ${
                    item.id === selectedOption && "is-active"
                  }`}
                >
                  <span>
                    {isFreeEntry && item.isFree ? (
                      <>FREE ENTRY</>
                    ) : (
                      <>
                        {item.match} match{item.match > 1 && <>s</>}
                      </>
                    )}
                  </span>
                  <span className="w-12 flex gap-2 items-center text-currency-2-500 pr-1">
                    <span className="icon icon-20 icon-token" />
                    <span>{item.cost}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="button-group button-currency">
        <button
          type="button"
          className="button button-md button-currency button-coin w-full md:w-auto"
          onClick={openModalInfoBeforeYouPlay.bind(this, 3)}
        >
          <div className="w-48">
            <span>
              Activate {Options[selectedOption].match} match
              {Options[selectedOption].match > 1 && <>es</>}
            </span>
          </div>
          <div>
            <span className="icon icon-token text-gold-500" />
            <span>{Options[selectedOption].cost}</span>
          </div>
        </button>
        <div
          ref={ref}
          className={`dropdown w-full md:w-auto ${
            isActive ? "dropdown-open" : "dropdown-closed"
          }`}
        >
          <label
            tabIndex="1"
            className="button button-tertiary rounded-full"
            onClick={dropdownActive}
          >
            <span className="icon icon-arrow-sm-down" />
          </label>
          <div tabIndex="1" className="dropdown-content w-52 p-1">
            <ul className="menu menu-rounded">
              {Options.map((item, itemIndex) => (
                <li
                  key={item.id}
                  className={`${item.isDisabled && "is-disabled"}`}
                >
                  <a
                    tabIndex="1"
                    onClick={SwitchOption.bind(this, item.id)}
                    className={`flex justify-between ${
                      item.id === selectedOption && "is-active"
                    }`}
                  >
                    <span>
                      {isFreeEntry && item.isFree ? (
                        <>FREE ENTRY</>
                      ) : (
                        <>
                          {item.match} match{item.match > 1 && <>s</>}
                        </>
                      )}
                    </span>
                    <span className="w-12 flex gap-2 items-center text-currency-2-500 pr-1">
                      <span className="icon icon-20 icon-token" />
                      <span>{item.cost}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
