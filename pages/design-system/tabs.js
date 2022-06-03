import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Tabs() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Tabs' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Tabs
          </h1>


          {/* Structure */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Structure
            </h2>
          
            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center justify-center'>
                        <ul className="tabs">
                          <li>
                            <a className="active">
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/Lez034bh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>



          {/* with badges */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              With badges
            </h2>
          
            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center justify-center'>
                        <ul className="tabs">
                          <li>
                            <a className="active">
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/zr378pqa/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>

          
          
        </DSStructure>

        
    </div>
  );
}
