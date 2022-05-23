import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Chips() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Chips' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Chips
          </h1>


          {/* default */}
          <div className='mb-12'>

            <h2 className='mb-3'>
              Default
            </h2>

            {/* default: primary */}
            <div className="card rounded-lg p-4">
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='mb-6 lg:mb-10'>
                  Primary
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Text only
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-primary'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      Icon + text
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-primary'>
                          <span className='icon icon-circle-caret-right'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      Text + icon
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-primary'>
                          <span>Label</span>
                          <span className='icon icon-circle-caret-right'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/05mw2vj6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              {/* default: secondary */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Secondary
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Text only
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-secondary'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      Icon + text
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-secondary'>
                          <span className='icon icon-circle-caret-right'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      Text + icon
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-secondary'>
                          <span>Label</span>
                          <span className='icon icon-circle-caret-right'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jm5q8oap/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Sliced */}
          <div className='mb-12'>

            <h2 className='mb-3'>
              Sliced
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Green <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-sliced'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Blue
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-sliced chip-blue'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Gray
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-sliced chip-gray'>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3m9k845g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Reward */}
          <div className='mb-12'>

            <h2 className='mb-3'>
              Reward
            </h2>

            {/* Reward: XP */}
            <div className="card rounded-lg p-4">
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='mb-6 lg:mb-10'>
                  XP
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Normal
                      </div>
                      <div className='chip chip-reward chip-xp'>
                        <span className='icon icon-xp-symbol-outline'></span>
                        <span>500</span>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      Inverted
                      </div>
                      <div className='chip chip-reward chip-xp chip-inverted'>
                        <span className='icon icon-xp-symbol-outline'></span>
                        <span>500</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/05mw2vj6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              {/* Reward: token */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Token
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                  <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Normal
                      </div>
                      <div className='chip chip-reward chip-token'>
                        <span className='icon icon-token'></span>
                        <span>10</span>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      Inverted
                      </div>
                      <div className='chip chip-reward chip-token chip-inverted'>
                        <span className='icon icon-token'></span>
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jm5q8oap/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
              
              {/* Reward: ticket */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Ticket
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                  <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Normal
                      </div>
                      <div className='chip chip-reward chip-ticket'>
                        <span className='icon icon-ticket'></span>
                        <span>1</span>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      Inverted
                      </div>
                      <div className='chip chip-reward chip-ticket chip-inverted'>
                        <span className='icon icon-ticket'></span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jm5q8oap/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>


              {/* Reward: small */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Small
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                  <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Small
                      </div>
                      <div className='chip chip-reward chip-ticket chip-inverted chip-sm'>
                        <span className='icon icon-ticket'></span>
                        <span>1 ticket</span>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      </div>
                      <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                        <span className='icon icon-xp-symbol-outline'></span>
                        <span>500 XP</span>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      </div>
                      <div className='chip chip-reward chip-token chip-inverted chip-sm'>
                        <span className='icon icon-token'></span>
                        <span>500 tokens</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jm5q8oap/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>

            
          </div>


          {/* status */}
          <div className='mb-12'>

            <h2 className='mb-3'>
              Status
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Default <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-status'>
                          <span className='icon icon-calendar-date-2'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Attention
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-status chip-attention'>
                          <span className='icon icon-warning-sign'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Success
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-status chip-success'>
                          <span className='icon icon-check'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Info
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-status chip-info'>
                          <span className='icon icon-c-info'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Error
                      </div>
                      <div className='flex-1'>
                        <button className='chip chip-status chip-error'>
                          <span className='icon icon-s-ban'></span>
                          <span>Label</span>
                        </button>
                      </div>
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3m9k845g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </DSStructure>

        
    </div>
  );
}
