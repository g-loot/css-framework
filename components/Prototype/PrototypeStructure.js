import Ad from '../Ad/Ad';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import Icon from '../Icon/Icon';
import JSONstructure from '../../pages/api/prototype/structure.json'
import MainNav from '../MainNav/MainNav';
import PrototypeGamesNav from './PrototypeGamesNav';
import PrototypeHead from './PrototypeHead';
import Topbar from '../Topbar/Topbar';
import { useRouter } from 'next/router'

export default function PrototypeStructure({children, title}) {
  const router = useRouter();
  return (
    <>
      <PrototypeHead title={title} />
      <Topbar />
      <div className="container flex mx-auto md:gap-12 md:px-4 2xl:px-0">
        <div className="hidden md:block top-16 w-auto md:w-3/12 xl:w-2/12 py-4">
          <div className='sticky top-[68px] space-y-4'>
            <div className="surface rounded-lg overflow-hidden">
              <MainNav items={JSONstructure.pages} />
            </div>
            <PrototypeGamesNav />
            <div className='text-center'>
              <Button label='Edit favorite games' variant='ghost' icon='pen-2' size='sm'></Button>
            </div>
            <div className="rounded-xl overflow-hidden relative">
              <i></i>
              <div>
                <div className="flex flex-col xl:flex-row w-full px-4 py-8 xl:items-center xl:justify-between relative z-20">
                  <div className="font-headings italic text-xl leading-tight color-dark-300 mb-4 xl:mb-0">
                    Tournament<br />
                    Schedule 
                  </div>
                  <div>
                    <Button variant='secondary' icon='arrow-sm-right'></Button>
                  </div>
                </div>
                <div className='absolute pointer-events-none inset-0 z-10 bg-right-bottom bg-no-repeat bg-contain' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653908737/Marketing/2022_prototype/bg-tournamentschedule.jpg)`}}></div>
              </div>
            </div>
            <Ad width='260'height='260'/>
          </div>
        </div>
        <div className="pt-4 pb-8 w-full md:w-9/12 xl:w-10/12 ">
          {children}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
};