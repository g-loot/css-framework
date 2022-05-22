import DSStructure from '../../components/DesignSystem/DSStructure';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Loaders() {
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
            Loaders
          </h1>


          {/* Spinner */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Spinner
            </h2>
          
            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Extra large
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className='loader loader-xl'></div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Large
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className='loader loader-lg'></div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Medium <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className='loader'></div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Small
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className='loader loader-sm'></div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Extra small
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className='loader loader-xs'></div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/9zhaL1or/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>



          {/* G-Loot loader */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              G-Loot loader
            </h2>
            
            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Extra large
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className="loader-gloot loader-xl">
                          <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Large
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className="loader-gloot loader-lg">
                          <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Medium <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className="loader-gloot">
                          <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Small
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className="loader-gloot loader-sm">
                          <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Extra small
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <div className="loader-gloot loader-xs">
                          <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/9o0wqkLy/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>

          
          
        </DSStructure>

    </div>
  );
}
