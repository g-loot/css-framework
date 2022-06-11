import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import { useRouter } from 'next/router';

export default function GettingStarted() {
  const router = useRouter();
  

  return (
    <div>
        <DSHead title='Getting Started' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>

          <div>

            <div className='max-w-sm mx-auto space-y-8 text-ui-100 leading-tight mb-6'>
              <h1 className='leading-none'>
                Getting started<br /><small className='text-ui-300'>with webpack</small>
              </h1>
              <ul className='space-y-8'>
                <li className='max-w-sm mx-auto space-y-4 text-ui-200 pb-8 border-b border-ui-800'>
                  <h3 className='h5 text-ui-100 flex items-center flex-wrap'>
                    <span className='h-8 w-8 bg-ui-700 border border-ui-600 rounded-lg inline-block mr-4 text-lg not-italic text-center leading-7'>1</span>
                    <span>Install Tailwind CSS</span>
                  </h3>
                  <p>
                    Install <samp className='text-sm'>tailwindcss</samp> and its peer dependencies via npm.
                  </p>
                  <div className='code surface'>
                    <pre data-prefix=">"><code>npm install -D tailwindcss postcss autoprefixer tailwindcss-animation-delay</code></pre>
                  </div>
                </li>

                <li className='max-w-sm mx-auto space-y-4 text-ui-200 pb-8 border-b border-ui-800'>
                  <h3 className='h5 text-ui-100 flex items-center flex-wrap'>
                    <span className='h-8 w-8 bg-ui-700 border border-ui-600 rounded-lg inline-block mr-4 text-lg not-italic text-center leading-7'>2</span>
                    <span>Install the Framework</span>
                  </h3>
                  <p>
                    Install <samp className='text-sm'>@augustin_hiebel/gloot-framework</samp> (temporary name) via npm.
                  </p>
                  <div className='code surface'>
                    <pre data-prefix=">"><code>npm install @augustin_hiebel/gloot-framework</code></pre>
                  </div>
                </li>

                <li className='max-w-sm mx-auto space-y-4 text-ui-200 pb-8 border-b border-ui-800'>
                  <h3 className='h5 text-ui-100 flex items-center flex-wrap'>
                    <span className='h-8 w-8 bg-ui-700 border border-ui-600 rounded-lg inline-block mr-4 text-lg not-italic text-center leading-7'>3</span>
                    <span>Import the CSS</span>
                  </h3>
                  <p>
                    Import the Framework CSS into your project stylesheet.
                  </p>
                  <div className='code surface'>
                    <pre data-prefix=""><code>@import &quot;@augustin_hiebel/gloot-framework/styles/globals.css&quot;;</code></pre>
                  </div>
                </li>

                <li className='max-w-sm mx-auto space-y-4 text-ui-200 pb-8 border-b border-ui-800'>
                  <h3 className='h5 text-ui-100 flex items-center flex-wrap'>
                    <span className='h-8 w-8 bg-ui-700 border border-ui-600 rounded-lg inline-block mr-4 text-lg not-italic text-center leading-7'>4</span>
                    <span>Adapt webpack</span>
                  </h3>
                  <p>
                    Add <samp className='text-sm'>postcss-loader</samp> to <samp className='text-sm'>webpack.config.js</samp>.
                  </p>
                  <div className='code surface'>
                    <pre data-prefix=""><code>module: &#123;</code></pre>
                    <pre data-prefix=""><code>  rules: [</code></pre>
                    <pre data-prefix=""><code>    &#123;</code></pre>
                    <pre data-prefix=""><code>      test: /\.(css)$/,</code></pre>
                    <pre data-prefix=""><code>      use: [&apos;style-loader&apos;, &apos;css-loader&apos;, &apos;postcss-loader&apos;],</code></pre>
                    <pre data-prefix=""><code>    &#x7D;</code></pre>
                    <pre data-prefix=""><code>  &#x5D;</code></pre>
                    <pre data-prefix=""><code>&#x7D;</code></pre>
                  </div>
                </li>

                <li className='max-w-sm mx-auto space-y-4 text-ui-200'>
                  <h3 className='h5 text-ui-100 flex items-center flex-wrap'>
                    <span className='h-8 w-8 bg-ui-700 border border-ui-600 rounded-lg inline-block mr-4 text-lg not-italic text-center leading-7'>5</span>
                    <span>Import &amp; adapt the config file</span>
                  </h3>
                  <p>
                    Import the framework config into your project <samp className='text-sm'>tailwind.config.js</samp> and indicate which files Tailwind should scan.
                  </p>
                  <div className='code surface'>
                    <pre data-prefix=""><code>const tailwindConfig = require(&apos;@augustin_hiebel/gloot-framework/tailwind.config&apos;);</code></pre>
                    <pre data-prefix=""><code>module.exports = &#123;</code></pre>
                    <pre data-prefix=""><code>  ...tailwindConfig,</code></pre>
                    <pre data-prefix=""><code>  content: &#x5B;</code></pre>
                    <pre data-prefix=""><code>    &quot;./pages/*.&#123;js,ts,jsx,tsx,json&#x7D;&quot;,</code></pre>
                    <pre data-prefix=""><code>  &#x5D;,</code></pre>
                    <pre data-prefix=""><code>&#x5D;&#x7D;;</code></pre>
                  </div>
                </li>
              </ul>
              <div className='' id='example-repository'>

                <h2 className='h3'>Example repository <a class="text-2xl opacity-20 hover:opacity-60" href="#example-repository">#</a></h2>
                <p className='text-ui-200 leading-tight my-4'>
                  Check this example setup of the G-Loot Framework and Tailwind CSS on webpack.
                </p>
                <div className='max-w-[150px]'>
                  <a href='https://stackblitz.com/edit/gloot-framework?file=tailwind.config.js' target='_blank' rel='noreferrer' className='inline-block rounded-2xl surface transition-all duration-200 hover:opacity-50'>
                    <figure className='p-6 w-full aspect-[2/1] items-end'>
                      <div className='grid w-full'>
                        <img className='col-start-1 row-start-1 w-full h-auto' src='https://res.cloudinary.com/gloot/image/upload/v1654947800/Marketing/2022_prototype/react.svg' alt="React (Webpack)" />
                        <img className='col-start-1 row-start-1 w-3/5 -mr-4 -mb-4 place-self-end justify-self-end drop-shadow-md h-auto' src='https://res.cloudinary.com/gloot/image/upload/v1654947822/Marketing/2022_prototype/webpack.svg' />
                      </div>
                    </figure>
                  </a>
                </div>
              </div>
              
            </div>
            

          </div>
          
        </DSStructure>

        
    </div>
  );
}
