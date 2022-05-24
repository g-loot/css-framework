import JSONstructure from '../../pages/api/prototype/structure.json'
import MainNav from '../MainNav/MainNav';
import PrototypeHead from './PrototypeHead';
import Topbar from '../Topbar/Topbar';
import { useRouter } from 'next/router'

export default function PrototypeStructure({children, title}) {
  const router = useRouter();
  return (
    <>
      <PrototypeHead title={title} />
      <Topbar />
      <div className="container flex mx-auto space-x-12">
        <div className="hidden md:block sticky h-screen w-auto md:w-3/12 lg:w-2/12 py-4">
          <div className="card rounded-lg overflow-hidden">
            <MainNav items={JSONstructure.pages} />
          </div>
        </div>
        <div className="pt-4 pb-8 w-full md:w-9/12 lg:w-10/12 ">
          {children}
        </div>
      </div>
    </>
  )
};