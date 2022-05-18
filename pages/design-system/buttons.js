import DSMainNav from '../../components/DesignSystem/DSMainNav';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function DSIntroduction() {
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

        <div className="container flex mx-auto md:space-x-12">
          <div className="hidden md:block sticky h-screen w-auto md:w-3/12 lg:w-2/12 py-4">
            <DSMainNav data={DSdata} />
          </div>
          <div className="pt-4 pb-8 w-full md:w-9/12 lg:w-10/12">
            <h1 className='mb-2'>
              Buttons
            </h1>


            {/* variant */}
            <div className='mb-12'>

              <h2 className='mb-3'>
                Variants
              </h2>

              {/* variant: primary */}
              <div className="card rounded-lg p-4">
                <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                  <h3 className='mb-6 lg:mb-10'>
                    Primary
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Text only:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-primary'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon + text:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-primary'>
                            <span className='icon icon-heart'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Text + icon:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-primary'>
                            <span>Label</span>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon only:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-primary rounded-full'>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>

                {/* variant:secondary */}
                <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                  <h3 className='mb-6 lg:mb-10'>
                    Secondary
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Text only:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-secondary'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon + text:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-secondary'>
                            <span className='icon icon-heart'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Text + icon:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-secondary'>
                            <span>Label</span>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon only:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-secondary rounded-full'>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>

                
                {/* variant:tertiary */}
                <div className=''>
                  <h3 className='mb-6 lg:mb-10'>
                    Tertiary
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Large:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-tertiary'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon + text:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-tertiary'>
                            <span className='icon icon-heart'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Text + icon:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-tertiary'>
                            <span>Label</span>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon only:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-tertiary rounded-full'>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>




                {/* variant:premium */}
                <div className=''>
                  <h3 className='mb-6 lg:mb-10'>
                    Premium
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Large:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-premium'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon + text:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-premium'>
                            <span className='icon icon-heart'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Text + icon:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-premium'>
                            <span>Label</span>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon only:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-premium rounded-full'>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>



                {/* variant:claim */}
                <div className=''>
                  <h3 className='mb-6 lg:mb-10'>
                    Claim
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Large:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-claim'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon + text:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-claim'>
                            <span className='icon icon-heart'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Text + icon:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-claim'>
                            <span>Label</span>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                        Icon only:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-claim rounded-full'>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>



              </div>
            </div>



            {/* size */}
            <div className='mb-12'>

              <h2 className='mb-3'>
                Sizes
              </h2>

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Large:
                        </div>
                        <div className='flex-1 flex flex-wrap gap-2'>
                          <button className='button button-lg button-primary'>
                            <span>Label</span>
                          </button>
                          <button className='button button-lg button-secondary'>
                            <span className='icon icon-heart'></span>
                            <span>Label</span>
                          </button>
                          <button className='button button-lg button-tertiary rounded-full'>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Medium:
                        </div>
                        <div className='flex-1 flex flex-wrap gap-2'>
                          <button className='button button-md button-primary'>
                            <span>Label</span>
                          </button>
                          <button className='button button-md button-secondary'>
                            <span className='icon icon-heart'></span>
                            <span>Label</span>
                          </button>
                          <button className='button button-md button-tertiary rounded-full'>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Small:
                        </div>
                        <div className='flex-1 flex flex-wrap gap-2'>
                          <button className='button button-sm button-primary'>
                            <span>Label</span>
                          </button>
                          <button className='button button-sm button-secondary'>
                            <span className='icon icon-heart'></span>
                            <span>Label</span>
                          </button>
                          <button className='button button-sm button-tertiary rounded-full'>
                            <span className='icon icon-heart'></span>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* currency */}
            <div className='mb-12'>

              <h2 className='mb-3'>
                Currency
              </h2>

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Coins:
                        </div>
                        <div className='flex-1 flex flex-wrap gap-2'>
                          <button className="button button-primary button-currency button-coin">
                            <div>
                              <span>Purchase</span>
                            </div>
                            <div>
                              <img className="dropshadow-xs" src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png" width="34" height="34" alt="coin" />
                              <span>15,000</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Tokens:
                        </div>
                        <div className='flex-1 flex flex-wrap gap-2'>
                          <button className="button button-primary button-currency button-token">
                            <div>
                              <span>Purchase</span>
                            </div>
                            <div>
                              <img className="dropshadow-xs" src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png" width="34" height="34" alt="coin" />
                              <span>10</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Ticket:
                        </div>
                        <div className='flex-1 flex flex-wrap gap-2'>
                          <button className="button button-primary button-currency button-ticket">
                            <div>
                              <span>Purchase</span>
                            </div>
                            <div>
                              <img className="dropshadow-xs" src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_tiket.png" width="34" height="34" alt="coin" />
                              <span>2</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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

              {/* variant: primary */}
              <div className="card rounded-lg p-4">
                <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                  <h3 className='mb-6 lg:mb-10'>
                    Loading
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Primary:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-primary is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Secondary:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-secondary is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Tertiary:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-tertiary is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Premium:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-premium is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Claim:
                        </div>
                        <div className='flex-1'>
                          <button className='button button-claim is-loading'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-300'>
                          Currency:
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
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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
