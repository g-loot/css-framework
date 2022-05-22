import DSStructure from '../../components/DesignSystem/DSStructure';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Colors() {
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
            Colors
          </h1>

          {DSdata.colors.map((item, i) => (
            <div className="mb-8">
              <div className="">
                <h2 className='text-3xl mb-2'>
                  {item.title}
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                  {item.colors.map((item2, i) => (
                      <>
                        <div className='rounded-lg overflow-hidden card'>
                          <div className={`h-32 relative ${item2.value}`}>

                          </div>
                          <div className='p-2'>
                            <div className='flex items-baseline justify-between'>
                              <div className='text-sm uppercase'>
                                {item2.name}
                              </div>
                              <div className='text-sm font-bold'>
                                {item2.number}
                              </div>
                            </div>
                            <div className='flex items-baseline justify-between'>
                              <div className='text-xs text-ui-300'>
                              {item2.hex}
                              </div>
                              <div className='text-xs text-ui-300'>
                                {item2.data}[{item2.number}]
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                  ))}
                </div>
              </div>
            </div>
          ))}



          
        </DSStructure>

    </div>
  );
}
