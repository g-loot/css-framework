import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Mdodal() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Modal' />

        <DSTopBar />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Modal
          </h1>


          {/* Structure */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Structure
            </h2>

            <div className='mb-10'>
              <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-3'>
                  <div className='modal-container card'>
                    <button className="button button-secondary button-close">
                      <span className='icon icon-e-remove'></span>
                    </button>
                    <div className='modal-image'>
                      <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`}}></span>
                    </div>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <h2 className='modal-title'>
                          Leave party?
                        </h2>
                        <p>
                        We are looking to find you the best match. Leaving the party means you lose your spot in the queue for the tournament.
                        </p>
                      </div>
                      <div className='modal-action'>
                        <button className='button button-primary'>
                          <span>Stay in party</span>
                        </button>
                        <button className='button button-secondary'>
                          <span>Leave party</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className='flex-2'>
                  <iframe className="rounded-lg" width="100%" height="345" src="//jsfiddle.net/augustin_hiebel/tqkcsob4/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                </div>
              </div>
            </div>
          
            
          </div>


          {/* Inverted */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Inverted
            </h2>

            <div className='mb-10'>
              <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-3'>
                  <div className='modal-container modal-inverted card'>
                    <button className="button button-secondary button-close">
                      <span className='icon icon-e-remove'></span>
                    </button>
                    <div className='modal-image'>
                      <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`}}></span>
                    </div>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <h2 className='modal-title'>
                          Leave party?
                        </h2>
                        <p>
                        We are looking to find you the best match. Leaving the party means you lose your spot in the queue for the tournament.
                        </p>
                      </div>
                      <div className='modal-action'>
                        <button className='button button-primary'>
                          <span>Stay in party</span>
                        </button>
                        <button className='button button-secondary'>
                          <span>Leave party</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className='flex-2'>
                  <iframe className="rounded-lg" width="100%" height="345" src="//jsfiddle.net/augustin_hiebel/wz2hme07/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                </div>
              </div>
            </div>
          
            
          </div>



          {/* Inverted */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Inverted
            </h2>

            <div className='mb-10'>
              <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-3'>
                  <div className='modal-container  card'>
                    <button className="button button-secondary button-close">
                      <span className='icon icon-e-remove'></span>
                    </button>
                    <div className='modal-image'>
                      <img src='https://res.cloudinary.com/gloot/image/upload/v1653326622/Marketing/2022_prototype/DummyContent/trophy.png' width='200' height='auto' alt='Trophy' />
                    </div>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <h2 className='modal-title'>
                          Leave party?
                        </h2>
                        <p>
                        We are looking to find you the best match. Leaving the party means you lose your spot in the queue for the tournament.
                        </p>
                      </div>
                      <div className='modal-action'>
                        <button className='button button-primary'>
                          <span>Stay in party</span>
                        </button>
                        <button className='button button-secondary'>
                          <span>Leave party</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className='flex-2'>
                  <iframe className="rounded-lg" width="100%" height="345" src="//jsfiddle.net/augustin_hiebel/wz2hme07/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                </div>
              </div>
            </div>
          
            
          </div>

        
        
        </DSStructure>

        
    </div>
  );
}
