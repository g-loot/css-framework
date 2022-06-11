import Button from '../../components/Button/Button';
import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import { useRouter } from 'next/router';

export default function Buttons() {
  const router = useRouter();
  

  return (
    <div>
        <DSHead title='Buttons' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Buttons
          </h1>


          {/* variant */}
          <div className='mb-12'  id='variants'>

            <h2 className='mb-3'>
              Variants
            </h2>

            {/* variant: primary */}
            <div className="surface rounded-lg p-4">
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='mb-6 lg:mb-10'>
                  Primary
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text only
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='primary'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='primary' icon='heart'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='primary' icon='heart' iconDirection='right'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <Button variant='primary' icon='heart'></Button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              {/* variant:secondary */}
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='mb-6 lg:mb-10'>
                  Secondary
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text only
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='secondary'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='secondary' icon='heart'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='secondary' icon='heart' iconDirection='right'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <Button variant='secondary' icon='heart'></Button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/p4aq6z8m/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              
              {/* variant:tertiary */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Tertiary
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text only
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='tertiary'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='tertiary' icon='heart'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='tertiary' icon='heart' iconDirection='right'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <Button variant='tertiary' icon='heart'></Button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/y015mrt8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>




              {/* variant:premium */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Premium
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text only
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='premium'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='premium' icon='heart'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='premium' icon='heart' iconDirection='right'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <Button variant='premium' icon='heart'></Button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ed8xkz2c/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>



              {/* variant:claim */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Claim
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text only
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='claim'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon + text
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='claim' icon='heart'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Text + icon
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='claim' icon='heart' iconDirection='right'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Icon only
                      </div>
                      <div className='flex-1'>
                        <Button variant='claim' icon='heart'></Button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/yt6Lds0x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>




              {/* variant:play */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Play
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Primary
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='primary' play='true' icon='circle-caret-right'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Secondary
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='secondary' play='true' icon='circle-caret-right'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Tertiary
                      </div>
                      <div className='flex-1'>
                        <Button label='Button Label' variant='tertiary' play='true' icon='circle-caret-right'></Button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/Lu7ad39o/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>



            </div>
          </div>



          {/* Sizes */}
          <div className='mb-12' id='sizes'>

            <h2 className='mb-3'>
              Sizes
            </h2>

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Large
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Button Label' variant='primary' size='lg'></Button>
                        <Button label='Button Label' variant='secondary' icon='heart' size='lg'></Button>
                        <Button variant='tertiary' icon='heart' size='lg'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Medium <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Button Label' variant='primary' size='md'></Button>
                        <Button label='Button Label' variant='secondary' icon='heart' size='md'></Button>
                        <Button variant='tertiary' icon='heart' size='md'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Small
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Button Label' variant='primary' size='sm'></Button>
                        <Button label='Button Label' variant='secondary' icon='heart' size='sm'></Button>
                        <Button variant='tertiary' icon='heart' size='sm'></Button>
                      </div>
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/n7b2judx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* currency */}
          <div className='mb-12' id='currency'>

            <h2 className='mb-3'>
              Currency
            </h2>

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Coins
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='primary' currency='coin' amount='15,000'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Tokens
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='primary' currency='token' amount='10'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Ticket
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='primary' currency='ticket' amount='2'></Button>
                      </div>
                    </div>

                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='secondary' currency='coin' amount='15,000'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='secondary' currency='token' amount='10'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='secondary' currency='ticket' amount='2'></Button>
                      </div>
                    </div>

                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='tertiary' currency='coin' amount='15,000'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='tertiary' currency='token' amount='10'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='tertiary' currency='ticket' amount='2'></Button>
                      </div>
                    </div>

                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='premium' currency='coin' amount='15,000'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='premium' currency='token' amount='10'></Button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <Button label='Purchase' variant='premium' currency='ticket' amount='2'></Button>
                      </div>
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/z1fpx59h/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* close */}
          <div className='mb-12' id='close'>

            <h2 className='mb-3'>
              Close
            </h2>

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Coins
                      </div>
                      <div className='flex-1 flex flex-wrap gap-2'>
                        <button className="button button-primary button-close">
                          <span className='icon icon-e-remove'></span>
                        </button>
                        <button className="button button-secondary button-close">
                          <span className='icon icon-e-remove'></span>
                        </button>
                        <button className="button button-tertiary button-close">
                          <span className='icon icon-e-remove'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/pL6kq5cm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>








          {/* status */}
          <div className='mb-12' id='status'>

            <h2 className='mb-3'>
              Status
            </h2>

            {/* status: loading */}
            <div className="surface rounded-lg p-4">
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='mb-6 lg:mb-10'>
                  Loading
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Primary
                      </div>
                      <div className='flex-1'>
                        <button className='button button-primary is-loading'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Secondary
                      </div>
                      <div className='flex-1'>
                        <button className='button button-secondary is-loading'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Tertiary
                      </div>
                      <div className='flex-1'>
                        <button className='button button-tertiary is-loading'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Premium
                      </div>
                      <div className='flex-1'>
                        <button className='button button-premium is-loading'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Claim
                      </div>
                      <div className='flex-1'>
                        <button className='button button-claim is-loading'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Currency
                      </div>
                      <div className='flex-1'>
                        <button className="button button-primary button-currency button-coin is-loading">
                          <div>
                            <span>Purchase</span>
                          </div>
                          <div>
                            <img className="dropshadow-xs" src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png" width="34" height="34" alt="coin" />
                            <span>2,000</span>
                          </div>
                        </button>
                      </div>
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/xn2y8qfr/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>


              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='mb-6 lg:mb-10'>
                  Disabled
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Primary
                      </div>
                      <div className='flex-1'>
                        <button className='button button-primary is-disabled'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Secondary
                      </div>
                      <div className='flex-1'>
                        <button className='button button-secondary is-disabled'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Tertiary
                      </div>
                      <div className='flex-1'>
                        <button className='button button-tertiary is-disabled'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Premium
                      </div>
                      <div className='flex-1'>
                        <button className='button button-premium is-disabled'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Claim
                      </div>
                      <div className='flex-1'>
                        <button className='button button-claim is-disabled'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Currency
                      </div>
                      <div className='flex-1'>
                        <button className="button button-primary button-currency button-coin is-disabled">
                          <div>
                            <span>Purchase</span>
                          </div>
                          <div>
                            <img className="dropshadow-xs" src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png" width="34" height="34" alt="coin" />
                            <span>2,000</span>
                          </div>
                        </button>
                      </div>
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/futbsxan/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>




              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='mb-6 lg:mb-10'>
                  Shining
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Primary
                      </div>
                      <div className='flex-1'>
                        <button className='button button-primary is-shining'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Premium
                      </div>
                      <div className='flex-1'>
                        <button className='button button-premium is-shining'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Claim
                      </div>
                      <div className='flex-1'>
                        <button className='button button-claim is-shining'>
                          <span>Button Label</span>
                        </button>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Currency
                      </div>
                      <div className='flex-1'>
                        <button className="button button-primary button-currency button-coin is-shining">
                          <div>
                            <span>Purchase</span>
                          </div>
                          <div>
                            <img className="dropshadow-xs" src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png" width="34" height="34" alt="coin" />
                            <span>2,000</span>
                          </div>
                        </button>
                      </div>
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/futbsxan/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>


            </div>
          </div>


        </DSStructure>

    </div>
  );
}
