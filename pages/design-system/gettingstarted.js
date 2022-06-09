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

            <div className='max-w-sm mx-auto space-y-12 text-ui-100 leading-none mb-6'>
              <h1 className='leading-none'>
                Install the G-Loot framework
              </h1>
              <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
                <h2 className='h4'>Install Tailwind CSS</h2>
                <p>
                  Install <code className='text-xs'>tailwindcss</code> and its peer dependencies via npm.
                </p>
                <div className='code surface'>
                  <pre data-prefix=">"><code>npm install -D tailwindcss postcss autoprefixer</code></pre>
                </div>
              </div>

              <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
                <h2 className='h4'>Install the G-Loot Framework</h2>
                <p>
                  Install <code className='text-xs'>@augustin_hiebel/gloot-framework</code> (temporary name) via npm.
                </p>
                <div className='code surface'>
                  <pre data-prefix=">"><code>npm install @augustin_hiebel/gloot-framework</code></pre>
                </div>
              </div>

              <div className='max-w-sm mx-auto space-y-4 text-ui-200'>
                <h2 className='h4'>Adapt the config file</h2>
                <p>
                  Import the framework config into your project <code className='text-xs'>tailwind.config.js</code> and indicate which files Tailwind should scan.
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
              </div>
            </div>
            

          </div>
          
        </DSStructure>

        
    </div>
  );
}
