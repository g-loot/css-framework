import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function FormExample() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Form example' />
        
        <DSTopBar />


        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            Form example
          </h1>

          <div className='mb-10'>
            <div className='flex flex-col lg:flex-row gap-4'>
              <div className='flex-3 card rounded-lg p-4 lg:p-8'>
                <form action="#" method="POST">
                  <section className='space-y-4'>
                    <h2 className='h4 mb-8'>
                      Profile
                    </h2>
                    <div className='w-full flex flex-col lg:flex-row gap-4 items-stretch lg:items-center'>
                      <div className="flex-1 form-group">
                        <label for="user-name">User name</label>
                        <input type="text" name="user-name" id="user-name" />
                      </div>
                      <div className="flex-1 form-group">
                        <label for="email">Email</label>
                        <div className='input-group'>
                          <button className='button button-sm button-tertiary'>
                            <span>Change</span>
                          </button>
                          <input type="password" name="password" id="password" />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label for="about">About</label>
                      <textarea id="about" name="about" rows="3"></textarea>
                      <p className='text-ui-300 text-sm mt-1'>Brief description for your profile. URLs are hyperlinked.</p>
                    </div>
                    <div className='rounded border border-ui-600 p-4 text-center text-sm text-ui-300'>
                      <span>G-LOOT ID:</span>
                      <code className='font-bold font-body'>4769554309840896</code>
                    </div>
                    <div className='form-group'>
                      <label for="avatar">Avatar</label>
                      <div className='flex items-center gap-4'>
                        <figure className='avatar avatar-simple'>
                          <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                        </figure>
                        <button className='button button-sm button-secondary'>
                          <span>Change</span>
                        </button>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label for="cover">Cover photo</label>
                      <div className='px-6 pt-5 pb-6 border border-ui-500 border-dashed rounded space-y-1 text-center'>
                        <div className='text-ui-500'>
                          <span className='icon icon-image icon-36'></span>
                        </div>
                        <div className="flex justify-center text-ui-200">
                          <label for="file-upload" className="relative cursor-pointer rounded-md font-medium text-interaction-500 hover:text-interaction-300 focus-within:outline-none">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-sm text-ui-400">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </section>
                  <section className='space-y-4'>
                    <h2 className='h4 mt-8'>
                      Social
                    </h2>
                    <div className='form-group flex items-center gap-2'>
                      <label for="social-twitter" className='flex-1'>Twitter:</label>
                      <div className="flex-3 input-group">
                        <span className="icon icon-logo-twitter"></span>
                        <input type="text" name="social-twitter" id="social-twitter" />
                      </div>
                    </div>
                    <div className='form-group flex items-center gap-2'>
                      <label for="social-twitch" className='flex-1'>Twitch:</label>
                      <div className="flex-3 input-group">
                        <span className="icon icon-twitch"></span>
                        <input type="text" name="social-twitch" id="social-twitch" />
                      </div>
                    </div>
                    <div className='form-group flex items-center gap-2'>
                      <label for="social-discord" className='flex-1'>Discord:</label>
                      <div className="flex-3 input-group">
                        <button className='button button-sm button-tertiary'>
                          <span>Connect</span>
                        </button>
                        <span className="icon icon-discord"></span>
                        <input type="text" name="social-discord" id="social-discord" />
                      </div>
                    </div>
                    <div className='form-group flex items-center gap-2'>
                      <label for="social-steam" className='flex-1 -mt-4'>Steam:</label>
                      <div className="flex-3">
                        <div className='input-group'>
                          <button className='button button-sm button-secondary'>
                            <span>Login with steam</span>
                          </button>
                          <span className="icon icon-steam"></span>
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
                      To make G-Loot better we collect information from you as visitor with help from cookies. We also conduct relevant marketing of G-Loot's services within Meta, Google, Adroll, Snapchat and Bing's network. Read more in our <a href="#" target="_blank">Privacy Policy</a>. <br/>
                      Here you can consent to share your data with the following partners:
                    </p>
                    <div className='form-group'>
                      <label className="form-switch">
                        <input type="checkbox" name="data-meta" checked />
                        <i className="form-icon"></i> Meta
                      </label>
                      <label className="form-switch">
                        <input type="checkbox" name="data-google" checked />
                        <i className="form-icon"></i> Google
                      </label>
                      <label className="form-switch">
                        <input type="checkbox" name="data-adroll" checked />
                        <i className="form-icon"></i> Adroll
                      </label>
                      <label className="form-switch">
                        <input type="checkbox" name="data-bing" />
                        <i className="form-icon"></i> Bing
                      </label>
                      <label className="form-switch">
                        <input type="checkbox" name="data-quantcast" />
                        <i className="form-icon"></i> Quantcast
                      </label>
                    </div>
                  </section>
                  <section className='mt-8 pt-8 border-t border-ui-600 flex gap-4'>
                    <button className='flex-1 button button-primary'>
                      <span>Save</span>
                    </button>
                    <button className='flex-1 button button-secondary'>
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

        </DSStructure>

        
    </div>
  );
}
