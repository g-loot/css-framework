import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Introduction() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Introduction' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>

          <div className="">
            <div className="px-4">

              <div className='max-w-md mx-auto aspect-landscape bg-cover bg-center rounded-lg mb-12 border border-ui-700' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-designsystem.jpg)`}}></div>
              <div className='max-w-sm mx-auto space-y-4 text-ui-100 leading-none mb-6'>
                <h1 className='leading-none'>
                  G-Loot CSS Framework <small className='text-ui-300 uppercase text-2xl'>introduction</small>
                </h1>
              </div>
              
              <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
                <p>
                  The G-Loot CSS Framework is a centralized front-end design system that allows any developer to quickly build pages that are in line with the G-Loot brand and its user interface system.
                </p>
                <p>
                  Based on the utility-first framework <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>Tailwind</a>, the G-Loot CSS Framework provides highly composable, low-level utility classes to make it easy to build complex user interfaces as well as pre-defined components listed on this website.
                </p>
              </div>

              <div className='max-w-md mx-auto aspect-video bg-cover bg-center rounded-lg my-12 border border-ui-600' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653377432/Marketing/2022_prototype/methodology-styledcomponents.jpg)`}}></div>
              <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
                <h2 className='leading-none uppercase text-2xl text-ui-300'>
                  The Styled system / component way
                </h2>
                <p>
                  The current way of designing for the web at G-Loot is not optimal since it forces each component to embed its own styling. This opens the door to numerous inconsistencies and duplicated code.
                </p>
                <p>
                  The use of the Styled System library, that is suppose to enable flexibility when creating layouts is very limited and non-intuitive.
                </p>
              </div>
              <div className='max-w-md mx-auto aspect-video bg-cover bg-center rounded-lg my-12 border border-ui-600' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653377432/Marketing/2022_prototype/methodology-class.jpg)`}}></div>
              <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
                <h2 className='leading-none uppercase text-2xl text-ui-300'>
                  The Class way
                </h2>
                <p>
                  By creating a G-Loot CSS Framework we are able to centralise all the styling in one place, making sure everything is designed in a consistent and smart way.
                </p>
                <p>
                  And since the G-Loot CSS Framework is based on <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>Tailwind</a>, it allows the use of its utility-first class names anywhere. That way new pages and components can be built effortlessly.
                </p>
                <h3 className='h3 my-4'>
                  Benefits
                </h3>
                <p className='border-b border-ui-600 pb-5'>
                  <strong className='font-headings text-xl text-main'>
                    Smart design
                  </strong>
                  <br />
                  <span>
                    By separating the style from the content, you can design in a smarter way, combining styling across components (example: we are able to streamline the loading state of the tournament &amp; mission cards). It makes it also easier to have a semantic structure (div &gt; figure, header, section, ul, etc.).
                  </span>
                </p>
                <p className='border-b border-ui-600 pb-5'>
                  <strong className='font-headings text-xl text-main'>
                    One place of truth
                  </strong>
                  <br />
                  <span>
                  Since the styling is defined outside of the React components, the appearance and feeling of any element can be explored and tested well before the React component is actually created. It also makes the G-Loot CSS Framework the one place of truth between UX/UI and devs.
                  </span>
                </p>
                <p className='border-b border-ui-600 pb-5'>
                  <strong className='font-headings text-xl text-main'>
                    Technology agnostic
                  </strong>
                  <br />
                  <span>
                    As it is independent from the front-end technology (ReactJS), the G-Loot CSS Framework is instantly compatible with any other front-end language (VueJS, PHP, plain HTML, emails, etc.) making the building of ad-hoc tools and interfaces a piece of cake.
                  </span>
                </p>
                <p className='pb-5'>
                  <strong className='font-headings text-xl text-main'>
                    Flexible and fast
                  </strong>
                  <br />
                  <span>
                    Because it is based on the CSS Framework <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>Tailwind</a>, the whole product can use its numerous utility-first class names to build layouts and one-offs with ease and speed.
                  </span>
                </p>
                <h3 className='h3 my-4'>
                  Downsides
                </h3>
                <p className='border-b border-ui-600 pb-5'>
                  <strong className='font-headings text-xl text-error-300'>
                    A bit heavier
                  </strong>
                  <br />
                  <span>
                    When embedding the style of a component within itself, the page only loads the style when it is needed. When using the G-Loot CSS Framework, the page needs to load the CSS file in its entirety. To contre measure this, the file is purged from all unused files before it is compiled, making sure that the weight will not exceed 364ko.
                  </span>
                </p>
                <p className='border-b border-ui-600 pb-5'>
                  <strong className='font-headings text-xl text-error-300'>
                    A more complex setup
                  </strong>
                  <br />
                  <span>
                    The various parts of the products relying on the framework need to have a smart way to consume it while still being able to purge the unused class before the compilation. 
                  </span>
                </p>
                <p className='pb-5'>
                  <strong className='font-headings text-xl text-error-300'>
                    Work
                  </strong>
                  <br />
                  <span>
                    If it is possible for the two-systems to cohabit for a while, eventually all components and pages will have to be redesigned in the framework and the new HTML structures applied within the product.
                  </span>
                </p>
                
              </div>

            </div>
          </div>
          
        </DSStructure>

        
    </div>
  );
}
