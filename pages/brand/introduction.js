import Link from 'next/link'
import SiteLayout from '../../components/SiteLayout'
import { getLayout } from '../../components/Brand/BrandLayout'

const BrandPage = () => (
  <div>
    <img className='mb-8' src='https://res.cloudinary.com/gloot/image/upload/v1655896333/Marketing/2022_prototype/Brand/brand-styleguide.webp' width="100%" height='auto' alt='Stryda style guide' />
    <div className='max-w-md mx-auto space-y-24 text-ui-100 leading-none mb-6'>
      <div className='flex gap-8 flex-col lg:flex-row items-stretch justify-start'>
        <div className='flex-1 lg:border-r border-ui-400/25 pr-8 space-y-2 lg:pt-2'>
          <div className='lg:text-right'>
            <span className='text-ui-300 text-lg uppercase'>Stryda Styleguide</span>
            <h1 className='leading-none'>
              Introduction
            </h1>
          </div>
        </div>
        <div className='flex-1 leading-loose text-ui-300 space-y-4'>
          <p>
            This guide is created for everyone at Stryda to help maintain a coherent design language across all platforms and touch points, to speed up production and build brand awareness through consistency.
          </p>
          <p>
            The expression of Stryda is modern, exciting and engaging. We want to let our players and users feel that every part of the Stryda experience is crafted with care.
          </p>
        </div>
      </div>
      <div className='flex gap-8 justify-between'>
        <div />
        <div>
          <Link href='visualidentity'>
            <a className='button button-ghost px-4'>
              <span>Our visual identity</span>
              <span className='icon icon-arrow-sm-right'/>
            </a>
          </Link>
        </div>
      </div>
    </div>

    
    

  </div>
)

BrandPage.getLayout = getLayout

export default BrandPage
