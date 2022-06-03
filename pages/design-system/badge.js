import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Badge() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Badge' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            Badge
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
                    <div className='w-full flex flex-wrap gap-8 items-center justify-center'>
                        <div data-badge=".">
                          Notifications
                        </div>
                        <div data-badge="8">
                          Notifications
                        </div>
                        <div data-badge="88">
                          Notifications
                        </div>
                        <div data-badge="888">
                          Notifications
                        </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/useoh40x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>



          {/* with badges */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Badges everywhere
            </h2>
          
            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex flex-wrap gap-8 items-center justify-center'>
                      <button className='button button-secondary' data-badge="88">
                        <span>Notifications</span>
                      </button>
                      <figure className='avatar avatar-simple' data-badge="88">
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                      </figure>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/sqetj4yp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* Colors */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Colors
            </h2>
          
            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex flex-wrap gap-8 items-center justify-center'>
                        <div data-badge="." className='after:bg-info-500'>
                          Notifications
                        </div>
                        <div data-badge="8" className='after:bg-error-500'>
                          Notifications
                        </div>
                        <div data-badge="88" className='after:bg-attention-500'>
                          Notifications
                        </div>
                        <div data-badge="888" className='after:bg-sucess-500'>
                          Notifications
                        </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/kxd57qu8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </DSStructure>

    </div>
  );
}
