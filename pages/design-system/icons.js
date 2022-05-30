import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import DSicons from '../api/designsystem/icons.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Icons() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Icons' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>


         <h1 className='mb-2 mx-2 md:mx-0'>
            Icons
          </h1>

          <div className="flex flex-wrap gap-2">
          
            {DSicons.icons.map((item, index) => (

              <div key={index} className="card card-alt rounded-lg text-0  w-40 h-40 inline-flex flex-col justify-center items-center relative transition hover:scale(105) hover:opacity-50 cursor-pointer" onClick={() => {navigator.clipboard.writeText(item.name)}}>
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
