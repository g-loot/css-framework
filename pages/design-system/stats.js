import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Stats</h1>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 flex">
                <div className="stats surface">
                  <div className="stat">
                    <div className="stat-body">
                      <div className="stat-label">Total Ladder Played</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-description">
                        12% more than last month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/s5fcm28d/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="With image or icon" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 flex">
                <div className="stats surface">
                  <div className="stat">
                    <div className="stat-body">
                      <div className="stat-label">Total missions played</div>
                      <div className="stat-value">
                        95<small>k</small>
                      </div>
                      <div className="stat-description text-interaction-500">
                        ↗︎ 12% more than last month
                      </div>
                    </div>
                    <div className="stat-image">
                      <span className="icon text-5xl text-ui-400 icon-missions" />
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-body">
                      <div className="stat-value">
                        85<small>%</small>
                      </div>
                      <div className="stat-label">Missions completed</div>
                      <div className="stat-description text-error-500">
                        1 mission remaining
                      </div>
                    </div>
                    <div className="stat-image">
                      <div className="avatar avatar-simple avatar-squircle avatar-sm">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/Lg50owvj/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
