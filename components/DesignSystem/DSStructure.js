import DSMainNav from '../../components/DesignSystem/DSMainNav';
import { useRouter } from 'next/router'

export default function DSStructure({children, data}) {
  const router = useRouter();
  return (
    <>
    <div className="container flex mx-auto md:space-x-12">
      <div className="hidden md:block sticky h-screen w-auto md:w-3/12 lg:w-2/12 py-4">
        <DSMainNav data={data} />
      </div>
      <div className="pt-4 pb-8 w-full md:w-9/12 lg:w-10/12">
        {children}
      </div>
    </div>
    </>
  )
};