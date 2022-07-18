import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Tabs</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center justify-center">
                  <ul className="tabs">
                    <li>
                      <a className="is-active">
                        <span>Brawls</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>How it works</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Rules</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Brawl history</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/Lez034bh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* with badges */}
      <div className="mb-12" id="with-badges">
        <h2 className="h3 mb-3">With badges</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center justify-center">
                  <ul className="tabs">
                    <li>
                      <a className="is-active">
                        <span data-badge="4">Brawls</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>How it works</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Rules</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span data-badge="1">Brawl history</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/zr378pqa/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rank tab */}
      <div className="mb-12" id="rank-tab">
        <h2 className="h3 mb-3">Rank tab</h2>

        <div className="rounded-lg text-center">
          <ul className="tabs tabs-rank">
            <li className="tab-bronze">
              <a className="is-active">
                <div>
                  <span className="icon text-4xl icon-rank-bronze"></span>
                  <span className="font-headings text-2xl uppercase italic">Bronze</span>
                </div>
              </a>
            </li>
            <li className="tab-silver">
              <a>
                <div>
                  <span className="icon text-4xl icon-rank-silver"></span>
                  <span className="font-headings text-2xl uppercase italic">Silver</span>
                </div>
                <figure className="avatar avatar-circle avatar-xs">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
                  </div>
                </figure>
              </a>
            </li>
            <li className="tab-gold">
              <a>
                <div>
                  <span className="icon text-4xl icon-rank-gold"></span>
                  <span className="font-headings text-2xl uppercase italic">Gold</span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className='mt-4'>
          <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/a614r7Ly/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
        </div>

      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
