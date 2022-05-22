import DSStructure from '../../components/DesignSystem/DSStructure';
import DSdata from '../api/designsystem/data.json'
import DSicons from '../api/designsystem/icons.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Icons() {
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
            Icons
          </h1>

          <div className="flex flex-wrap gap-2">
          
            {DSicons.icons.map((item, i) => (

              <div className="card card-alt rounded-lg text-0  w-40 h-40 inline-flex flex-col justify-center items-center relative transition hover:scale(105) hover:opacity-50 cursor-pointer" onClick={() => {navigator.clipboard.writeText(item.name)}}>
                <span className={`icon block icon-32 color-dark-200 hover:color-white icon-${item.name}`}></span>
                <span className="absolute bottom-0 p-2 text-ui-300 text-xs">
                  {item.name}
                </span>
              </div>
              
            ))}
          </div>

        </DSStructure>


    </div>
  );
}
