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
        className={`hidden md:flex absolute z-10 left-0 inset-y-0 self-stretch items-center bg-gradient-to-r ${bgColor} p-2 hoverinside transition-all duration-300 opacity-0 -translate-x-4`}
      >
        <button
          type="button"
          onClick={moveLeft}
          className={`button button-lg button-tertiary rounded-full  ${
            slideLeft > 0 ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          <span className="icon icon-ctrl-left"></span>
        </button>
      </div>
      <div
        className={`hidden md:flex absolute z-10 right-0 inset-y-0 self-stretch items-center bg-gradient-to-l ${bgColor} p-2 hoverinside transition-all duration-300 opacity-0 translate-x-4`}
      >
        <button
          type="button"
          onClick={moveRight}
          className={`button button-lg button-tertiary rounded-full ${
            slideLeft < sliderContainerWidth
              ? ""
              : "opacity-0 pointer-events-none"
          }`}
        >
          <span className="icon icon-ctrl-right"></span>
        </button>
      </div>

      <div
        ref={sliderWrapper}
        className="overflow-x-auto scrollbar-hidden last:after:content-[''] last:after:w-24 last:after:block py-4"
      >
        <div className="flex gap-4" ref={sliderContainer}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
