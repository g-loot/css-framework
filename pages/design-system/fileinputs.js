import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">File inputs</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="file-input">Upload a file</label>
                      <input type="file" name="file-input" id="file-input" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/pL791z48/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With helper text */}
      <div className="mb-12" id="with-helper-text">
        <h2 className="h3 mb-3">With helper text</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="file-helper">Upload a file</label>
                      <input
                        type="file"
                        name="file-helper"
                        id="file-helper"
                        aria-describedby="file_input_help"
                      />
                      <p
                        className="mt-1 text-sm text-ui-300"
                        id="file_input_help"
                      >
                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/g2m7kyxs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple files */}
      <div className="mb-12" id="multiple-files">
        <h2 className="h3 mb-3">Multiple files</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="form-group">
                      <label htmlFor="file-multiple">
                        Upload multiple files
                      </label>
                      <input
                        type="file"
                        name="file-multiple"
                        id="file-multiple"
                        multiple
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/uckemr8z/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropzone */}
      <div className="mb-12" id="dropzone">
        <h2 className="h3 mb-3">Dropzone</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="form-dropzone">
                  <label htmlFor="dropzone-file">
                    <div>
                      <span className="icon text-4xl icon-data-download mb-4" />
                      <p className="text-sm text-ui-200">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-sm">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" />
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/9xa6Lbv2/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mb-12" id="Button">
        <h2 className="h3 mb-3">Button</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="form-group">
                  <label
                    htmlFor="file-button"
                    className="button button-tertiary rounded-full"
                  >
                    <span className="icon icon-camera" />
                  </label>
                  <input
                    type="file"
                    name="file-button"
                    id="file-button"
                    aria-describedby="file_input_help"
                  />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/8zw2e9vp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fake folder input */}
      <div className="mb-12" id="fake-folder-input">
        <h2 className="h3 mb-3">Fake folder input</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="h4 mb-4">Button</h3>
                  <button
                    type="button"
                    className="flex h-11 items-stretch gap-0 justify-start group overflow-hidden max-w-[100%]"
                  >
                    <div className="relative flex items-center z-10 p-0 bg-ui-600 cursor-pointer px-4 rounded-l-sm border border-ui-500 font-bold w-full text-sm text-ui-200 whitespace-nowrap flex-[0] group-hover:text-ui-100 group-hover:bg-ui-500 group-hover:border-ui-400 focus:outline-none group-active:text-ui-100 group-active:bg-ui-500 group-active:border-ui-300">
                      <span>Choose folder</span>
                    </div>
                    <div className="relative inline-flex items-center z-0 rounded-r w-full -ml-px bg-ui-700 border border-ui-500 shadow-[inset_2px_2px_6px_0px_rgb(0,0,0,0.25)] focus-visible:-outline-offset-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ui-300 focus-visible:z-20 p-2 text-sm truncate child:truncate group-hover:text-ui-100 group-hover:bg-ui-500 group-hover:border-ui-400 group-hover:z-20 focus:outline-none group-active:text-ui-100 group-active:bg-ui-500 group-active:border-ui-300 group-active:z-20">
                      <span>
                        C:\Program Files\My Softwares\Gaming\Esports\Recording
                        Devices\
                      </span>
                    </div>
                  </button>
                </div>
                <div>
                  <h3 className="h4 mb-4">Button & text input</h3>
                  <div className="flex items-stretch gap-0 justify-start">
                    <button
                      type="button"
                      className="relative z-10 p-0 h-11 bg-ui-600 cursor-pointer px-4 rounded-l-sm border border-ui-500 font-bold block w-full text-sm text-ui-200 whitespace-nowrap flex-[0] hover:text-ui-100 hover:bg-ui-500 hover:border-ui-400 focus:outline-none active:text-ui-100 active:bg-ui-500 active:border-ui-300"
                    >
                      Choose folder
                    </button>
                    <input
                      className="relative z-0 rounded-r w-full -ml-px bg-ui-700 border border-ui-500 shadow-[inset_2px_2px_6px_0px_rgb(0,0,0,0.25)] focus-visible:-outline-offset-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ui-300 focus-visible:z-20 p-2 text-sm truncate hover:text-ui-100 hover:bg-ui-500 hover:border-ui-400 hover:z-20 focus:outline-none active:text-ui-100 active:bg-ui-500 active:border-ui-300 active:z-20"
                      type="text"
                      readOnly
                      value="C:\Program Files\My Softwares\Gaming\Esports\Recording Devices\"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/orn0atmg/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
