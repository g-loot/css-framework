import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width }) => {
  return (
    <li className="carousel-slide" style={{ width: width }}>
      {children}
    </li>
  );
};

const CarouselSingle = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlay = props.autoPlay || false;
  const hasNav = props.hasNav || false;
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(props.children) - 1;
    } else if (newIndex >= React.Children.count(props.children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    setPaused(!autoPlay);
  }, [autoPlay]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel-single"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(!autoPlay)}
    >
      <div className="carousel-slides-container">
        <ul
          className="carousel-slides"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </ul>
      </div>
      <div className="carousel-control">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          type="button"
          className="button button-ghost button-sm rounded-full"
        >
          <span className="icon icon-ctrl-left"></span>
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          type="button"
          className="button button-ghost button-sm rounded-full"
        >
          <span className="icon icon-ctrl-right"></span>
        </button>
      </div>
      {hasNav && (
        <ul className="carousel-nav">
          {React.Children.map(props.children, (child, index) => {
            return (
              <li key={index}>
                <button
                  className={`${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <span>{index + 1}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CarouselSingle;
