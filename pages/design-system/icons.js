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
              Icons
            </h1>

            <div class="flex flex-wrap gap-2">
            
              {DSdata.icons.map((item, i) => (

                <div className="card card-alt rounded-lg text-0  w-40 h-40 inline-flex flex-col justify-center items-center relative transition hover:scale(105) hover:opacity-50 cursor-pointer" onClick={() => {navigator.clipboard.writeText(item.name)}}>
                  <span className={`icon block icon-32 color-dark-200 hover:color-white icon-${item.name}`}></span>
                  <span className="absolute bottom-0 p-2 text-ui-300 text-xs">
                    {item.name}
                  </span>
                </div>
                
              ))}
            </div>


            
          </div>
          
        </div>
    </div>
  );
}
