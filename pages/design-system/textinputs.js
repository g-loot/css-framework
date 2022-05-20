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
                Vaidation
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
                          <div className='form-group' data-attention="Your text contains 3 spelling mistakes.">
                            <label for="about">About</label>
                            <textarea id="about" name="about" rows="4" placeholder="you@example.com"></textarea>
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
                        <div className='flex-1'>
                          <div className='form-group'>
                            <label for="nickname">Nickname</label>
                            <div className='input-group'>
                              <span className='icon icon-pen-01'></span>
                              <input type="text" name="nickname" id="nickname" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/z1fpx59h/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>








            {/* status */}
            <div className='mb-12'>

              <h2 className='mb-3'>
                Status
              </h2>

              {/* status: loading */}
              <div className="card rounded-lg p-4">
                <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                  <h3 className='mb-6 lg:mb-10'>
                    Loading
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Primary
                        </div>
                        <div className='flex-1'>
                          <button className='button button-primary is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Secondary
                        </div>
                        <div className='flex-1'>
                          <button className='button button-secondary is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Tertiary
                        </div>
                        <div className='flex-1'>
                          <button className='button button-tertiary is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Premium
                        </div>
                        <div className='flex-1'>
                          <button className='button button-premium is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Claim
                        </div>
                        <div className='flex-1'>
                          <button className='button button-claim is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Currency
                        </div>
                        <div className='flex-1'>
                          <button className="button button-primary button-currency button-coin is-loading">
                            <div>
                              <span>Purchase</span>
                            </div>
                            <div>
                              <img className="dropshadow-xs" src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png" width="34" height="34" alt="coin" />
                              <span>2,000</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/xn2y8qfr/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>


                <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                  <h3 className='mb-6 lg:mb-10'>
                    Disabled
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Primary
                        </div>
                        <div className='flex-1'>
                          <button className='button button-primary is-disabled'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Secondary
                        </div>
                        <div className='flex-1'>
                          <button className='button button-secondary is-disabled'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Tertiary
                        </div>
                        <div className='flex-1'>
                          <button className='button button-tertiary is-disabled'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Premium
                        </div>
                        <div className='flex-1'>
                          <button className='button button-premium is-disabled'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Claim
                        </div>
                        <div className='flex-1'>
                          <button className='button button-claim is-disabled'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Currency
                        </div>
                        <div className='flex-1'>
                          <button className="button button-primary button-currency button-coin is-disabled">
                            <div>
                              <span>Purchase</span>
                            </div>
                            <div>
                              <img className="dropshadow-xs" src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png" width="34" height="34" alt="coin" />
                              <span>2,000</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/futbsxan/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>




                <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                  <h3 className='mb-6 lg:mb-10'>
                    Shining
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Primary
                        </div>
                        <div className='flex-1'>
                          <button className='button button-primary is-shining'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Secondary
                        </div>
                        <div className='flex-1'>
                          <button className='button button-secondary is-shining'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Tertiary
                        </div>
                        <div className='flex-1'>
                          <button className='button button-tertiary is-shining'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Premium
                        </div>
                        <div className='flex-1'>
                          <button className='button button-premium is-shining'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Claim
                        </div>
                        <div className='flex-1'>
                          <button className='button button-claim is-shining'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/4 text-ui-400 text-right'>
                          Currency
                        </div>
                        <div className='flex-1'>
                          <button className="button button-primary button-currency button-coin is-shining">
                            <div>
                              <span>Purchase</span>
                            </div>
                            <div>
                              <img className="dropshadow-xs" src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png" width="34" height="34" alt="coin" />
                              <span>2,000</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/futbsxan/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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
