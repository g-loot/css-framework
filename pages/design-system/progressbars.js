import DSStructure from '../../components/DesignSystem/DSStructure';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Progressbar() {
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

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Progress bar
          </h1>


          {/* linear */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Linear
            </h2>
          
            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex flex-col gap-4 items-center'>
                      <div className='progressbar w-full' style={{"--percent": "15"}}>
                        <div></div>
                      </div>
                      <div className='progressbar w-full' style={{"--percent": "33"}}>
                        <div></div>
                      </div>
                      <div className='progressbar w-full' style={{"--percent": "68"}}>
                        <div></div>
                      </div>
                      <div className='progressbar w-full' style={{"--percent": "95"}}>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/r6og8tLk/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>



          {/* radial */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Radial
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center justify-center'>
                      <div className='progressbar-radial'>
                        <div>
                          <div>
                            <div className='text-2xl font-headings'>
                              15%
                            </div>
                            <div className='text-xs text-ui-300 uppercase'>
                              win rate
                            </div>
                          </div>
                        </div>
                        <svg viewBox="0 0 40 40" style={{"--percent": "15"}}>
                            <circle cx="20" cy="20" r="16" />
                        </svg>
                      </div>
                      <div className='progressbar-radial'>
                        <div>
                          <div>
                            <div className='text-2xl font-headings'>
                              33%
                            </div>
                            <div className='text-xs text-ui-300 uppercase'>
                              win rate
                            </div>
                          </div>
                        </div>
                        <svg viewBox="0 0 40 40" style={{"--percent": "33"}}>
                            <circle cx="20" cy="20" r="16" />
                        </svg>
                      </div>
                      <div className='progressbar-radial'>
                        <div>
                          <div>
                            <div className='text-2xl font-headings'>
                              68%
                            </div>
                            <div className='text-xs text-ui-300 uppercase'>
                              win rate
                            </div>
                          </div>
                        </div>
                        <svg viewBox="0 0 40 40" style={{"--percent": "68"}}>
                            <circle cx="20" cy="20" r="16" />
                        </svg>
                      </div>
                      <div className='progressbar-radial'>
                        <div>
                          <div>
                            <div className='text-2xl font-headings'>
                              95%
                            </div>
                            <div className='text-xs text-ui-300 uppercase'>
                              win rate
                            </div>
                          </div>
                        </div>
                        <svg viewBox="0 0 40 40" style={{"--percent": "95"}}>
                            <circle cx="20" cy="20" r="16" />
                        </svg>
                      </div>
                    </div>                      
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/vbk023ta/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        
        </DSStructure>

        
    </div>
  );
}
