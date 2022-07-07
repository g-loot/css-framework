import Ad from '../Ad/Ad';
import Button from '../Button/Button';
import JSONstructure from '../../pages/api/prototype/structure.json'
import MainNav from '../MainNav/MainNav';
import PrototypeGamesNav from './PrototypeGamesNav';

export default function PrototypeLeftMenu(props) {
  return (
    <>
    <div className='sticky top-[68px] space-y-4'>
      <div className="surface rounded-lg overflow-hidden">
        <MainNav items={JSONstructure.pages} />
      </div>
      <PrototypeGamesNav />
      <div className='text-center'>
        <Button label='Edit favorite games' variant='ghost' icon='pen-2' size='sm'></Button>
      </div>
      <div className="rounded-xl overflow-hidden relative">
        <div className="flex flex-col xl:flex-row w-full px-4 py-8 xl:items-center xl:justify-between relative z-20">
          <div className="font-headings italic text-xl leading-tight color-dark-300 mb-4 xl:mb-0">
            Tournament<br />
            Schedule 
          </div>
          <div>
            <Button variant='secondary' icon='arrow-sm-right'></Button>
          </div>
        </div>
        <div className='absolute pointer-events-none inset-0 z-10 bg-right-bottom bg-no-repeat bg-contain rounded-xl' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653908737/Marketing/2022_prototype/bg-tournamentschedule.jpg)`}}></div>
      </div>
      <Ad width='260'height='260'/>
    </div>
    </>
  );
}