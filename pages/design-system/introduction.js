import DSMainNav from '../../components/DesignSystem/DSMainNav';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function introduction() {
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
          <div className="pt-4 pb-8 w-full md:w-9/12 lg:w-10/12 ">
            <div className="card sm:rounded-lg overflow-hidden">

              <div className="px-4 py-12">
                <div className='max-w-sm mx-auto space-y-4 text-ui-100 leading-none mb-6'>
                  <h1 className='leading-none'>
                    G-Loot Design System <small className='text-ui-300 uppercase text-2xl'>introduction</small>
                  </h1>
                </div>
                
                <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
                  <p>
                    G-Loot Design System allows you to quickly build pages that are in line with the G-Loot brand and its user interface system.
                  </p>
                  <p>
                    Because its default theme (that can be customized for other projects thanks to its set of variables) is aligned with the G-Loot brand, the framework makes sure all pages you build with it embeds the G-Loot design system.
                  </p>
                  <p>
                    It is a utility-first framework in the sense that it provides highly composable, low-level utility classes to make it easy to build complex user interfaces.
                  </p>
                </div>

              </div>
            </div>
          </div>
          
        </div>
    </div>
  );
}
