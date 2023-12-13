import React from "react";
import Structure from "../components/Structure";
import { usePrototypeData } from "@/contexts/prototype";
import TopbarHighlights from "../components/TopbarHighlights";

export default function DemoHighlightManager() {
  const prototype = usePrototypeData();
  return (
    <>
      <Structure title="Profile" hiddenUI={true}>
        <section className="max-w-lg mx-auto p-4 flex flex-col md:flex-row items-start justify-center">
          <div className="flex-none w-full md:w-72 surface rounded p-2 order-2 md:order-1">
            <div className="form-group">
              <div className="form-toggle form-full">
                <input
                  type="checkbox"
                  name="feed"
                  id="state-premium"
                  defaultChecked={prototype.isPremium}
                  onClick={() => prototype.togglePremium()}
                />
                <label htmlFor="state-premium">Premium State</label>
              </div>
            </div>
          </div>
          <div className="order-2 md:order-1 flex-1 flex md:justify-end md:items-start min-h-12">
            <TopbarHighlights isStatic={true} />
          </div>
        </section>
      </Structure>

    </>
  );
}
