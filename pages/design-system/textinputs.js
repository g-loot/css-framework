import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function TextInputs() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Text inputs' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            Text inputs
          </h1>


          {/* structure */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Structure
            </h2>

            {/* structure: primary */}
            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className='form-group'>
                          <label htmlFor="first-name">First name</label>
                          <input type="text" name="first-name" id="first-name" autoComplete="given-name" />
                        </div>
                        <div className='form-group'>
                          <label htmlFor="company-website">Company Website</label>
                          <div className='input-group'>
                            <span> http:// </span>
                            <input type="text" name="company-website" id="company-website" />
                          </div>
                        </div>
                        <div className='form-group'>
                          <label htmlFor="subdomain">Subdomain</label>
                          <div className='input-group'>
                            <input type="text" name="subdomain" id="subdomain" />
                            <span> .gloot.com </span>
                          </div>
                        </div>
                        <div className='form-group'>
                          <label htmlFor="about">About</label>
                          <textarea id="about" name="about" rows="4" placeholder="you@example.com"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/eL9patvh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Validation */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Validation
            </h2>

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className='form-group' data-error="Passwords must have at least 8 characters.">
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password" id="password" />
                        </div>
                        <div className='form-group' data-success="The name is valid.">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name" id="name" />
                        </div>
                        <div className='form-group' data-attention="The text contains 3 spelling mistakes.">
                          <label htmlFor="summary">Summary</label>
                          <textarea id="summary" name="summary" rows="4" placeholder=""></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/tmvchn3f/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* With icon */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              With icon
            </h2>

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className='form-group'>
                          <label htmlFor="teamname">Team name</label>
                          <div className='input-group'>
                            <span className='icon icon-a-chat'></span>
                            <input type="text" name="teamname" id="teamname" />
                          </div>
                        </div>
                        <div className='form-group'>
                          <label htmlFor="teamurl">Team URL</label>
                          <div className='input-group'>
                            <span className='icon icon-right icon-f-check'></span>
                            <input type="text" name="teamurl" id="teamurl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/1jL870xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>








          {/* With loader */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Status
            </h2>

            <div className="surface rounded-lg p-4">
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Loading
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className='form-group is-loading'>
                          <label htmlFor="streetaddress">Street address</label>
                          <input type="text" name="streetaddress" id="streetaddress" />
                        </div>
                        <div className='form-group is-loading'>
                          <label htmlFor="city">City</label>
                          <div className='input-group'>
                            <span className='icon icon-right icon-flag-points-31'></span>
                            <input type="text" name="city" id="city" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/1jL870xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
              <div className=''>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Disabled
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className='form-group is-disabled'>
                          <label htmlFor="country">Country</label>
                          <input type="text" name="country" id="country" />
                        </div>
                        <div className='form-group is-disabled'>
                          <label htmlFor="bio">Bio</label>
                          <textarea id="bio" name="bio" rows="4" placeholder=""></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ehp7vfdk/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* With button */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              With button
            </h2>

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className='form-group'>
                          <label htmlFor="new-password">New password</label>
                          <div className='input-group'>
                            <button className='button button-sm button-tertiary'>
                              <span>Show</span>
                            </button>
                            <input type="password" name="new-password" id="new-password" />
                          </div>
                        </div>
                        <div className='form-group'>
                          <label htmlFor="send-email">Send email</label>
                          <div className='input-group'>
                            <button className='button button-primary'>
                              <span>Send email</span>
                            </button>
                            <input type="password" name="send-email" id="send-email" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/wmgxq8v6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </DSStructure>

        
    </div>
  );
}
