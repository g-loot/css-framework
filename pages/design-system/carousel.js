import React, { useEffect, useState } from "react";

import Carousel from "../../components/Carousel/Carousel";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  const slides = [
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo diam quis ante mollis, ac elementum dolor elementum. In vel consectetur tortor, nec porta lectus.",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg",
      buttonLabel: "Label",
      buttonURL: "#",
    },
    {
      title: "Fusce a diam accumsan",
      description:
        "Aliquam erat volutpat. Aenean iaculis, nunc molestie interdum consequat, urna tortor scelerisque ante, vel commodo mauris lectus sed massa.",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-apexlegends_1.jpg",
      buttonLabel: "Label",
      buttonURL: "#",
    },
    {
      title: "Aenean at libero ligula",
      description:
        "Aenean at libero ligula. Sed gravida dapibus lectus nec finibus. Morbi egestas vitae tellus eget egestas. Donec scelerisque gravida metus, non pulvinar augue finibus eu. ",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-valorant_1.jpg",
      buttonLabel: "Label",
      buttonURL: "#",
    },
  ];

  const slidesOnboarding = [
    {
      title: "Create a Stryda account",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo diam quis ante mollis, ac elementum dolor elementum. ",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1654611769/Marketing/2022_prototype/DummyContent/carouselonboarding-item-step1.jpg",
      buttonLabel: "Create an account",
      buttonURL: "#",
    },
    {
      title: "Install the Tracker",
      description:
        "Aliquam erat volutpat. Aenean iaculis, nunc molestie interdum consequat, urna tortor scelerisque ante, vel commodo mauris lectus sed massa.",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1654611769/Marketing/2022_prototype/DummyContent/carouselonboarding-item-step2.jpg",
      buttonLabel: "Download the tracker",
      buttonURL: "#",
    },
    {
      title: "Complete your first mission",
      description:
        "Morbi egestas vitae tellus eget egestas. Donec scelerisque gravida metus, non pulvinar augue finibus eu. ",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1654611769/Marketing/2022_prototype/DummyContent/carouselonboarding-item-step3.jpg",
      buttonLabel: "Browse Missions",
      buttonURL: "#",
    },
    {
      title: "Play in a Ladder",
      description:
        "Aenean at libero ligula. Sed gravida dapibus lectus nec finibus. Morbi egestas vitae tellus eget egestas.",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1654611769/Marketing/2022_prototype/DummyContent/carouselonboarding-item-step4.jpg",
      buttonLabel: "Browse Ladders",
      buttonURL: "#",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [slideOnboardingNumber, setSlideOnboardingNumber] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      //nextHandler(slideNumber, slides.length)
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function slideHandler(varTarget) {
    setSlideNumber(varTarget);
  }
  function prevHandler(varTarget, max) {
    if (varTarget === 0) {
      setSlideNumber((varTarget = max - 1));
    } else {
      setSlideNumber(varTarget - 1);
    }
  }
  function nextHandler(varTarget, max) {
    if (varTarget === max - 1) {
      setSlideNumber((varTarget = 0));
    } else {
      setSlideNumber(varTarget + 1);
    }
  }

  function slideOnboardingHandler(varTarget) {
    setSlideOnboardingNumber(varTarget);
  }

  return (
    <>
      <h1 className="mb-2">Carousel</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <h2 className="h3 mb-3">Structure</h2>
                <section className="surface sm:rounded-lg overflow-hidden mb-8">
                  <Carousel />
                </section>

                {/*
              <div className='surface rounded-xl overflow-hidden carousel'>
                <div className='carousel-slides'>

                  {slides.map((slide, slideIndex) => (
                    <>
                      <div className={`carousel-slide ${slideNumber === slideIndex ? 'is-active' : ''}`} key={slideIndex}>
                        <div className='carousel-image'>
                          <span style={{ backgroundImage: `url(${slide.image})`}}/>
                        </div>
                        <div className='carousel-body'>
                          <div>
                            <h2 className='h3'>
                              {slide.title}
                            </h2>
                            <p className='mb-5 mt-2'>
                              {slide.description}
                            </p>
                            <button className='button button-primary'>
                              <span>{slide.buttonLabel}</span>
                            </button>
                          </div>
                        </div>
                        <div className='carousel-backdrop'>
                          <span style={{ backgroundImage: `url(${slide.image})`}}/>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className='carousel-nav'>
                  <ul className='carousel-list'>
                    {slides.map((item, itemIndex) => (
                      <>
                        <li key={itemIndex} className={`${slideNumber === itemIndex ? 'is-active' : ''}`}>
                          <a onClick={slideHandler.bind(this, itemIndex)} className='item'>
                            <div className='item-body'>
                            <span className='text-xs text-ui-300'>
                                Step {itemIndex + 1}
                              </span>
                              <div className='item-title'>
                                {item.title}
                              </div>
                            </div>
                            <i/>
                          </a>
                        </li>
                      </>
                    ))}
                  </ul>
                  <div className='carousel-control'>
                    <button className='button button-secondary' onClick={prevHandler.bind(this, slideNumber, slides.length)}>
                      <span className='icon icon-ctrl-left'/>
                    </button>
                    <button className='button button-secondary' onClick={nextHandler.bind(this, slideNumber, slides.length)}>
                      <span className='icon icon-ctrl-right'/>
                    </button>
                  </div>
                </div>
                

              </div>
                    */}
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="400"
                  src="//jsfiddle.net/augustin_hiebel/kjq7t1rd/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small */}
      <div className="mb-12" id="small">
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <h2 className="h3 mb-3">Small</h2>
                <section className="surface sm:rounded-lg overflow-hidden mb-8">
                  <Carousel size="carousel-sm" />
                </section>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="400"
                  src="//jsfiddle.net/augustin_hiebel/kjq7t1rd/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With buttons */}
      <div className="mb-12" id="with-buttons">
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <h2 className="h3 mb-3">With buttons</h2>
                <section className="surface sm:rounded-lg overflow-hidden mb-8">
                  <Carousel isWithButtons={true} />
                </section>

                {/*
              <div className='surface rounded-xl overflow-hidden carousel'>
                <div className='carousel-slides'>

                  {slides.map((slide, slideIndex) => (
                    <>
                      <div className={`carousel-slide ${slideNumber === slideIndex ? 'is-active' : ''}`} key={slideIndex}>
                        <div className='carousel-image'>
                          <span style={{ backgroundImage: `url(${slide.image})`}}/>
                        </div>
                        <div className='carousel-body'>
                          <div>
                            <h2 className='h3'>
                              {slide.title}
                            </h2>
                            <p className='mb-5 mt-2'>
                              {slide.description}
                            </p>
                            <button className='button button-primary'>
                              <span>{slide.buttonLabel}</span>
                            </button>
                          </div>
                        </div>
                        <div className='carousel-backdrop'>
                          <span style={{ backgroundImage: `url(${slide.image})`}}/>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className='carousel-nav'>
                  <ul className='carousel-list'>
                    {slides.map((item, itemIndex) => (
                      <>
                        <li key={itemIndex} className={`${slideNumber === itemIndex ? 'is-active' : ''}`}>
                          <a onClick={slideHandler.bind(this, itemIndex)} className='item'>
                            <div className='item-body'>
                            <span className='text-xs text-ui-300'>
                                Step {itemIndex + 1}
                              </span>
                              <div className='item-title'>
                                {item.title}
                              </div>
                            </div>
                            <i/>
                          </a>
                        </li>
                      </>
                    ))}
                  </ul>
                  <div className='carousel-control'>
                    <button className='button button-secondary' onClick={prevHandler.bind(this, slideNumber, slides.length)}>
                      <span className='icon icon-ctrl-left'/>
                    </button>
                    <button className='button button-secondary' onClick={nextHandler.bind(this, slideNumber, slides.length)}>
                      <span className='icon icon-ctrl-right'/>
                    </button>
                  </div>
                </div>
                

              </div>
                    */}
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="400"
                  src="//jsfiddle.net/augustin_hiebel/kjq7t1rd/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel step (onboarding) */}
      <div className="mb-12" id="step">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <h2 className="h3 mb-3">
                  Carousel step{" "}
                  <small className="text-ui-300">onboarding</small>
                </h2>

                <div className="surface rounded-xl overflow-hidden carousel carousel-step">
                  <div className="carousel-slides">
                    {slidesOnboarding.map(
                      (slideOnboarding, slideOnboardingIndex) => (
                        <>
                          <div
                            className={`carousel-slide ${
                              slideOnboardingNumber === slideOnboardingIndex
                                ? "is-active"
                                : ""
                            }`}
                            key={slideOnboardingIndex}
                          >
                            <div className="carousel-image">
                              <span
                                style={{
                                  backgroundImage: `url(${slideOnboarding.image})`,
                                }}
                              />
                            </div>
                            <div className="carousel-body">
                              <div>
                                <h2 className="h3">{slideOnboarding.title}</h2>
                                <div className="mt-3 text-sm uppercase text-ui-300">
                                  {slideOnboardingNumber > slideOnboardingIndex
                                    ? "Completed"
                                    : "Not completed"}
                                </div>
                                <p className="mb-5 mt-2">
                                  {slideOnboarding.description}
                                </p>
                                <button className="button button-primary">
                                  <span>{slideOnboarding.buttonLabel}</span>
                                </button>
                              </div>
                            </div>
                            <div className="carousel-backdrop">
                              <span
                                style={{
                                  backgroundImage: `url(${slideOnboarding.image})`,
                                }}
                              />
                            </div>
                          </div>
                        </>
                      )
                    )}
                  </div>
                  <div className="carousel-nav">
                    <ul className="carousel-list">
                      {slidesOnboarding.map(
                        (slideOnboarding, slideOnboardingIndex) => (
                          <>
                            <li
                              key={slideOnboardingIndex}
                              className={`${
                                slideOnboardingNumber === slideOnboardingIndex
                                  ? "is-active"
                                  : ""
                              }`}
                            >
                              <a
                                onClick={slideOnboardingHandler.bind(
                                  this,
                                  slideOnboardingIndex
                                )}
                                className="item"
                              >
                                <div className="item-body">
                                  <span className="text-xs text-ui-300">
                                    Step {slideOnboardingIndex + 1}
                                  </span>
                                  <div className="item-title">
                                    {slideOnboarding.title}
                                  </div>
                                </div>
                                <div className="item-actions">
                                  <div
                                    className={`checkmark checkmark-sm ${
                                      slideOnboardingNumber >
                                      slideOnboardingIndex
                                        ? "is-active"
                                        : ""
                                    }`}
                                  >
                                    <i />
                                  </div>
                                </div>
                                <i />
                              </a>
                            </li>
                          </>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="400"
                  src="//jsfiddle.net/augustin_hiebel/jkyfqgm1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
