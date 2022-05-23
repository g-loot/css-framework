import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Introduction() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Introduction' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>

          <div className="card sm:rounded-lg overflow-hidden">

            <div className="px-4 py-12">
              <div className='max-w-sm mx-auto space-y-4 text-ui-100 leading-none mb-6'>
                <h1 className='leading-none'>
                  G-Loot Framework <small className='text-ui-300 uppercase text-2xl'>introduction</small>
                </h1>
              </div>
              
              <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
                <p>
                  G-Loot Framework is a centralized front-end design system that allows any developer to quickly build pages that are in line with the G-Loot brand and its user interface system.
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
          
        </DSStructure>

        
    </div>
  );
}
