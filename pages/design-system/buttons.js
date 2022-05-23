import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Buttons() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Buttons' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>

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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Text only
                      </div>
                      <div className='flex-1'>
                        <button className='button button-primary'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <button className='button button-primary'>
                          <span className='icon icon-heart'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <button className='button button-primary'>
                          <span>Label</span>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <button className='button button-primary rounded-full'>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Text only
                      </div>
                      <div className='flex-1'>
                        <button className='button button-secondary'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <button className='button button-secondary'>
                          <span className='icon icon-heart'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <button className='button button-secondary'>
                          <span>Label</span>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <button className='button button-secondary rounded-full'>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/p4aq6z8m/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Large
                      </div>
                      <div className='flex-1'>
                        <button className='button button-tertiary'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <button className='button button-tertiary'>
                          <span className='icon icon-heart'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <button className='button button-tertiary'>
                          <span>Label</span>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <button className='button button-tertiary rounded-full'>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/y015mrt8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Large
                      </div>
                      <div className='flex-1'>
                        <button className='button button-premium'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <button className='button button-premium'>
                          <span className='icon icon-heart'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <button className='button button-premium'>
                          <span>Label</span>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <button className='button button-premium rounded-full'>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ed8xkz2c/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Large
                      </div>
                      <div className='flex-1'>
                        <button className='button button-claim'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <button className='button button-claim'>
                          <span className='icon icon-heart'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <button className='button button-claim'>
                          <span>Label</span>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <button className='button button-claim rounded-full'>
                          <span className='icon icon-heart'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/yt6Lds0x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>




              {/* variant:play */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Play
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Primary:
                      </div>
                      <div className='flex-1'>
                        <button className='button button-primary button-play'>
                          <span className='icon icon-circle-caret-right'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Secondary:
                      </div>
                      <div className='flex-1'>
                        <button className='button button-secondary button-play'>
                          <span className='icon icon-circle-caret-right'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Tertiary:
                      </div>
                      <div className='flex-1'>
                        <button className='button button-tertiary button-play'>
                          <span className='icon icon-circle-caret-right'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/yt6Lds0x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Large
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Medium <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Small
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/n7b2judx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Coins
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Tokens
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
                      <div className='w-1/4 text-ui-400 text-right'>
                        Ticket
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/z1fpx59h/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* close */}
          <div className='mb-12'>

            <h2 className='mb-3'>
              Close
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Coins
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <button className="button button-primary button-close">
                          <span className='icon icon-e-remove'></span>
                        </button>
                        <button className="button button-secondary button-close">
                          <span className='icon icon-e-remove'></span>
                        </button>
                        <button className="button button-tertiary button-close">
                          <span className='icon icon-e-remove'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/z1fpx59h/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/xn2y8qfr/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/futbsxan/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/futbsxan/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>


            </div>
          </div>


        </DSStructure>

    </div>
  );
}
