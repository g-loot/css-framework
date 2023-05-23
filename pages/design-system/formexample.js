import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Form example
    </h1>

    <div className='mb-10'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex-3 surface rounded-lg p-4 lg:p-8'>
          <form action="#" method="POST">
            <section className='space-y-4'>
              <h2 className='h4 mb-8'>
                Profile
              </h2>
              <div className='w-full flex flex-col lg:flex-row gap-4 items-stretch lg:items-center'>
                <div className="flex-1 form-group">
                  <label htmlFor="user-name">User name</label>
                  <input type="text" name="user-name" id="user-name" />
                </div>
                <div className="flex-1 form-group">
                  <label htmlFor="password">Password</label>
                  <div className='input-group'>
                    <button className='button button-sm button-ghost'>
                      <span>Change</span>
                    </button>
                    <input type="password" name="password" id="password" />
                  </div>
                </div>
              </div>
              <div className="form-group form-select">
                <label htmlFor="gender">Gender</label>
                <select id="gender">
                  <option disabled selected>Choose an option</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Not defined</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor="about">About</label>
                <textarea id="about" name="about" rows="3"></textarea>
                <p className='text-ui-300 text-sm mt-1'>Brief description for your profile. URLs are hyperlinked.</p>
              </div>
              <div className='rounded border border-ui-600 p-4 text-center text-sm text-ui-300'>
                <span>G-LOOT ID:</span>
                <code className='font-body'>4769554309840896</code>
              </div>
              <div className='form-group'>
                <label htmlFor="avatar">Avatar</label>
                <div className='flex items-center gap-4'>
                  <div className='avatar avatar-circle'>
                    <div>
                      <img src="https://res.cloudinary.com/gloot/image/upload/f_auto/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
                    </div>
                  </div>
                  <button className='button button-sm button-secondary'>
                    <span>Change</span>
                  </button>
                </div>
              </div>
              <div className='form-group'>
                <label>Cover photo</label>
                <div className='form-dropzone'>
                  <label htmlFor='dropzone-file'>
                    <div>
                        <span className='icon text-4xl icon-image mb-4'/>
                        <p className='text-sm text-ui-200'><span className='font-semibold'>Click to upload</span> or drag and drop</p>
                        <p className='text-sm'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id='dropzone-file' type='file' />
                  </label>
                </div> 
              </div>
            </section>
            <section className='space-y-4'>
              <h2 className='h4 mt-8'>
                Social
              </h2>
              <div className='form-group flex items-center gap-2'>
                <label htmlFor="social-twitter" className='flex-1'>Twitter</label>
                <div className="flex-3 input-group">
                  <span className="icon icon-logo-twitter" />
                  <input type="text" name="social-twitter" id="social-twitter" />
                </div>
              </div>
              <div className='form-group flex items-center gap-2'>
                <label htmlFor="social-twitch" className='flex-1'>Twitch</label>
                <div className="flex-3 input-group">
                  <span className="icon icon-twitch" />
                  <input type="text" name="social-twitch" id="social-twitch" />
                </div>
              </div>
              <div className='form-group flex items-center gap-2'>
                <label htmlFor="social-discord" className='flex-1'>Discord</label>
                <div className="flex-3 input-group">
                  <span className="icon icon-discord" />
                  <button className='button button-sm button-ghost'>
                    <span>Connect</span>
                  </button>
                  <input type="text" name="social-discord" id="social-discord" />
                </div>
              </div>
              <div className='form-group flex items-center gap-2'>
                <label htmlFor="social-steam" className='flex-1 -mt-4'>Steam</label>
                <div className="flex-3">
                  <div className='input-group'>
                    <span className="icon icon-steam" />
                    <button className='button button-sm button-secondary'>
                      <span>Login with steam</span>
                    </button>
                    <input type="text" name="social-steam" id="social-steam" />
                  </div>
                  <p className='text-ui-300 text-sm mt-1'>This site is not associated with Valve Corp.</p>
                </div>
              </div>
            </section>
            <section className='space-y-4'>
              <h2 className='h4 mt-8'>
                Data Privacy
              </h2>
              <p className='text-sm text-ui-200'>
                To make Stryda better we collect information from you as visitor with help from cookies. We also conduct relevant marketing of Stryda&lsquo;s services within Meta, Google, Adroll, Snapchat and Bing&lsquo;s network. Read more in our <a href="#" target="_blank">Privacy Policy</a>. <br/>
                Here you can consent to share your data with the following partners:
              </p>
              <div className='form-group'>
                <div className="form-toggle">
                  <input type="checkbox" name="data-meta" id="data-meta" />
                  <label htmlFor="data-meta">Meta</label>
                </div>
                <div className="form-toggle">
                  <input type="checkbox" name="data-google" id="data-google" defaultChecked />
                  <label htmlFor="data-google">Google</label>
                </div>
                <div className="form-toggle">
                  <input type="checkbox" name="data-adroll" id="data-adroll" defaultChecked />
                  <label htmlFor="data-adroll">Adroll</label>
                </div>
                <div className="form-toggle">
                  <input type="checkbox" name="data-bing" id="data-bing" />
                  <label htmlFor="data-bing">Bing</label>
                </div>
                <div className="form-toggle">
                  <input type="checkbox" name="data-quantcast" id="data-quantcast" />
                  <label htmlFor="data-quantcast">Quantcast</label>
                </div>
              </div>
            </section>
            <section className='mt-4 lg:mt-8 pt-4 lg:pt-8 border-t border-ui-600 flex gap-4'>
              <button type='cancel' className='flex-1 button button-primary'>
                <span>Save</span>
              </button>
              <button type='submit' className='flex-1 button button-secondary'>
                <span>Reset</span>
              </button>
            </section>
          </form>
        </div>
        <div className='flex-2'>
          <iframe className="rounded-lg" width="100%" height="800" src="//jsfiddle.net/augustin_hiebel/mz3vr67f/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
        </div>
      </div>
    </div>
  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;