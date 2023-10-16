import React, { Fragment, useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { VariablesContext } from "@/contexts/variables";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";
import CarouselSingle, {
  CarouselItem,
} from "@/components/Carousel/CarouselSingle";
import { dataPremiumBenefits } from "@/mock-data/data-premium";
import Link from "next/link";

export default function WidgetAdPremium(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const state = props.state || "normal";
  const length = 5;
  const [missions, setMissions] = useState([]);

  return (
    <>
      <div className="surface surface-dimmed rounded text-center">
        <Link href={`/stryda/premium${prototype.getURLparams()}`}>
          <PremiumLogo
            src="https://res.cloudinary.com/gloot/image/upload/v1684315905/Stryda/logos/stryda-premium-logo-main-white.svg"
            width="auto"
            height="auto"
            className="h-14 my-4 mx-auto interactive"
          />
        </Link>

        <CarouselSingle autoPlay={true} hasNav={true}>
          {dataPremiumBenefits.map((item, itemIndex) => (
            <CarouselItem key={itemIndex}>
              <div className="text-center px-4">
                <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                  <button type="button" className="px-4 interactive">
                    <img
                      className="mx-auto block"
                      src={item.image}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </button>
                </Link>
                <p className="text-ui-100 px-2 mx-auto whitespace-normal leading-tight">
                  {item.name}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselSingle>
        <div className="my-4 px-4">
          <Link href={`/stryda/premium${prototype.getURLparams()}`}>
            <button type="button" className="button button-premium is-shining">
              <span>Get Premium</span>
              <span className="icon icon-crown" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
