import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import DigitalClock from "./DigitalClock";

const slides = [
  {
    subtitle: "Free entry",
    title: "Compete for free!",
    description:
      "Brawl is our G-Loot Special! You compete against other G-Loot players to climb the leaderboard, get on top and win crazy rewards! Interested? Entry Brawl is on us! ",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1669283599/Marketing/2022_prototype/Carousel_Free_entry_1.jpg",
    buttonLabel: "Compete now",
    buttonURL: "/prototype/valorant/brawls?freeentry=true",
  },
  {
    subtitle: "G-Loot",
    title: "Who's your top VALORANT agent?",
    description:
      "Check your damage/round, K/D ratio, headshots percentage, and more, for your last 20 matches. Plus, specific stats for your most played agents",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1669901630/Marketing/2022_VALORANT_agent_generator/images/Carousel_Valorant_Stats.jpg",
    buttonLabel: "Check it out",
    buttonURL: "/prototype/valorant/stats",
  },
  {
    subtitle: "Shop",
    title: "Apex Legends: Fade, the Phasing Punisher",
    description:
      "Apex Legends Mobile is finally here, and it brings a new, mobile-exclusive Legend to the fold.",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1654158114/Marketing/2022_prototype/DummyContent/carousel-item-apexlegends-fade.jpg",
    buttonLabel: "Read the blog",
    buttonExternal: true,
    buttonURL: "#",
  },
  {
    subtitle: "Rewards",
    title: "Earn more on this week's Brawls",
    description:
      "This week you can get 2x the usual rewards by competing on Brawls.",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1662645308/Marketing/2022_prototype/Illustrations/token_coin_piles.webp",
    buttonLabel: "Learn more",
    buttonURL: "#",
  },
];

const modes = {
  name: "carouselmode",
  code: "carouselmode",
  duration: 5,
};

export default function Carousel(props) {
  const isOnboarding =
    props.isOnboarding !== undefined ? props.isOnboarding : false;
  const isWithButtons =
    props.isWithButtons !== undefined ? props.isWithButtons : false;
  const [slideNumber, setSlideNumber] = useState(0);
  const [percent, setPercent] = useState(0);
  const slideDuration = 3000;
  const [date, setDate] = useState(new Date());

  const [fixedDate, setFixedDate] = useState(date);
  const [mode, setMode] = useState(modes);
  const [pause, setPause] = useState(false);
  const [standby, setStandby] = useState(false);

  const [duration, setDuration] = useState(slideDuration);
  const [currentMode, setCurrentMode] = useState(mode);

  useEffect(() => {
    setPercent(
      Math.floor((-(100 / (slideDuration / 1000)) * duration) / 1000).toString()
    );
  }, [duration]);

  function slideHandler(varTarget) {
    resetCoundown();
    setSlideNumber(varTarget);
  }

  function prevHandler(varTarget, max) {
    resetCoundown();
    if (varTarget === 0) {
      setSlideNumber((varTarget = max - 1));
    } else {
      setSlideNumber(varTarget - 1);
    }
  }

  function nextHandler(varTarget, max) {
    resetCoundown();
    if (varTarget === max - 1) {
      setSlideNumber((varTarget = 0));
    } else {
      setSlideNumber(varTarget + 1);
    }
  }

  function resetCoundown() {
    setDuration(slideDuration);
  }

  let countdown;
  countdown = useInterval(
    () => {
      let minutes, seconds;

      setDuration((duration) => duration - 1);
      seconds = parseInt(duration, 10);
      if (standby) {
        setDuration(slideDuration * 60 - 1);
      } else {
        if (duration < 0) {
          clearInterval(countdown);
        }
      }
    },
    !pause && duration >= 0 ? 1000 : null,
    mode,
    duration,
    standby,
    currentMode
  );

  function useInterval(callback, delay, mode, duration) {
    const savedCallback = useRef();
    let id;

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      if (standby) {
        setDuration(slideDuration);
        setCurrentMode(mode);
      }
      function tick() {
        savedCallback.current();
      }
      if (delay !== null && !standby) {
        id = setInterval(tick, delay / 1000);
        return () => clearInterval(id);
      } else if (!pause) {
        nextHandler(slideNumber, slides.length);
      }
    }, [delay, mode, duration, standby, currentMode]);
  }

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-slides"
          onMouseEnter={() => {
            setPause(true);
          }}
          onMouseLeave={() => {
            if (pause) {
              setPause(false);
            } else {
              setStandby(false);
              setFixedDate(date);
            }
          }}
        >
          {slides.map((slide, slideIndex) => (
            <>
              <div
                className={`carousel-slide ${
                  slideNumber === slideIndex ? "is-active" : ""
                }`}
                key={slide}
              >
                <div className="carousel-image">
                  <span style={{ backgroundImage: `url(${slide.image})` }} />
                </div>
                <div className="carousel-body">
                  <div>
                    <h2 className="h3 text-ui-100">{slide.title}</h2>
                    <p className="mb-5 mt-3 text-ui-200">{slide.description}</p>
                    <Link href={slide.buttonURL}>
                      <button type="button" className="button button-primary">
                        <span>{slide.buttonLabel}</span>
                        {slide.buttonExternal && (
                          <>
                            <span className="icon icon-box-arrow-top-right" />
                          </>
                        )}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="carousel-backdrop">
                  <span style={{ backgroundImage: `url(${slide.image})` }} />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="carousel-nav">
          <ul className="carousel-list">
            {slides.map((item, itemIndex) => (
              <>
                <li
                  key={item}
                  className={`${slideNumber === itemIndex ? "is-active" : ""}`}
                >
                  <button
                    type="button"
                    onClick={slideHandler.bind(this, itemIndex)}
                  >
                    {isOnboarding && <span>Step {itemIndex + 1}</span>}
                    {!isOnboarding && (
                      <>
                        <span>{item.subtitle}</span>
                      </>
                    )}
                    <div>{item.title}</div>
                    <i>
                      <span
                        style={{
                          transform: `translateY(${percent}%) skewY(-30deg)`,
                        }}
                      />
                    </i>
                  </button>
                </li>
              </>
            ))}
          </ul>
          {isWithButtons && (
            <div className="carousel-control">
              <button
                className="button button-secondary"
                onClick={prevHandler.bind(this, slideNumber, slides.length)}
              >
                <span className="icon icon-ctrl-left" />
              </button>
              <button
                className="button button-secondary"
                onClick={nextHandler.bind(this, slideNumber, slides.length)}
              >
                <span className="icon icon-ctrl-right" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
