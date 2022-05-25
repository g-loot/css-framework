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
                  Based on the utility-first framework <a href='https://tailwindcss.com/' target='_blank'>Tailwind</a>, the G-Loot CSS Framework provides highly composable, low-level utility classes to make it easy to build complex user interfaces as well as pre-defined components listed on this website.
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
                  And since the G-Loot CSS Framework is based on <a href='https://tailwindcss.com/' target='_blank'>Tailwind</a>, it allows the use of its utility-first class names anywhere. That way new pages and components can be built effortlessly.
                </p>
              </div>

            </div>
          </div>
          
        </DSStructure>

        
    </div>
  );
}
