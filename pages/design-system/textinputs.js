import DSMainNav from '../../components/DesignSystem/DSMainNav';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function textinputs() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <Head>
          <title>Gnog Prototype</title>
          <meta name="description" content="Internal playground" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Topbar />

        <div className="container flex mx-auto xl:px-4 2xl:px-0 md:space-x-12">
          <div className="hidden md:block sticky h-screen w-auto md:w-3/12 lg:w-2/12 py-4">
            <div className="form-group mb-4">
              <div className="input-group">
                <span className="icon icon-zoom"></span>
                <input type="text" name="teamname" id="teamname" />
              </div>
            </div>
            <DSMainNav data={DSdata} />
          </div>
          <div className="pt-4 pb-8 w-full md:w-9/12 lg:w-10/12">
            <h1 className='mb-2'>
              Text inputs
            </h1>


            {/* structure */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                Structure
              </h2>

              {/* structure: primary */}
              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='flex-1 space-y-4'>
                          <div className='form-group'>
                            <label for="first-name">First name</label>
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" />
                          </div>
                          <div className='form-group'>
                            <label for="company-website">Company Website</label>
                            <div className='input-group'>
                              <span> http:// </span>
                              <input type="text" name="company-website" id="company-website" />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label for="subdomain">Subdomain</label>
                            <div className='input-group'>
                              <input type="text" name="subdomain" id="subdomain" />
                              <span> .gloot.com </span>
                            </div>
                          </div>
                          <div className='form-group'>
                            <label for="about">About</label>
                            <textarea id="about" name="about" rows="4" placeholder="you@example.com"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/eL9patvh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='flex-1 space-y-4'>
                          <div className='form-group' data-error="Passwords must have at least 8 characters.">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" />
                          </div>
                          <div className='form-group' data-success="The name is valid.">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" />
                          </div>
                          <div className='form-group' data-attention="The text contains 3 spelling mistakes.">
                            <label for="summary">Summary</label>
                            <textarea id="summary" name="summary" rows="4" placeholder=""></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/tmvchn3f/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='flex-1 space-y-4'>
                          <div className='form-group'>
                            <label for="teamname">Team name</label>
                            <div className='input-group'>
                              <span className='icon icon-a-chat'></span>
                              <input type="text" name="teamname" id="teamname" />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label for="teamurl">Team URL</label>
                            <div className='input-group'>
                              <span className='icon icon-right icon-f-check'></span>
                              <input type="text" name="teamurl" id="teamurl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/1jL870xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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

              <div className="card rounded-lg p-4">
                <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                  <h3 className='h4 mb-6 lg:mb-10'>
                    Loading
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='flex-1 space-y-4'>
                          <div className='form-group is-loading'>
                            <label for="streetaddress">Street address</label>
                            <input type="text" name="streetaddress" id="streetaddress" />
                          </div>
                          <div className='form-group is-loading'>
                            <label for="city">City</label>
                            <div className='input-group'>
                              <span className='icon icon-right icon-flag-points-31'></span>
                              <input type="text" name="city" id="city" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/1jL870xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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
                            <label for="country">Country</label>
                            <input type="text" name="country" id="country" />
                          </div>
                          <div className='form-group'>
                            <label for="bio">Bio</label>
                            <textarea id="bio" name="bio" rows="4" placeholder="" disabled></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ehp7vfdk/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='flex-1 space-y-4'>
                          <div className='form-group'>
                            <label for="new-password">New password</label>
                            <div className='input-group'>
                              <button className='button button-sm button-tertiary'>
                                <span>Show</span>
                              </button>
                              <input type="password" name="new-password" id="new-password" />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label for="send-email">Send email</label>
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
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/wmgxq8v6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>








            
          </div>
          
        </div>
    </div>
  );
}
