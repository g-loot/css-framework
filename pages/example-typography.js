import { compose, flexbox, layout, space } from 'styled-system';

import CustomComponent from '../components/CustomComponent/CustomComponent';
import Head from 'next/head';
import Topbar from '../components/Topbar/Topbar';
import { Typography } from '@g-loot/component-library';
import styled from 'styled-components';
import useFetch from '../hooks/use-fetch';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  ${compose(layout, space, flexbox)};
`;

const Flexer = styled.div`
  ${compose(layout, space, flexbox)};
`;

const Lister = styled.ul`
  ${compose(layout, space, flexbox)};
  list-style-type: disc;
  padding-left: 1rem;
`;

const TabsWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const tabsArray = [
  'BRAWLS',
  'HOW IT WORKS',
  'G-LOOT RULES',
  'YOUR BRAWL HISTORY',
];

export default function Home() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/users/self', { delay: 1000 });

  return (
    <div>
        <Head>
          <title>Gnog Prototype</title>
          <meta name="description" content="Internal playground" />
          <link rel="icon" href="/favicon.ico" />

        </Head>
       
        <section className='container maxw-lg mx-auto my-4 flex items-baseline justify-between'>
          <h1 className='font-headings italic text-4xl'>
            Typography
          </h1>
          <nav>
            <ul className='tabs'>
              <li>
                <a onClick={() => router.push('/example-typography')} className="active">
                  <span>Typography</span>
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/example-layout')}>
                  <span>Layout</span>
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/example-perks')}>
                  <span>Perks</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className='container maxw-lg mx-auto my-4'>
          <div className='bg-ui-800 rounded-xl p-2'>
            <div className='p-4'>
              <h2 className="font-headings italic text-3xl text-ui-200">Creating a responsive title</h2>
              <p className='text-ui-200 leading-loose'>
                Tailwind enables the front-enders to easily style a title by adding the following class names <code>font-headings text-3xl</code>.
                <br/>
                The styled component & system solution uses a component to which two attributes are passed <code>&lt;Typography&gt;</code><code>variant=&lsquo;h2&rsquo; color=&lsquo;ui.100&rsquo;</code>.
                <br/>
                However what happens if you want to change the size of the header under a center responsive threshold, and center it? Easy for tailwing, just a few additional class names and you are good to go: <code>font-headings text-3xl md:text-4xl md:text-left</code>.
                <br/>
                This will be more tricky for the styled component & system solution, we will have to define and pass new attributes. Annoying when you think of all the other rules you may want to pass to these elements in the future (<code>character-spacing, text-shadow, text-align, white-space, text-transform, etc.</code>).
              </p>
            </div>
            <div className='p-4 border-t border-ui-600 mb-4'>
              <span className="text-ui-300 mb-4">Tailwind:</span>
              <div className="flex flex-col md:flex-row justify-around gap-4">
                <div className='flex-1'>
                  <h2 className="text-3xl lg:text-4xl text-center lg:text-left">
                    Hello World
                  </h2>
                </div>
                <div className='flex-1'>
                  <div className='rounded overflow-hidden'>
                    <iframe width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/utzcr73e/embedded/html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-ui-700 my-4"></div>
              <span className="text-ui-300 mb-4">Styled component + styled system:</span>

              <div className="flex flex-col md:flex-row justify-around gap-4">
                <div className='flex-1'>
                  <Typography variant="h2" color="ui.100">
                    Hello World
                  </Typography>
                </div>
                <div className='flex-1'>
                  <div className='rounded overflow-hidden'>
                    <iframe width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ts9qkrby/embedded/html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </section>
        <section className='container maxw-lg mx-auto my-4'>
          <div className='bg-ui-800 rounded-xl p-2'>
            <div className='p-4'>
              <h2 className="font-headings italic text-3xl text-ui-200">Combining multiple typographic components</h2>
              <p className='text-ui-200 leading-loose'>
                Passing global parameters to multiple typographic elements is very easy in Tailwind. In this example the left elements have a tight leading than the right ones.
                <br />
                The styled component & system solution makes it impossible since the individual components override the global <code>line-height</code> rule. Moreover it adds additional <code>&lt;div&gt;</code> that can mess up with semantic markup.
              </p>
            </div>
            <div className='p-4 border-t border-ui-600 mb-4'>
              <span className="text-ui-300 mb-4">Tailwind:</span>
              <div className="flex flex-col md:flex-row justify-around gap-4">
                <div className='flex-1'>
                  <div className='leading-none'>
                    <h2 className="text-3xl md:text-4xl">
                      I am a<br />two-lines title
                    </h2>
                    <div className='text-ui-200'>
                      <p>
                        I am a paragraph
                      </p>
                      <ul className='mt-2 list-disc pl-4'>
                        <li>
                          option 1
                        </li>
                        <li>
                          option 2
                        </li>
                        <li>
                          option 3
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='rounded overflow-hidden'>
                    <iframe width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/o9f2v5mw/embedded/html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-ui-700 my-4"></div>
              <span className="text-ui-300 mb-4">Styled component + styled system:</span>

              <div className="flex flex-col md:flex-row justify-around gap-4">
                <div className='flex-1'>
                  <div className='leading-none'>
                    <div style={{ lineHeight: '1'}}>
                      <Typography variant="h2" color="ui.100">
                        I am a<br />two-lines title
                      </Typography>
                      <Typography variant="paragraph" color="ui.200">
                        I am a paragraph
                      </Typography>
                      <Lister>
                        <li>
                          <Typography variant="paragraph" color="ui.200">
                            option 1
                          </Typography>
                        </li>
                        <li>
                          <Typography variant="paragraph" color="ui.200">
                            option 2
                          </Typography>
                        </li>
                        <li>
                          <Typography variant="paragraph" color="ui.200">
                            option 3
                          </Typography>
                        </li>
                      </Lister>
                    </div>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='rounded overflow-hidden'>
                    <iframe width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/5wcj0vam/embedded/js,html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
       
    </div>
  );
}
