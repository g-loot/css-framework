import DSMainNav from '../../components/DesignSystem/DSMainNav';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function selectinputs() {
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
              Radio, checkbox, switch
            </h1>


            {/* Radio */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                Radio
              </h2>

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='flex-1 space-y-4'>
                          <div className="form-group">
                            <label className="form-radio">
                              <input type="radio" name="gender" checked />
                              <i className="form-icon"></i> Male
                            </label>
                            <label className="form-radio">
                              <input type="radio" name="gender" />
                              <i className="form-icon"></i> Female
                            </label>
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


            {/* Switch */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                Switch
              </h2>

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='flex-1 space-y-4'>
                          <div className="form-group">
                            <label className="form-switch">
                              <input type="checkbox" name="notification" />
                              <i className="form-icon"></i> Send me notifications with news and tips
                            </label>
                            <label className="form-switch">
                              <input type="checkbox" name="notification" />
                              <i className="form-icon"></i> Send me emails with news and tips
                            </label>
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


            {/* Checkbox */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                Checkbox
              </h2>

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='flex-1 space-y-4'>
                          <div className="form-group">
                            <label className="form-checkbox">
                              <input type="checkbox" name="policy" />
                              <i className="form-icon"></i> I agree with your policy
                            </label>
                            <label className="form-checkbox">
                              <input type="checkbox" name="policy" />
                              <i className="form-icon"></i> I confirm that I have read the policity
                            </label>
                          </div>
                          <div className="form-group">
                            <label className="form-checkbox">
                              <input type="checkbox" name="select-all" indeterminate="true" />
                              <i className="form-icon"></i> Select all
                            </label>
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
                          <div className="form-group" data-error="Please choose an option.">
                            <label className="form-radio">
                              <input type="radio" name="input-error" />
                              <i className="form-icon"></i> Male
                            </label>
                          </div>
                          <div className="form-group" data-success="Please choose an option.">
                            <label className="form-switch">
                              <input type="checkbox" name="input-success" />
                              <i className="form-icon"></i> I agree with your policy
                            </label>
                          </div>
                          <div className="form-group" data-attention="Please choose an option.">
                            <label className="form-checkbox">
                              <input type="checkbox" name="input-attention" />
                              <i className="form-icon"></i> I confirm that I have read the policity
                            </label>
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


            
          </div>
          
        </div>
    </div>
  );
}
