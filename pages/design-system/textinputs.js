import React, {useState} from "react";

import TextareaExpandable from "../../components/Textarea/TextareaExpandable";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  const minValue = 0;
  const maxValue = 1000;
  const [inputNumber, setInputNumber] = useState(4);

  function inputNumberPlus(){
    if(inputNumber < maxValue) {
      setInputNumber(inputNumber + 1);
    }
  }

  function inputNumberMinus(){
    if(inputNumber > minValue) {
      setInputNumber(inputNumber - 1);
    }
  }

  return (
    <>
      <h1 className="mb-2">Text inputs</h1>

      {/* structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        {/* structure: primary */}
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="first-name">First name</label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="age">Age</label>
                      <input type="number" name="age" id="age" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company-website">Company Website</label>
                      <div className="input-group">
                        <span> http:// </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                        />
                      </div>
                    </div>
                    <div className="form-group" data-attention="The name is valid.">
                      <label htmlFor="twitch">Twitch</label>
                      <div className="input-group">
                        <span>
                          <span className="icon icon-twitch" />
                        </span>
                        <input type="text" name="twitch" id="twitch" />
                        <span>
                          <span className="icon icon-lock" />
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subdomain">Subdomain</label>
                      <div className="input-group">
                        <input type="text" name="subdomain" id="subdomain" />
                        <span> .gloot.com </span>
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
                  src="//jsfiddle.net/augustin_hiebel/eL9patvh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With textarea */}
      <div className="mb-12" id="with-textarea">
        <h2 className="h3 mb-3">With textarea <small className="text-ui-200 font-normal">auto-expandable</small></h2>

        {/* structure: primary */}
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="first-name">Your message:</label>
                      <TextareaExpandable />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company-website">Company Website</label>
                      <div className="input-group">
                        <span> http:// </span>
                        <TextareaExpandable />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="twitch">Twitch</label>
                      <div className="input-group">
                        <span>
                          <span className="icon icon-twitch" />
                        </span>
                        <TextareaExpandable />
                        <span>
                          <span className="icon icon-lock" />
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subdomain">Subdomain</label>
                      <div className="input-group">
                        <TextareaExpandable />
                        <span> .gloot.com </span>
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
                  src="//jsfiddle.net/augustin_hiebel/ob6j0qmz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation <small className="text-ui-200 font-normal">with attribute</small> */}
      <div className="mb-12" id="validation">
        <h2 className="h3 mb-3">
          Validation <small className="text-ui-200 font-normal">with attribute</small>
        </h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-8 py-4">
                    <div
                      className="form-group"
                      data-error="Passwords must have at least 8 characters."
                    >
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" />
                    </div>
                    <div
                      className="form-group"
                      data-success="The name is valid."
                    >
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div
                      className="form-group"
                      data-attention="The text contains 3 spelling mistakes."
                    >
                      <label htmlFor="summary">Summary</label>
                      <textarea
                        id="summary"
                        name="summary"
                        rows="4"
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/tmvchn3f/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation <small className="text-ui-200 font-normal">with tag</small> */}
      <div className="mb-12" id="validation-with-tag">
        <h2 className="h3 mb-3">
          Validation <small className="text-ui-200 font-normal">with tag</small>
        </h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-8 py-4">
                    <div className="form-group" data-error>
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" />
                      <div className="form-info">
                        Passwords must have at least <b>8 characters</b>.
                      </div>
                    </div>
                    <div className="form-group" data-success>
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                      <div className="form-info">
                        The name is <span className="icon icon-check" /> valid.
                      </div>
                    </div>
                    <div className="form-group" data-attention>
                      <label htmlFor="summary">Summary</label>
                      <textarea
                        id="summary"
                        name="summary"
                        rows="4"
                        placeholder=""
                      ></textarea>
                      <div className="form-info">
                        The text contains <b>3 spelling mistakes</b>.
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
                  src="//jsfiddle.net/augustin_hiebel/nzLa62jw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With icon */}
      <div className="mb-12" id="with-icon">
        <h2 className="h3 mb-3">With icon</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-8">
                <div className="">
                  <h3 className="h4 my-4">Input</h3>
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="teamname">Team name</label>
                      <div className="input-group">
                        <span className="icon icon-a-chat" />
                        <input type="text" name="teamname" id="teamname" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="teamurl">Team URL</label>
                      <div className="input-group">
                        <span className="icon icon-right icon-f-check" />
                        <input type="text" name="teamurl" id="teamurl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className="h4 my-4">Textarea</h3>
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="teamname">Team name</label>
                      <div className="input-group">
                        <span className="icon icon-a-chat" />
                        <TextareaExpandable />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="teamurl">Team URL</label>
                      <div className="input-group">
                        <span className="icon icon-right icon-f-check" />
                        <TextareaExpandable />
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
                  src="//jsfiddle.net/augustin_hiebel/1jL870xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With loader */}
      <div className="mb-12" id="with-loader">
        <h2 className="h3 mb-3">Status</h2>

        <div className="surface rounded-lg p-4">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Loading</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group is-loading">
                      <label htmlFor="streetaddress">Street address</label>
                      <input
                        type="text"
                        name="streetaddress"
                        id="streetaddress"
                      />
                    </div>
                    <div className="form-group is-loading">
                      <label htmlFor="city">City</label>
                      <div className="input-group">
                        <span className="icon icon-right icon-flag-points-31" />
                        <input type="text" name="city" id="city" />
                      </div>
                    </div>
                    <div className="form-group is-loading">
                      <label htmlFor="message">Your message:</label>
                      <div className="input-group">
                        <span className="icon icon-right icon-flag-points-31" />
                        <TextareaExpandable />
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
                  src="//jsfiddle.net/augustin_hiebel/19ehL5p4/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Disabled</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group is-disabled">
                      <label htmlFor="country">Country</label>
                      <input type="text" name="country" id="country" />
                    </div>
                    <div disabled className="form-group is-disabled">
                      <label htmlFor="area">Area</label>
                      <input type="text" name="area" id="area" disabled />
                    </div>
                    <div className="form-group is-disabled">
                      <label htmlFor="bio">Bio</label>
                      <textarea
                        id="bio"
                        name="bio"
                        rows="4"
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/ehp7vfdk/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With button */}
      <div className="mb-12" id="with-button">
        <h2 className="h3 mb-3">With button</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="search-field">Search</label>
                      <div className="input-group">
                        <button
                          role="button"
                          className="button button-tertiary"
                        >
                          <span className="icon icon-zoom" />
                        </button>
                        <input
                          type="text"
                          name="search-field"
                          id="search-field"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="send-email">Send email</label>
                      <div className="input-group">
                        <button type="button" className="button button-primary">
                          <span>Send email</span>
                        </button>
                        <input
                          type="password"
                          name="send-email"
                          id="send-email"
                        />
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
                  src="//jsfiddle.net/augustin_hiebel/wmgxq8v6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input date */}
      <div className="mb-12" id="input-date">
        <h2 className="h3 mb-3">Input date</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="date">Choose a date</label>
                      <div className="input-group">
                        <span className="icon icon-right icon-calendar-2" />
                        <input
                          id="date"
                          name="date"
                          type="date"
                          value="2023-11-06"
                        ></input>
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
                  src="//jsfiddle.net/augustin_hiebel/m2z3ynba/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input number */}
      <div className="mb-12" id="input-number">
        <h2 className="h3 mb-3">Input number</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="token">How many tokens to you want to gift Jamlog?</label>
                        <div className="input-number">
                          <button type="button" onClick={inputNumberPlus}>
                            <span className="icon icon-i-add" />
                          </button>
                          <input min={1} name="token" value={inputNumber} type="number" />
                          <button type="button" onClick={inputNumberMinus}>
                            <span className="icon icon-i-delete" />
                          </button>
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
                  src="//jsfiddle.net/augustin_hiebel/28xoecqj/embedded/js/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
