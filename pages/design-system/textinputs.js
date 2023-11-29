import React, { useState } from "react";

import TextareaExpandable from "@/components/Textarea/TextareaExpandable";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const minValue = 0;
  const maxValue = 1000;
  const [inputNumber, setInputNumber] = useState(4);

  function inputNumberPlus() {
    if (inputNumber < maxValue) {
      setInputNumber(inputNumber + 1);
    }
  }

  function inputNumberMinus() {
    if (inputNumber > minValue) {
      setInputNumber(inputNumber - 1);
    }
  }

  return (
    <>
      <h1 className="mb-8">Text inputs</h1>

      {/* structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

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
                    <div className="form-group">
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
                  src="//jsfiddle.net/augustin_hiebel/eL9patvh/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With textarea */}
      <div className="mb-12">
        <Anchor title="With textarea" small="auto-expandable" />

        {/* structure: primary */}
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="first-name">Your message</label>
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
                  src="//jsfiddle.net/augustin_hiebel/ob6j0qmz/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation <small className="text-ui-200 font-normal">with attribute</small> */}
      <div className="mb-12">
        <Anchor title="Validation" small="with attribute" />

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
                      data-success="The account is valid."
                    >
                      <label htmlFor="name">Riot account</label>
                      <div className="input-group">
                        <span>
                          <span className="icon icon-riotgames-symbol" />
                        </span>
                        <input
                          type="text"
                          name="riot-account"
                          id="riot-account"
                        />
                        <span>
                          <span className="icon icon-lock" />
                        </span>
                      </div>
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
                  src="//jsfiddle.net/augustin_hiebel/tmvchn3f/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation <small className="text-ui-200 font-normal">with tag</small> */}
      <div className="mb-12">
        <Anchor title="Validation" small="with tag" />

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
                      <label htmlFor="riot-account">Riot account</label>
                      <div className="input-group">
                        <span>
                          <span className="icon icon-riotgames-symbol" />
                        </span>
                        <input
                          type="text"
                          name="riot-account"
                          id="riot-account"
                        />
                        <span>
                          <span className="icon icon-lock" />
                        </span>
                      </div>
                      <div className="form-info">
                        The account is <span className="icon icon-check" />{" "}
                        valid.
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
                  src="//jsfiddle.net/augustin_hiebel/nzLa62jw/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With icon */}
      <div className="mb-12">
        <Anchor title="With icon" />

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
                  src="//jsfiddle.net/augustin_hiebel/1jL870xb/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading */}
      <div className="mb-12">
        <Anchor title="Loading" />

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
                      <label htmlFor="message">Your message</label>
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
                  src="//jsfiddle.net/augustin_hiebel/19ehL5p4/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
                  src="//jsfiddle.net/augustin_hiebel/ehp7vfdk/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With button */}
      <div className="mb-12">
        <Anchor title="With button" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="search-field">Search</label>
                      <div className="input-group">
                        <button role="button" className="button button-ghost">
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
                      <label htmlFor="search-field">Search</label>
                      <div className="input-group input-sm input-secondary">
                        <button role="button" className="button button-ghost">
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
                      <label htmlFor="send-message">Send message</label>
                      <div className="input-group">
                        <button type="button" className="button button-ghost">
                          <span>Send message</span>
                        </button>
                        <input
                          type="password"
                          name="send-message"
                          id="send-message"
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
                  src="//jsfiddle.net/augustin_hiebel/wmgxq8v6/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Variant */}
      <div className="mb-12">
        <Anchor title="Variant" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="icon icon-right icon-zoom" />
                        <input
                          type="text"
                          name="search-field"
                          id="search-field"
                          className="input-secondary"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-secondary">
                        <span className="icon icon-right icon-zoom" />
                        <input
                          type="text"
                          name="search-field"
                          id="search-field"
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
                  src="//jsfiddle.net/augustin_hiebel/m50w24xe/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input date */}
      <div className="mb-12">
        <Anchor title="Input date" />

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
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="datetime-local">Choose a date</label>
                      <div className="input-group">
                        <span className="icon icon-right icon-calendar-2" />
                        <input
                          id="datetime-local"
                          name="datetime-local"
                          type="datetime-local"
                          value="2024-06-14T00:00"
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
                  height="200"
                  src="//jsfiddle.net/augustin_hiebel/m2z3ynba/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input number */}
      <div className="mb-12">
        <Anchor title="Input number" />

        <div className="surface rounded-lg p-4">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Default (browser)</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="form-group">
                  <label htmlFor="token2">
                    How many tokens to you want to gift CtrlChampion?
                  </label>
                  <input min="1" max="100" name="token2" type="number" />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="150"
                  src="//jsfiddle.net/augustin_hiebel/fqbmv056/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">With hidden buttons</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="form-group">
                  <label htmlFor="token2">
                    How many tokens to you want to gift CtrlChampion?
                  </label>
                  <input
                    min="1"
                    max="100"
                    name="token3"
                    type="number"
                    className="is-nodefault"
                  />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="150"
                  src="//jsfiddle.net/augustin_hiebel/bwjsvac3/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Customized</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="form-group">
                  <label htmlFor="token">
                    How many tokens to you want to gift CtrlChampion?
                  </label>
                  <div className="input-number">
                    <button type="button" onClick={inputNumberPlus}>
                      <span className="icon icon-i-add" />
                    </button>
                    <input
                      min={1}
                      name="token"
                      value={inputNumber}
                      type="number"
                    />
                    <button type="button" onClick={inputNumberMinus}>
                      <span className="icon icon-i-delete" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/28xoecqj/embedded/js/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
