import React, { Fragment, useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { VariablesContext } from "@/contexts/variables";
import Link from "next/link";

export default function WidgetAdShop(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const state = props.state || "normal";
  const length = 5;
  const [missions, setMissions] = useState([]);

  return (
    <>
      <div className="surface rounded text-center">
        <div className="flex items-baseline justify-between rounded-t bg-ui-800 border-b border-b-ui-700 px-3 py-2">
          <Link href={`/stryda/shop${prototype.getURLparams()}`}>
            <h2 className="text-base text-ui-100 interactive">Stryda shop</h2>
          </Link>
        </div>
        <div className="bg-ui-850 rounded-b pb-4">
          <Link href={`/stryda/shop${prototype.getURLparams()}`}>
            <button type="button" className="interactive">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1697444440/Stryda/illustrations/widget_ad_premium_img.webp"
                alt=""
              />
            </button>
          </Link>
          <Link href={`/stryda/shop${prototype.getURLparams()}`}>
            <button type="button" className="button button-secondary">
              <span>Explore the shop</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
