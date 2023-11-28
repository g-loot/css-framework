import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Radio, checkbox, toggle</h1>

      {/* Radio */}
      <div className="mb-12">
        <Anchor title="Radio" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <div className="form-radio">
                        <input
                          type="radio"
                          name="gender"
                          id="genderMale"
                          defaultChecked
                        />
                        <label htmlFor="genderMale">Male</label>
                      </div>
                      <div className="form-radio">
                        <input type="radio" name="gender" id="genderFemale" />
                        <label htmlFor="genderFemale">Female</label>
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
                  src="//jsfiddle.net/augustin_hiebel/c3jsr8pe/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle */}
      <div className="mb-12">
        <Anchor title="Toggle" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <div className="form-toggle">
                        <input
                          type="checkbox"
                          name="notification"
                          id="notificationPush"
                        />
                        <label htmlFor="notificationPush">
                          Send me notifications with news and tips
                        </label>
                      </div>
                      <div className="form-toggle">
                        <input
                          type="checkbox"
                          name="notification"
                          id="notificationEmail"
                        />
                        <label htmlFor="notificationEmail">
                          Send me emails with news and tips
                        </label>
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
                  src="//jsfiddle.net/augustin_hiebel/fvdhjztw/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkbox */}
      <div className="mb-12">
        <Anchor title="Checkbox" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <div className="form-checkbox">
                        <input type="checkbox" name="policy" id="policyAgree" />
                        <label htmlFor="policyAgree">
                          I agree with your policy
                        </label>
                      </div>
                      <div className="form-checkbox">
                        <input
                          type="checkbox"
                          name="policy"
                          id="policyConfirm"
                        />
                        <label htmlFor="policyConfirm">
                          I confirm that I have read the policity
                        </label>
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
                  src="//jsfiddle.net/augustin_hiebel/19ef3ymo/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation */}
      <div className="mb-12">
        <Anchor title="Validation" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div
                      className="form-group"
                      data-error="Please choose an option."
                    >
                      <div className="form-radio">
                        <input
                          type="radio"
                          name="input-error"
                          id="inputError"
                        />
                        <label htmlFor="inputError">Male</label>
                      </div>
                    </div>
                    <div
                      className="form-group"
                      data-success="Please choose an option."
                    >
                      <div className="form-toggle">
                        <input
                          type="checkbox"
                          name="input-success"
                          id="inputSuccess"
                        />
                        <label htmlFor="inputSuccess">
                          I agree with your policy
                        </label>
                      </div>
                    </div>
                    <div
                      className="form-group"
                      data-attention="Please choose an option."
                    >
                      <div className="form-checkbox">
                        <input
                          type="checkbox"
                          name="input-attention"
                          id="inputAttention"
                        />
                        <label htmlFor="inputAttention">
                          I confirm that I have read the policity
                        </label>
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
                  src="//jsfiddle.net/augustin_hiebel/0w3njd4t/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disabled */}
      <div className="mb-12">
        <Anchor title="Disabled" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <div className="form-radio is-disabled">
                        <input
                          type="radio"
                          name="radio"
                          id="radioDisabled"
                          disabled={true}
                        />
                        <label htmlFor="radioDisabled">Male</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-toggle is-disabled">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="toggleDisabled"
                          disabled={true}
                        />
                        <label htmlFor="toggleDisabled">
                          I agree with your policy
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-checkbox is-disabled">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="checkboxDisabled"
                          disabled={true}
                        />
                        <label htmlFor="checkboxDisabled">
                          I confirm that I have read the policity
                        </label>
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
                  src="//jsfiddle.net/augustin_hiebel/1j2ueya3/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Align to end */}
      <div className="mb-12">
        <Anchor title="Align to end" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-radio form-end">
                      <input type="radio" name="radio" id="radioAlignEnd" />
                      <label htmlFor="radioAlignEnd">Male</label>
                    </div>

                    <div className="form-toggle form-end">
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggleAlignEnd"
                      />
                      <label htmlFor="toggleAlignEnd">
                        I agree with your policy
                      </label>
                    </div>

                    <div className="form-checkbox form-end">
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="checkboxAlignEnd"
                      />
                      <label htmlFor="checkboxAlignEnd">
                        I confirm that I have read the policity
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/8cpyrb9v/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full width */}
      <div className="mb-12">
        <Anchor title="Full width" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-toggle form-full">
                      <input type="checkbox" name="radioFullWidthOn" id="radioFullWidthOn" />
                      <label htmlFor="radioFullWidthOn">
                        <span>Desktop notification</span>
                      </label>
                    </div>
                    <div className="form-toggle form-full">
                      <input type="checkbox" name="radioFullWidthOff" id="radioFullWidthOff" />
                      <label htmlFor="radioFullWidthOff">
                        <span>Run Stryda on statup</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/4gxvp8r2/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With indicator */}
      <div className="mb-12">
        <Anchor title="With indicator" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-toggle form-full">
                      <input type="checkbox" name="withIndicator" id="withIndicator" />
                      <label htmlFor="withIndicator">
                        <span>Desktop notification</span>
                        <span className="form-indicator" />
                      </label>
                    </div>
                    <div className="form-toggle form-full">
                      <input type="checkbox" name="withIndicatorCustom" id="withIndicatorCustom" />
                      <label htmlFor="withIndicatorCustom">
                        <span>Run Stryda on statup</span>
                        <span className="form-indicator" data-on="Run Stryda on statup"  data-off="Do not Stryda on statup" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/v2gnp3ws/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* As list */}
      <div className="mb-12">
        <Anchor title="As list" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <ul>
                      <li className="form-radio">
                        <input type="radio" name="radio" id="radioAsList" />
                        <label htmlFor="radioAsList">Male</label>
                      </li>
                      <li className="form-toggle">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="toggleAsList"
                        />
                        <label htmlFor="toggleAsList">
                          I agree with your policy
                        </label>
                      </li>
                      <li className="form-checkbox">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="checkboxAsList"
                        />
                        <label htmlFor="checkboxAsList">
                          I confirm that I have read the policity
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/r4vhztyq/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single element */}
      <div className="mb-12">
        <Anchor title="Single element" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="form-radio">
                        <input
                          type="radio"
                          name="radioYesNo"
                          id="radioSingleYes"
                        />
                        <label htmlFor="radioSingleYes" />
                      </div>
                      <div className="form-radio">
                        <input
                          type="radio"
                          name="radioYesNo"
                          id="radioSingleNo"
                        />
                        <label htmlFor="radioSingleNo" />
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
                  src="//jsfiddle.net/augustin_hiebel/gaze7rfm/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With image */}
      <div className="mb-12">
        <Anchor title="With image" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group flex flex-wrap justify-center gap-4">
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-1" />
                        <span className="sr-only">Valorant</span>
                        <div
                          className="w-24 h-32 lg:w-32 lg:h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644677000/Marketing/202109_gloot2/Game_cover_Valorant.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-2" />
                        <span className="sr-only">Apex Legends</span>
                        <div
                          className="w-24 h-32 lg:w-32 lg:h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Apex_Legends.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-3" />
                        <span className="sr-only">PUBG: BATTLEGROUNDS</span>
                        <div
                          className="w-24 h-32 lg:w-32 lg:h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_PUBG_Battlegrounds.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-4" />
                        <span className="sr-only">CSGO</span>
                        <div
                          className="w-24 h-32 lg:w-32 lg:h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_CSGO.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-5" />
                        <span className="sr-only">Rocket League</span>
                        <div
                          className="w-24 h-32 lg:w-32 lg:h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Rocket_League.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-6" />
                        <span className="sr-only">League of Legends</span>
                        <div
                          className="w-24 h-32 lg:w-32 lg:h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1645621586/Marketing/202109_gloot2/Game_cover_League_of_Legends.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-7" />
                        <span className="sr-only">Dota 2</span>
                        <div
                          className="w-24 h-32 lg:w-32 lg:h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Dota_2.jpg)`,
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="500"
                  src="//jsfiddle.net/augustin_hiebel/ho95v46t/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-12">
        <Anchor title="Sizes" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-8">
                <div className="w-full flex gap-4 items-start">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight pt-1">
                    Small
                  </div>
                  <div className="flex-1">
                    <div className="flex-1 space-y-4">
                      <div className="form-group">
                        <div className="form-sm form-radio">
                          <input type="radio" name="radioSM" id="radioSM" />
                          <label htmlFor="radioSM">Male</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-sm form-toggle">
                          <input
                            type="checkbox"
                            name="toggleSM"
                            id="toggleSM"
                          />
                          <label htmlFor="toggleSM">
                            I agree with your policy
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-sm form-checkbox">
                          <input
                            type="checkbox"
                            name="checkboxSM"
                            id="checkboxSM"
                          />
                          <label htmlFor="checkboxSM">
                            I confirm that I have read the policity
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-start">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight pt-1">
                    Extra small
                  </div>
                  <div className="flex-1">
                    <div className="flex-1 space-y-4">
                      <div className="form-group">
                        <div className="form-xs form-radio">
                          <input type="radio" name="radioXS" id="radioXS" />
                          <label htmlFor="radioXS">Male</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-xs form-toggle">
                          <input
                            type="checkbox"
                            name="toggleXS"
                            id="toggleXS"
                          />
                          <label htmlFor="toggleXS">
                            I agree with your policy
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-xs form-checkbox">
                          <input
                            type="checkbox"
                            name="checkboxXS"
                            id="checkboxXS"
                          />
                          <label htmlFor="checkboxXS">
                            I confirm that I have read the policity
                          </label>
                        </div>
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
                  src="//jsfiddle.net/augustin_hiebel/17vd38ew/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
