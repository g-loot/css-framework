import DSMainNav from '../../components/DesignSystem/DSMainNav';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function pagination() {
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
              Pagination
            </h1>


            {/* variant */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                Default
              </h2>
            
              {/* variant: primary */}
              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                       
                        <div className='flex-1'>
                          <ul class="pagination">
                            <li>
                              <a href="#" tabindex="-1">Previous</a>
                            </li>
                            <li class="is-active">
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li>
                              <span>...</span>
                            </li>
                            <li>
                              <a href="#">12</a>
                            </li>
                            <li>
                              <a href="#">Next</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/meq07cau/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>

              </div>
            </div>



            {/* bullet */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                Bullet
              </h2>

              <div className="card rounded-lg p-4">
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 space-y-4'>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='flex-1 flex flex-wrap gap-2'>
                          <ul class="pagination pagination-bullet">
                            <li>
                              <a href="#" tabindex="-1"></a>
                            </li>
                            <li class="is-active">
                              <a href="#"></a>
                            </li>
                            <li>
                              <a href="#"></a>
                            </li>
                            <li>
                              <a href="#"></a>
                            </li>
                            <li>
                              <a href="#"></a>
                            </li>
                          </ul>
                        </div>
                      </div>                      
                    </div>
                    <div className='flex-1'>
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/yfctqeLo/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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
