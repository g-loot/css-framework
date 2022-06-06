import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import { useRouter } from 'next/router';

export default function Avatars() {
  const router = useRouter();
  

  return (
    <div>
        <DSHead title='Avatars' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Avatars
          </h1>


          {/* shape */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Shape
            </h2>

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Rounded <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <figure className='avatar'>
                          <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                        </figure>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Square
                      </div>
                      <div className='flex-1'>
                        <figure className='avatar avatar-square'>
                          <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                        </figure>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Diamond
                      </div>
                      <div className='flex-1'>
                        <figure className='avatar avatar-diamond'>
                          <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/vf5scmdb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Large <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Medium
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-md avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Small
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-sm avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Extra small
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-xs avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Tiny
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-tiny avatar-square'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3o7ztqgw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Light <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Gold
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-gold'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Silver
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-start'>
                          <figure className='avatar avatar-silver'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Bronze
                      </div>
                      <div className='flex-1'>
                        <div className='flex gap-4 justify-bronze'>
                          <figure className='avatar avatar-bronze'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/s7or0umz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Online <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Disabled
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled"></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Error
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error"></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Attention
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention"></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Info
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info"></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Radar
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="radar"></i>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="disabled radar"></i>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="error radar"></i>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="attention radar"></i>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                            <i className="info radar"></i>
                          </figure>
                        </div>
                      </div>
                    </div>
                    
                    
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/8jr1qg4x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        No border
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar avatar-simple'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-simple avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-simple avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-simple avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar avatar-square avatar-simple'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-simple avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-simple avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-simple avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar avatar-diamond avatar-simple'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-simple avatar-md'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-simple avatar-sm'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-simple avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    
                    
                    
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/mv2yx3r8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/* With icon */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              With icon
            </h2>

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        Works with any icon
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar'>
                            <span className='icon icon-profile-2'></span>
                          </figure>
                          <figure className='avatar avatar-md'>
                            <span className='icon icon-profile-2'></span>
                          </figure>
                          <figure className='avatar avatar-sm'>
                            <span className='icon icon-profile-2'></span>
                          </figure>
                          <figure className='avatar avatar-xs'>
                            <span className='icon icon-profile-2'></span>
                          </figure>
                          <figure className='avatar avatar-tiny'>
                            <span className='icon icon-profile-2'></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar avatar-square'>
                            <span className='icon icon-multiple-11'></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-md'>
                            <span className='icon icon-multiple-11'></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-sm'>
                            <span className='icon icon-multiple-11'></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-xs'>
                            <span className='icon icon-multiple-11'></span>
                          </figure>
                          <figure className='avatar avatar-square avatar-tiny'>
                            <span className='icon icon-multiple-11'></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                        
                      </div>
                      <div className='flex-1'>
                        <div className='flex flex-wrap gap-4 justify-start items-center'>
                          <figure className='avatar avatar-diamond'>
                            <span className='icon icon-handheld-console-2'></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-md'>
                            <span className='icon icon-handheld-console-2'></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-sm'>
                            <span className='icon icon-handheld-console-2'></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-xs'>
                            <span className='icon icon-handheld-console-2'></span>
                          </figure>
                          <figure className='avatar avatar-diamond avatar-tiny'>
                            <span className='icon icon-handheld-console-2'></span>
                          </figure>
                        </div>
                      </div>
                    </div>
                    
                    
                    
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/L86wt5ok/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>










            
          
        </DSStructure>

    </div>
  );
}
