import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      File inputs
    </h1>


    {/* Structure */}
    <div className='mb-12' id='structure'>

      <h2 className='h3 mb-3'>
        Structure
      </h2>

      <div className='surface rounded-lg p-4'>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='flex-1 space-y-4'>
                  <div className='form-group'>
                    <label htmlFor='file-input'>Upload a file</label>
                    <input type='file' name='file-input' id='file-input' />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className='rounded' width='100%' height='300' src='//jsfiddle.net/augustin_hiebel/pL791z48/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094' ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* With helper text */}
    <div className='mb-12' id='with-helper-text'>

      <h2 className='h3 mb-3'>
        With helper text
      </h2>

      <div className='surface rounded-lg p-4'>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='flex-1 space-y-4'>
                  <div className='form-group'>
                    <label htmlFor='file-helper'>Upload a file</label>
                    <input type='file' name='file-helper' id='file-helper' aria-describedby='file_input_help' />
                    <p className='mt-1 text-sm text-ui-300' id='file_input_help'>SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className='rounded' width='100%' height='300' src='//jsfiddle.net/augustin_hiebel/g2m7kyxs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094' ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Multiple files */}
    <div className='mb-12' id='multiple-files'>

      <h2 className='h3 mb-3'>
        Multiple files
      </h2>

      <div className='surface rounded-lg p-4'>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='flex-1 space-y-4'>
                  <div className='form-group'>
                    <label htmlFor='file-multiple'>Upload multiple files</label>
                    <input type='file' name='file-multiple' id='file-multiple' multiple />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className='rounded' width='100%' height='300' src='//jsfiddle.net/augustin_hiebel/uckemr8z/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094' ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Dropzone */}
    <div className='mb-12' id='dropzone'>

      <h2 className='h3 mb-3'>
        Dropzone
      </h2>

      <div className='surface rounded-lg p-4'>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='form-dropzone'>
                <label htmlFor='dropzone-file'>
                  <div>
                      <span className='icon text-4xl icon-data-download mb-4'></span>
                      <p className='text-sm text-ui-200'><span className='font-semibold'>Click to upload</span> or drag and drop</p>
                      <p className='text-sm'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id='dropzone-file' type='file' />
                </label>
              </div> 
            </div>
            <div className='flex-1'>
              <iframe className='rounded' width='100%' height='300' src='//jsfiddle.net/augustin_hiebel/9xa6Lbv2/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094' ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Button */}
    <div className='mb-12' id='Button'>

      <h2 className='h3 mb-3'>
        Button
      </h2>

      <div className='surface rounded-lg p-4'>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='form-group'>
                <label htmlFor='file-button' className='button button-tertiary rounded-full'><span className='icon icon-camera'></span></label>
                <input type='file' name='file-button' id='file-button' aria-describedby='file_input_help' />
              </div>
            </div>
            <div className='flex-1'>
              <iframe className='rounded' width='100%' height='300' src='//jsfiddle.net/augustin_hiebel/8zw2e9vp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094' ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>


  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;