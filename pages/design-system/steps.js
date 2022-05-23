import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Steps() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Steps' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Steps
          </h1>


          {/* Default */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Default
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <ul className='step'>
                      <li>
                        <a href='#' className='tooltip' data-tooltip='Step 1'>Step 1</a>
                      </li>
                      <li className='is-active'>
                        <a href='#' className='tooltip' data-tooltip='Step 2'>Step 2</a>
                      </li>
                      <li>
                        <a href='#' className='tooltip' data-tooltip='Step 3'>Step 3</a>
                      </li>
                      <li>
                        <a href='#' className='tooltip' data-tooltip='Step 4'>Step 4</a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/mxsohytv/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* With bullets */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              With bullets
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <ul className='step step-secondary'>
                      <li>
                        <a href='#'>
                          <i>1</i>
                          <span>Step 1</span>
                          <hr />
                        </a>
                      </li>
                      <li className='is-active'>
                        <a href='#'>
                          <i>2</i>
                          <span>Step 2</span>
                          <hr />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i>3</i>
                          <span>Step 3</span>
                          <hr />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/mxsohytv/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


            

          
        </DSStructure>

        
    </div>
  );
}
