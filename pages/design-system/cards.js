import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Cards() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Cards' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>
          <h1 className='mb-2 mx-2 md:mx-0'>
            Cards
          </h1>


          <div className='mb-10'>
            <h2 className='h3 mb-3 mx-2 md:mx-0'>
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
            <h2 className='h3 mb-3 mx-2 md:mx-0'>
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
          
        </DSStructure>

        
    </div>
  );
}
