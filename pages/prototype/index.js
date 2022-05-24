import PrototypeStructure from '../../components/Prototype/PrototypeStructure';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/users/self', { delay: 1000 });

  return (
    <>
      <PrototypeStructure title="Home">
        <div className='card rounded-xl overflow-hidden carousel'>

          <div className='carousel-slides'>

            <div className='carousel-slide is-active'>
              <div className='carousel-image'>

              </div>
              
            </div>

          </div>
          <ul className='carousel-list'>
            <li>
              <a>
                <div>
                  Step 1
                </div>
                <div>
                  Lorem ipsum dolor
                </div>
                <i></i>
              </a>
            </li>
            <li>
              <a>
                <div>
                  Step 1
                </div>
                <div>
                  Lorem ipsum dolor
                </div>
                <i></i>
              </a>
            </li>
            <li>
              <a>
                <div>
                  Step 1
                </div>
                <div>
                  Lorem ipsum dolor
                </div>
                <i></i>
              </a>
            </li>
            
            <li className='carousel-nav'>
              <button class='button button-secondary'>
                <span class='icon icon-ctrl-left'></span>
              </button>
              <button class='button button-secondary'>
                <span class='icon icon-ctrl-right'></span>
              </button>
            </li>

          </ul>

        </div>
      </PrototypeStructure>
        
    </>
  );
}
