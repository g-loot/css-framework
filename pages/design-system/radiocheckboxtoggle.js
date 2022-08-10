import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Radio, checkbox, toggle</h1>

      {/* Radio */}
      <div className="mb-12" id="radio">
        <h2 className="h3 mb-3">Radio</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label className="form-radio">
                        <input type="radio" name="gender" checked />
                        <i className="form-icon" /> Male
                      </label>
                      <label className="form-radio">
                        <input type="radio" name="gender" />
                        <i className="form-icon" /> Female
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
                  src="//jsfiddle.net/augustin_hiebel/c3jsr8pe/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle */}
      <div className="mb-12" id="toggle">
        <h2 className="h3 mb-3">Toggle</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label className="form-toggle">
                        <input type="checkbox" name="notification" />
                        <i className="form-icon" /> Send me notifications with
                        news and tips
                      </label>
                      <label className="form-toggle">
                        <input type="checkbox" name="notification" />
                        <i className="form-icon" /> Send me emails with news and
                        tips
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
                  src="//jsfiddle.net/augustin_hiebel/fvdhjztw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkbox */}
      <div className="mb-12" id="checkbox">
        <h2 className="h3 mb-3">Checkbox</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label className="form-checkbox">
                        <input type="checkbox" name="policy" />
                        <i className="form-icon" /> I agree with your policy
                      </label>
                      <label className="form-checkbox">
                        <input type="checkbox" name="policy" />
                        <i className="form-icon" /> I confirm that I have read
                        the policity
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-checkbox">
                        <input
                          type="checkbox"
                          name="select-all"
                          indeterminate="true"
                        />
                        <i className="form-icon" /> Select all
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
                  src="//jsfiddle.net/augustin_hiebel/19ef3ymo/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation */}
      <div className="mb-12" id="validation">
        <h2 className="h3 mb-3">Validation</h2>

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
                      <label className="form-radio">
                        <input type="radio" name="input-error" />
                        <i className="form-icon" /> Male
                      </label>
                    </div>
                    <div
                      className="form-group"
                      data-success="Please choose an option."
                    >
                      <label className="form-toggle">
                        <input type="checkbox" name="input-success" />
                        <i className="form-icon" /> I agree with your policy
                      </label>
                    </div>
                    <div
                      className="form-group"
                      data-attention="Please choose an option."
                    >
                      <label className="form-checkbox">
                        <input type="checkbox" name="input-attention" />
                        <i className="form-icon" /> I confirm that I have read
                        the policity
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
                  src="//jsfiddle.net/augustin_hiebel/0w3njd4t/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disabled */}
      <div className="mb-12" id="disabled">
        <h2 className="h3 mb-3">Disabled</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label className="form-radio is-disabled">
                        <input type="radio" name="input-error" />
                        <i className="form-icon" /> Male
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-toggle is-disabled">
                        <input type="checkbox" name="input-success" />
                        <i className="form-icon" /> I agree with your policy
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-checkbox is-disabled">
                        <input type="checkbox" name="input-attention" />
                        <i className="form-icon" /> I confirm that I have read
                        the policity
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
                  src="//jsfiddle.net/augustin_hiebel/1j2ueya3/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With image */}
      <div className="mb-12" id="with-image">
        <h2 className="h3 mb-3">With image</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group flex flex-wrap justify-center gap-4">
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-1" />
                        <div
                          className="w-32 h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644677000/Marketing/202109_gloot2/Game_cover_Valorant.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-2" />
                        <div
                          className="w-32 h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Apex_Legends.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-3" />
                        <div
                          className="w-32 h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_PUBG_Battlegrounds.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-4" />
                        <div
                          className="w-32 h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_CSGO.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-5" />
                        <div
                          className="w-32 h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Rocket_League.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-6" />
                        <div
                          className="w-32 h-48 bg-cover rounded-md"
                          style={{
                            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1645621586/Marketing/202109_gloot2/Game_cover_League_of_Legends.jpg)`,
                          }}
                        />
                      </label>
                      <label className="form-checkbox form-image">
                        <input type="checkbox" name="game-7" />
                        <div
                          className="w-32 h-48 bg-cover rounded-md"
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
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/ho95v46t/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
