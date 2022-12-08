import React, { useContext, useEffect, useRef, useState } from "react";

import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";
import { useRouter } from "next/router";

export default function Slider(props) {
  const { query } = useRouter();
  const sliderWrapper = useRef(null);
  const sliderContainer = useRef(null);
  const [sliderContainerWidth, setSliderContainerWidth] = useState(0);
  const [sliderItemWidth, setSliderItemWidth] = useState(0);
  const bgColor = props.bgColor || "from-ui-900 via-ui-900 to-ui-900/0";

  const [slideLeft, setSlideLeft] = useState(0);

  const moveRight = () => {
    setSlideLeft((sliderWrapper.current.scrollLeft += sliderItemWidth));
  };

  const moveLeft = () => {
    setSlideLeft((sliderWrapper.current.scrollLeft -= sliderItemWidth));
  };

  const moveLeftFull = () => {
    setSlideLeft((sliderWrapper.current.scrollLeft -= 2000));
  };

  useEffect(() => {
    setSliderItemWidth(props.itemWidth);
  }, []);

  useEffect(() => {
    if (sliderContainer.current) {
      setSliderContainerWidth(sliderContainer.current.clientWidth);
    }
  }, [sliderContainer]);

  return (
    <div className="relative rounded-t-lg overflow-hidden hoverinside:opacity-100 hoverinside:translate-x-0 hoverinside:opacity-100">
      <div
        className={`hidden absolute z-10 left-0 inset-y-0 self-stretch items-center pr-12 bg-gradient-to-r ${bgColor} p-2 hoverinside transition-all duration-300 opacity-0 -translate-x-4 ${
          slideLeft > 0 ? "md:flex" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={moveLeft}
          className={`button button-lg button-ghost rounded-full`}
        >
          <span className="text-3xl text-ui-100 icon icon-ctrl-left" />
        </button>
      </div>
      <div
        className={`hidden absolute z-10 right-0 inset-y-0 self-stretch items-center pl-12 bg-gradient-to-l ${bgColor} p-2 hoverinside transition-all duration-300 opacity-0 translate-x-4  ${
          slideLeft < sliderContainerWidth ? "md:flex" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={moveRight}
          className={`button button-lg button-ghost rounded-full`}
        >
          <span className="text-3xl text-ui-100 icon icon-ctrl-right" />
        </button>
      </div>

      <div
        ref={sliderWrapper}
        className="relative z-0 overflow-x-auto scrollbar-hidden last:after:content-[''] last:after:w-24 last:after:block py-4 px-4 md:px-0"
      >
        <div className="flex gap-4 items-stretch" ref={sliderContainer}>
          {props.children}
          <div className="min-w-xs w-20"></div>
        </div>
      </div>
    </div>
  );
}