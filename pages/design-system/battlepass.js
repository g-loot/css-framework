import React, { useContext, useState, useEffect } from "react";

import ModalClaimLadderRewards from "../prototype/home/modal-claim-dailyrewards";
import ModalContainer from "@/components/Modal/ModalContainer";
import { UiContext } from "@/contexts/ui";
import { VariablesContext } from "@/contexts/variables";
import { getLayout } from "@/components/DesignSystem/DSLayout";

import { DataBattlepass } from "@/mock-data/data-battlepass";
import { DataBattlepassRewards } from "@/mock-data/data-battlepass";
import Battlepass from "@/components/BattlePass/BattlePass";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const uiContext = useContext(UiContext);

  useEffect(() => {
    setcurrentStep(getBattlepassByID(0).currentStep);
    setactiveStep(getBattlepassByID(0).currentStep);
  }, []);

  const getBattlepassByID = (id) => {
    return DataBattlepass.find((battlepasses) => {
      return battlepasses.id === parseInt(id);
    });
  };

  return (
    <>
      <h1 className="mb-2">Battlepass</h1>

      {/* full */}
      <div className="mb-12">
        <Anchor title="Full" />
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <Battlepass />

              <div className="flex-1 hidden">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/c1nbf68L/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* medium */}
      <div className="mb-12">
        <Anchor title="Medium" />
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <Battlepass size="battlepass-md" />

              <div className="flex-1 hidden">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/c1nbf68L/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* with current */}
      <div className="mb-12">
        <Anchor title="With current product" />
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <h3 className="h4">Medium</h3>
              <Battlepass id={1} size="battlepass-md" />
              <h3 className="h4">Full</h3>
              <Battlepass id={1} />

              <div className="flex-1 hidden">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/c1nbf68L/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
