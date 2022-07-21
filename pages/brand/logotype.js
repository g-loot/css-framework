import Link from 'next/link'
import SiteLayout from '../../components/SiteLayout'
import { getLayout } from '../../components/Brand/BrandLayout'

const BrandPage = () => (
  <div>
    <div className='max-w-md mx-auto space-y-24 text-ui-100 leading-none mb-6'>
      <div className='flex gap-8'>
        <div className='flex-1 max-w-xs'>
          <div>
            <span className='text-main text-xl font-headings uppercase'>G-Loot</span>
            <h1 className='leading-none text-6xl uppercase'>
              Logotype
            </h1>
            <div className='h-px w-full bg-gradient-to-r from-main via-blue-700 to-blue-700/0 mt-6 mb-4'></div>
            <p className='text-xl font-headings italic text-ui-300 leading-loose'>
              Our logo is the touchstone of our brand and one of our most valuable assets and should be handled with care.
            </p>
          </div>
        </div>
      </div>
      <div className='flex gap-8'>
        <div className='flex-1'>
          <div>
            <div className='mb-6'>
              <h2 className='leading-none text-4xl'>
                Logotype versions
              </h2>
            </div>
            <p className='text-ui-300 leading-loose'>
              The preferred way to use the G-Loot logo is over a dark background. There are two versions of the G-Loot logo; a stacked and horizontal logotype. Consider space and composition for when to use which version. To ensure prominence and legibility of the logo, allow a minimum clear space around the logotype. Keep the logotype clear of messy backgrounds and other graphic elements, text or other logos. The logo is not to be altered in any shape or form, nor is it allowed to adjust its color.
            </p>
          </div>
        </div>
      </div>
      
      <div className='flex gap-8 justify-between'>
        <div>
          <Link href='visualidentity'>
            <a className='button button-ghost px-4'>
              <span className='icon icon-arrow-sm-left'/>
              <span>Our visual identity</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href='visualidentity'>
            <a className='button button-ghost hidden px-4'>
              <span>colors</span>
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
