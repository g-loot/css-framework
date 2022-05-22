import DSStructure from '../../components/DesignSystem/DSStructure';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Cards() {
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


          
        </DSStructure>

        <div className="container flex mx-auto md:space-x-12">
          <div className="hidden md:block sticky h-screen w-auto md:w-3/12 lg:w-2/12 py-4">
            <DSMainNav data={DSdata} />
          </div>
          <div className="pt-4 pb-8 w-full md:w-9/12 lg:w-10/12">
            <h1 className='mb-2'>
              Cards
            </h1>


            <div className='mb-10'>
              <h2 className='h3 mb-3'>
                Normal card
              </h2>
              <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-1 card rounded-lg aspect-square'>
                </div>
                <div className='flex-1'>
                  <iframe className="rounded-lg" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/zvsfkj25/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                </div>
              </div>
            </div>


            <div className='mb-10'>
              <h2 className='h3 mb-3'>
                Halo card
              </h2>
              <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-1 grid grid-cols-2 grid-rows-2 gap-4'>
                  <div className='card card-halo rounded-lg aspect-square'>
                  </div>
                  <div className='card card-halo halo-l rounded-lg aspect-square'>
                  </div>
                  <div className='card card-halo halo-r rounded-lg aspect-square'>
                  </div>
                  <div className='card card-halo halo-t rounded-lg aspect-square'>
                  </div>
                </div>
                <div className='flex-1'>
                  <iframe className="rounded-lg" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ucvtxz19/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                </div>
              </div>
            </div>

            


            
          </div>
          
        </div>
    </div>
  );
}
