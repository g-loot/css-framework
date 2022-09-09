import { getLayout } from "../../components/Sandbox/SBLayout";

const SBpage = () => (
  <div>
    <div className="max-w-sm mx-auto space-y-4 text-ui-100 leading-none mb-6">
      <h1 className="leading-none h2">
        CSS Framework <small className="text-ui-300 font-normal">sandbox</small>
      </h1>
    </div>

    <div className="max-w-sm mx-auto space-y-4 text-ui-200">
      <p>
        Welcome to the G-Loot CSS Framework sandbox. This is the place for you
        to explore new designs and layouts using the framework.
      </p>
    </div>

    <div className="max-w-sm mx-auto space-y-4 text-ui-200">
      <h3 className="h3 my-6">Infos</h3>
      <div className="border-b border-ui-700 pb-5">
        <h4 className="font-headings font-bold text-xl text-main mb-4">
          Creating a new page
        </h4>
        <ol className="pl-4 list-outside list-disc space-y-4">
          <li>
            Add a new JS like{" "}
            <samp className="text-sm">yourpagename.js</samp> page in the <samp className="text-sm">sandbox</samp>{" "}
            folder.
          </li>
          <li>Paste the following structure in it.</li>
          <li>Replace the &#34;Put your content here&#34; with your work.</li>
        </ol>
        <div className="code surface mt-4">
          <pre data-prefix="">
            <code>
              import &#123; getLayout &#x7D; from
              &#39;../../components/Sandbox/SBLayout&#39;
            </code>
          </pre>
          <pre data-prefix="">
            <code>const SBpage = () =&gt; (</code>
          </pre>
          <pre data-prefix="">
            <code> &#x3c;div&#x3e;</code>
          </pre>
          <pre data-prefix="">
            <code> Put your content here</code>
          </pre>
          <pre data-prefix="">
            <code> &#x3c;/div&#x3e;</code>
          </pre>
          <pre data-prefix="">
            <code>)</code>
          </pre>
          <pre data-prefix="">
            <code>SBpage.getLayout = getLayout</code>
          </pre>
          <pre data-prefix="">
            <code>export default SBpage</code>
          </pre>
        </div>
      </div>
      <div className="border-b border-ui-700 pb-5">
        <h4 className="font-headings font-bold text-xl text-main mb-4">
          Adding the page in the menu
        </h4>
        <ol className="pl-4 list-outside list-disc space-y-4">
          <li>
            Open the <samp className="text-sm">pages.js</samp> file.
            <samp className="text-sm">yourpagename.js</samp> page in the <samp className="text-sm">sandbox</samp>{" "}
            folder.
          </li>
          <li>Paste the following structure in it.</li>
          <li>Replace the with the correct information (name, tag, url).</li>
        </ol>
        <div className="code surface mt-4">
          <pre data-prefix="">
            <code>
              &#123;
            </code>
          </pre>
          <pre data-prefix="">
            <code>   label: &#34;Exercises&#34;,</code>
          </pre>
          <pre data-prefix="">
            <code>   tags: &#34;whatever tags you want your file to be searchable with (separated with commas)&#34;,</code>
          </pre>
          <pre data-prefix="">
            <code>   url: &#34;the name of your file (without .js)&#34;</code>
          </pre>
          <pre data-prefix="">
            <code>&#x7D;</code>
          </pre>
        </div>
      </div>
    </div>
  </div>
);

SBpage.getLayout = getLayout;

export default SBpage;