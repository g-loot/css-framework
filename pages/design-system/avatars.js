import DSStructure from '../../components/DesignSystem/DSStructure';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Avatars() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <Head>
          <title>Gnog Prototype</title>
          <meta name="description" content="Internal playground" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Topbar />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Avatars
          </h1>


          {/* shape */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Shape
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Rounded <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <figure className='avatar'>
                          <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                        </figure>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Square
                      </div>
                      <div className='flex-1'>
                        <figure className='avatar avatar-square'>
                          <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                        </figure>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Diamond
                      </div>
                      <div className='flex-1'>
                        <figure className='avatar avatar-diamond'>
                          <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/vf5scmdb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>

              
            </div>
          </div>



          {/* size */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Size
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Large <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Medium
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-md avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Small
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-sm avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Extra small
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-xs avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Tiny
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-tiny avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3o7ztqgw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>





          {/* rank */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Rank
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Light <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Gold
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-gold'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Silver
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-silver'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Bronze
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-bronze'>
                          <figure className='avatar avatar-bronze'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/s7or0umz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* status */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Status
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Online <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Disabled
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Error
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Attention
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Info
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    
                    
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/8jr1qg4x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/* simple */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Simple
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        No border
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start items-center'>
                          <figure className='avatar avatar-simple'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-simple avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-simple avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-simple avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start items-center'>
                          <figure className='avatar avatar-square avatar-simple'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-simple avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-simple avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-simple avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start items-center'>
                          <figure className='avatar avatar-diamond avatar-simple'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-simple avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-simple avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-simple avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    
                    
                    
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/mv2yx3r8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>










            
          
        </DSStructure>

    </div>
  );
}
