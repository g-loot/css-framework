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
                      <div className="form-radio is-disabled">
                        <input type="radio" name="radio" id="radioDisabled" />
                        <label htmlFor="radioDisabled">Male</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-toggle is-disabled">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="toggleDisabled"
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
                  src="//jsfiddle.net/augustin_hiebel/1j2ueya3/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Align to end */}
      <div className="mb-12" id="align-end">
        <h2 className="h3 mb-3">Align to end</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/8cpyrb9v/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* As list */}
      <div className="mb-12" id="as-list">
        <h2 className="h3 mb-3">As list</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/r4vhztyq/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single element */}
      <div className="mb-12" id="as-list">
        <h2 className="h3 mb-3">Single element</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="form-radio">
                          <input type="radio" name="radioYesNo" id="radioSingleYes" />
                          <label htmlFor="radioSingleYes" />
                        </div>
                        <div className="form-radio">
                          <input type="radio" name="radioYesNo" id="radioSingleNo" />
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
                  src="//jsfiddle.net/augustin_hiebel/gaze7rfm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
                    enu
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="500"
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
