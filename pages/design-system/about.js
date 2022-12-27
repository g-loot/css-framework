import Link from 'next/link'
import SiteLayout from '../../components/SiteLayout'
import { getLayout } from '../../components/DesignSystem/DSLayout'

const DSpage = () => (
  <div>

    <div className='max-w-md mx-auto aspect-landscape bg-cover bg-center rounded-lg mb-12 border border-ui-700' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-designsystem.jpg)`}}></div>
    <div className='max-w-sm mx-auto space-y-4 text-ui-100 leading-none mb-6'>
      <h1 className='leading-none h2'>
        Stryda CSS Framework <small className='text-ui-300'>introduction</small>
      </h1>
    </div>
    
    <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
      <p>
        The Stryda CSS Framework is a centralized front-end design system that allows any developer to quickly build pages that are in line with the Stryda brand and its user interface system.
      </p>
      <p>
        Based on the utility-first framework <a className='link link-main' href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>Tailwind CSS</a>, the Stryda CSS Framework provides pre-defined components listed on this website as well as highly composable, low-level utility classes to build complex user interfaces with speed in mind.
      </p>
    </div>

    {/*
    <div className='max-w-md mx-auto aspect-video bg-cover bg-center rounded-lg my-12 border border-ui-600' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653377432/Marketing/2022_prototype/methodology-styledcomponents.jpg)`}}></div>
    <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
      <h2 className='leading-none uppercase text-2xl text-ui-300'>
        The styled-component way
      </h2>
      <p>
        The current way of designing for the web at Stryda is not optimal since it forces each component to embed its own styling. This opens the door to numerous inconsistencies and duplicated code.
      </p>
      <p>
        The use of the Styled System library, that is suppose to enable flexibility when creating layouts is very limited and non-intuitive.
      </p>
    </div>
    <div className='max-w-md mx-auto aspect-video bg-cover bg-center rounded-lg my-12 border border-ui-600' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653377432/Marketing/2022_prototype/methodology-class.jpg)`}}></div>
    <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
      <h2 className='leading-none uppercase text-2xl text-ui-300'>
        The class(y) way
      </h2>
      <p>
        By creating a Stryda CSS Framework we are able to centralise all the design system in one place, making sure everything is built in a visually consistent and smart way.
      </p>
      <p className='pb-5'>
        And since the Stryda CSS Framework is based on <a className='link link-main' href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>Tailwind CSS</a>, it allows the use of its utility-first class names anywhere. That way new pages and components can be built effortlessly.
      </p>
    </div>
    */}
    <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
      
      <h3 className='h3 my-6'>
        Benefits
      </h3>
      <p className='border-b border-ui-700 pb-5'>
        <strong className='text-xl text-main'>
          Smart design
        </strong>
        <br />
        <span>
          By separating the style from the content, we are able to design in a smarter way, combining styling across components (example: we are able to streamline the loading state of the tournament &amp; mission cards). It makes it also easier to have a semantic structure (div &gt; figure, header, section, ul, etc.).
        </span>
      </p>
      <p className='border-b border-ui-700 pb-5'>
        <strong className='text-xl text-main'>
          One place of truth
        </strong>
        <br />
        <span>
          Since the styling is defined outside of the React components, the appearance and feeling of any element can be explored and tested freely. It also makes the Stryda CSS Framework the one place of truth between UX/UI and devs.
        </span>
      </p>
      <p className='border-b border-ui-700 pb-5'>
        <strong className='text-xl text-main'>
          Technology agnostic
        </strong>
        <br />
        <span>
          As it is independent from the front-end technology (ReactJS), the Stryda CSS Framework is instantly compatible with any other front-end language (VueJS, SvelteJS PHP, plain HTML, emails, etc.) making the building of ad-hoc tools and interfaces a piece of cake.
        </span>
      </p>
      <p className='border-b border-ui-700 pb-5'>
        <strong className='text-xl text-main'>
          Flexible and quick
        </strong>
        <br />
        <span>
          Because it is based on the CSS Framework <a className='link link-main' href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>Tailwind CSS</a>, the whole product can use its numerous utility-first class names to build layouts and one-offs with ease and speed while still remaining consistent with the Stryda brand.
        </span>
      </p>
      <p className='pb-5'>
        <strong className='text-xl text-main'>
          Faster render
        </strong>
        <br />
        <span>
          While loading large external style sheets can negatively impact performance metrics, simple CSS is faster for browsers to render than styling that is generated using code like styled-components.
        </span>
      </p>
      {/*
      <h3 className='h3 my-4'>
        Downsides
      </h3>
     
      <p className='pb-5'>
        <strong className='text-xl text-error-300'>
          Work
        </strong>
        <br />
        <span>
          If it is possible for the two-systems to cohabit for a while, eventually all components and pages will have to be redesigned in the framework and the new HTML structures applied within the product.
        </span>
      </p>
      

      <div className='surface surface-dimmed px-4 py-8 text-center rounded-xl space-y-4'>
        <p>
          Want to learn more about different ways of styling components?
        </p>
        <a className='button button-tertiary' href='https://www.smashingmagazine.com/2020/05/styling-components-react/' rel='noreferrer' target='_blank'>
          <span>
            Read more
          </span>
          <span className='icon icon-box-arrow-top-right'/>
        </a>
      </div>
      */}
      
    </div>

  </div>
)

DSpage.getLayout = getLayout

export default DSpage
