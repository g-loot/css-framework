import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    subtitle: "Nordic Clash",
    title: "Calling all VALORANT players!",
    description:
      "We’re excited to announce that we will partner with Riot Games as part of the official VALORANT OFF//SEASON. The tournament will be open to players of all skill levels, so call up your Clan mates and get ready to compete for a slice of the $20.000 prize pool!",
    image:
      "https://cdn.braze.eu/appboy/communication/marketing/content_cards_message_variations/images/64da3d6766c9ace9117ec1dc/e6cb6417609ca30f001a230ecf378f123867de18/original.png?1692024663",
    buttonLabel: "Learn more",
    buttonURL: "/prototype/profile/1?tab=achievements",
  },
  {
    subtitle: "Achievements",
    title: "The Stryda 5-stack Frenzy!",
    description:
      "Compete together with your Clan members in our first ever clan event, The Stryda 5-stack frenzy. Win competitive matches together to climb the leaderboard and show who's the best Clan on Stryda. Enroll, party up and collect those sweet wins!",
    image:
      "https://cdn.braze.eu/appboy/communication/marketing/content_cards_message_variations/images/64e754daa5e2a106b98b7a7a/56ae49ef288842c151ef248763259aa208bec092/original.png?1692883109",
    buttonLabel: "Let's go",
    buttonURL: "/prototype/profile/1?tab=achievements",
  },
  {
    subtitle: "Achievements",
    title: "Achieve more with Stryda!",
    description:
      "Complete Missions, compete in Ladders and build your Stryda player legacy, once achievement at a time! Fresh off the press, our new achievements system will allow our players to track their progress and immortalize their competitive feats on Stryda.",
    image:
      "https://cdn.braze.eu/appboy/communication/marketing/content_cards_message_variations/images/6478915e34c0421749a4ca6b/beb8d4963480ac5543e913fba1d757e23f5d22a7/original.png",
    buttonLabel: "See achievements",
    buttonURL: "/prototype/profile/1?tab=achievements",
  },
  {
    subtitle: "Clan Champ",
    title: "Will your clan be champions?",
    description:
      "This week only, join your fellow Stryda players in a fierce battle of the community’s own choosing! Get points for planting and defusing the spike in Swiftplay and fight your way to the top of the leaderboard. We've also lowered the token fee to make sure everyone can join in. Enjoy!",
    image:
      "https://cdn.braze.eu/appboy/communication/marketing/content_cards_message_variations/images/648087e9b4a0ec450f060990/d089f81484c554690a93d9348a20b41ac79728d7/original.png",
    buttonLabel: "Compete now",
    buttonURL: "/prototype/valorant/ladders?freeentry=true",
  },
  /*
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
    subtitle: "Power Play",
    title: "Earn more on this week's Power Play Ladders",
    description:
      "This week you can get 2x the usual rewards by competing on Ladders.",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674728003/Stryda/illustrations/Carousel_Power_Play.jpg",
    buttonLabel: "Learn more",
    buttonURL: "#",
  },
  */
];

const modes = {
  name: "carouselmode",
  code: "carouselmode",
  duration: 4,
};

export default function Carousel(props) {
  const isOnboarding =
    props.isOnboarding !== undefined ? props.isOnboarding : false;
  const isWithButtons =
    props.isWithButtons !== undefined ? props.isWithButtons : false;
  const size = props.size !== undefined ? props.size : "";
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
      <div className={`carousel ${size}`}>
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
                key={slideIndex}
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
                  key={itemIndex}
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
                          transform: `translateY(${percent}%)`,
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
                className="button button-sm rounded-full button-secondary"
                onClick={prevHandler.bind(this, slideNumber, slides.length)}
              >
                <span className="icon icon-ctrl-left" />
              </button>
              <button
                className="button button-sm rounded-full button-secondary"
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
