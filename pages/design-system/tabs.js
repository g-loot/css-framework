import DSMainNav from '../../components/DesignSystem/DSMainNav';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function tabs() {
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
              Tabs
            </h1>


            {/* Structure */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                Structure
              </h2>
            
              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center justify-center'>
                          <ul class="tabs">
                            <li>
                              <a class="active">
                                <span>Brawls</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span>How it works</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span>Rules</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span>Brawl history</span>
                              </a>
                            </li>
                          </ul>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/Lez034bh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>

              </div>
            </div>



            {/* with badges */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                With badges
              </h2>
            
              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center justify-center'>
                          <ul class="tabs">
                            <li>
                              <a class="active">
                                <span data-badge="4">Brawls</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span>How it works</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span>Rules</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span data-badge="1">Brawl history</span>
                              </a>
                            </li>
                          </ul>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/zr378pqa/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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
