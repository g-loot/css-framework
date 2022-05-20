import DSMainNav from '../../components/DesignSystem/DSMainNav';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function DSIntroduction() {
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

        <div className="container flex mx-auto md:space-x-12">
          <div className="hidden md:block sticky h-screen w-auto md:w-3/12 lg:w-2/12 py-4">
            <DSMainNav data={DSdata} />
          </div>
          <div className="pt-4 pb-8 w-full md:w-9/12 lg:w-10/12">
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
                        <div className='w-1/3 text-ui-400 text-right'>
                          Rounded <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                        </div>
                        <div className='flex-1'>
                          <div className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Square
                        </div>
                        <div className='flex-1'>
                          <div className='avatar avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Diamond
                        </div>
                        <div className='flex-1'>
                          <div className='avatar avatar-diamond'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </div>
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
                        <div className='w-1/3 text-ui-400 text-right'>
                          Large <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                        </div>
                        <div className='flex-1'>
                          <div className='flex gap-4 justify-start'>
                            <div className='avatar'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                            <div className='avatar avatar-square'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Medium
                        </div>
                        <div className='flex-1'>
                          <div className='flex gap-4 justify-start'>
                            <div className='avatar avatar-md'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                            <div className='avatar avatar-md avatar-square'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Small
                        </div>
                        <div className='flex-1'>
                          <div className='flex gap-4 justify-start'>
                            <div className='avatar avatar-sm'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                            <div className='avatar avatar-sm avatar-square'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Extra small
                        </div>
                        <div className='flex-1'>
                          <div className='flex gap-4 justify-start'>
                            <div className='avatar avatar-xs'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                            <div className='avatar avatar-xs avatar-square'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Tiny
                        </div>
                        <div className='flex-1'>
                          <div className='flex gap-4 justify-start'>
                            <div className='avatar avatar-tiny'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                            <div className='avatar avatar-tiny avatar-square'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
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
                        <div className='w-1/3 text-ui-400 text-right'>
                          Light <button className='chip chip-sm chip-secondary pointer-events-none'><span>default</span></button>
                        </div>
                        <div className='flex-1'>
                          <div className='flex gap-4 justify-start'>
                            <div className='avatar'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Gold
                        </div>
                        <div className='flex-1'>
                          <div className='flex gap-4 justify-start'>
                            <div className='avatar avatar-gold'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Silver
                        </div>
                        <div className='flex-1'>
                          <div className='flex gap-4 justify-start'>
                            <div className='avatar avatar-silver'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex gap-4 items-center'>
                        <div className='w-1/3 text-ui-400 text-right'>
                          Bronze
                        </div>
                        <div className='flex-1'>
                          <div className='flex gap-4 justify-bronze'>
                            <div className='avatar avatar-bronze'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                            </div>
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










            
          </div>
          
        </div>
    </div>
  );
}
