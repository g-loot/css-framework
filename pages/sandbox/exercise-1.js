import { getLayout } from '../../components/Sandbox/SBLayout'

const SBpage = () => (
  <div className='min-h-[100vh]'>

    <div className='max-w-sm mx-auto space-y-4 text-ui-100 leading-none mb-6'>
      <h1 className='leading-none h2'>
        Exercise #1 <small className='text-ui-300 font-normal'>introduction</small>
      </h1>
    </div>

  </div>
)

SBpage.getLayout = getLayout

export default SBpage
