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
              Chips
            </h1>


            {/* default */}
            <div className='mb-12'>

              <h2 className='mb-3'>
                Default
              </h2>

              {/* default: primary */}
              <div className="card rounded-lg p-4">
                <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                  <h3 className='mb-6 lg:mb-10'>
                    Primary
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Text only
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-primary'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                        Icon + text
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-primary'>
                            <span className='icon icon-circle-caret-right'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                        Text + icon
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-primary'>
                            <span>Label</span>
                            <span className='icon icon-circle-caret-right'></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/05mw2vj6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>

                {/* default: secondary */}
                <div className=''>
                  <h3 className='mb-6 lg:mb-10'>
                    Secondary
                  </h3>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Text only
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-secondary'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                        Icon + text
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-secondary'>
                            <span className='icon icon-circle-caret-right'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                        Text + icon
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-secondary'>
                            <span>Label</span>
                            <span className='icon icon-circle-caret-right'></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jm5q8oap/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* sliced */}
            <div className='mb-12'>

              <h2 className='mb-3'>
                Sliced
              </h2>

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Green
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-sliced'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Blue
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-sliced chip-blue'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Gray
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-sliced chip-gray'>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3m9k845g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Default
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-status'>
                            <span className='icon icon-calendar-date-2'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Attention
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-status chip-attention'>
                            <span className='icon icon-warning-sign'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Success
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-status chip-success'>
                            <span className='icon icon-check'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Info
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-status chip-info'>
                            <span className='icon icon-c-info'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Error
                        </div>
                        <div className='flex-1'>
                          <button className='chip chip-status chip-error'>
                            <span className='icon icon-s-ban'></span>
                            <span>Label</span>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3m9k845g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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
