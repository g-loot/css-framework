import Link from 'next/link'
import SiteLayout from '../../components/SiteLayout'
import { getLayout } from '../../components/Brand/BrandLayout'

const BrandPage = () => (
  <div>
    <div className='max-w-md mx-auto space-y-24 text-ui-100 leading-none mb-6'>
      <div className='flex gap-8 flex-col lg:flex-row items-stretch justify-start'>
        <div className='flex-1 lg:border-r border-ui-400/25 pr-8 space-y-2 lg:pt-2 relative'>
          <div className='lg:text-right'>
            <span className='text-ui-300 text-lg font-headings font-bold uppercase'>G-Loot Styleguide</span>
            <h1 className='leading-none'>
              Our visual identity
            </h1>
          </div>

          <div className="absolute z-10 hidden lg:block bottom-8 -left-24 scale-110">
            <video autoPlay playsInline loop preload width="700" height="auto">
              <source type="video/webm" src="https://res.cloudinary.com/gloot/video/upload/v1649858076/Marketing/202109_gloot2/GMSD_Trophy_Tilted_360_Rotaion_Loop_0001.webm" />
            </video>
          </div>

          <div className='absolute bottom-0 right-0 z-0 rounded-full bg-gradient-to-r from-main via-blue-700 to-main/0 w-32 h-32 scale-y-75 blur-xl transform-gpu -rotate-45 -translate-x-28 -translate-y-24'></div>

        </div>
        <div className='flex-1 leading-loose text-ui-300 space-y-4'>
          <p>
            The visual identity of G-Loot is tailored to represent the excitement of competitive gaming. With an audience that demands crisp and clean visuals, clear and direct communication and immersive experiences, we have crafted a visual identity that caters to avid enthusiasts and esport professionals alike.
          </p>
          <p>
            We are designing to be as relevant towards the competition format, as we are for the player, with visuals that stand out and are designed with care in each customer touch point, for each product offering and positioning.
          </p>
          <p>
            This documentation outlines the intent and execution of our visual identity, and how we can best support that amazing user experience.
          </p>
        </div>
      </div>
      <div className='flex gap-8 justify-between'>
        <div>
          <Link href='introduction'>
            <a className='button button-ghost px-4'>
              <span className='icon icon-arrow-sm-left'/>
              <span>Introduction</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href='logotype'>
            <a className='button button-ghost px-4'>
              <span>Logotype</span>
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
