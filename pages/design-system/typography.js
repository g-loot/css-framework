import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Typography() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Typography' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>

            <h1 className='mb-2'>
              Typography
            </h1>

            <div className="card rounded-lg p-4">
              <div className='border-b border-ui-700 pb-12 mb-12'>
                <h2 className='h3 mb-10'>
                  Fonts
                </h2>
                <div className='flex flex-col xl:flex-row xl:items-center xl:justify-between space-y-4 xl:space-y-0'>
                  <div className='flex-1 flex justify-center gap-4 items-stretch'>
                    <div className='h-36 w-36 rounded-xl bg-ui-600 border border-ui-500 flex items-center justify-center'>
                      <span className='font-headings text-7xl'>
                        <span className='italic'>A</span>
                        <span className='text-5xl'>a</span>
                      </span>
                    </div>
                    <div className='w-60 flex flex-col items-between justify-around'>
                      <div className='font-headings font-bold uppercase text-ui-100'>
                        Podium Sharp
                      </div>
                      <div className='text-xs md:text-sm font-headings text-ui-300'>
                        <span className='uppercase'>abcdefghijklmnopqrstuvwxyz</span>
                        <br />
                        <span>abcdefghijklmnopqrstuvwxyz</span>
                        <br />
                        <span>&#180; &laquo; &raquo; ? &lsquo; &rsquo; ! ( % ) [ # ] &#123; @ &#125; / &amp; \ : ; , . * </span>
                        <br />
                        <span>abcdefghijklmnopqrstuvwxyz</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1 flex justify-center gap-4 items-stretch'>
                    <div className='h-36 w-36 rounded-xl bg-ui-600 border border-ui-500 flex items-center justify-center'>
                      <span className='font-body text-7xl italic'>
                        <span className='italic'>A</span>
                        <span className='text-5xl'>a</span>
                      </span>
                    </div>
                    <div className='w-60 flex flex-col items-between justify-around'>
                      <div className='font-body font-bold uppercase text-ui-100'>
                        Roboto Condensed
                      </div>
                      <div className='text-xs md:text-sm font-body text-ui-300'>
                        <span className='uppercase'>abcdefghijklmnopqrstuvwxyz</span>
                        <br />
                        <span>abcdefghijklmnopqrstuvwxyz</span>
                        <br />
                        <span>&#180; &laquo; &raquo; ? &lsquo; &rsquo; ! ( % ) [ # ] &#123; @ &#125; / &amp; \ : ; , . * </span>
                        <br />
                        <span>abcdefghijklmnopqrstuvwxyz</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            <div className=''>
              <h2 className='h3 mb-10'>
                Hierarchy
              </h2>


              <div>
                {/* h1 */}
                <div className='flex items-stretch gap-6 mb-20'>
                  <div className='w-24 lg:w-40 flex justify-end items-start pt-4'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      headings
                    </div>
                  </div>
                  <div className='w-3/5'>
                    <div className='h1'>
                      You can take the girl out of Salvador, but you'll never take the girl out of Salvador.
                    </div>
                    <div className='text-sm text-ui-300 mt-4'>
                      Our main size for headers, usually H1 or similar.
                    </div>
                  </div>
                  <div className='hidden lg:block pt-4 w-80 text-xs text-ui-400 border-l border-ui-700 pl-4'>
                    font-family: Podium Sharp;<br />
                    font-size: 56px;<br />
                    font-style: italic;<br />
                    font-weight: 700;<br />
                    line-height: 125%;<br />
                  </div>
                </div>

                {/* h2 */}
                <div className='flex items-stretch gap-6 mb-20'>
                  <div className='w-24 lg:w-40 flex justify-end items-start pt-4'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      headings
                    </div>
                  </div>
                  <div className='w-3/5'>
                    <div className='h2'>
                      You can take the girl out of Salvador, but you'll never take the girl out of Salvador.
                    </div>
                    <div className='text-sm text-ui-300 mt-4'>
                      Our main size for headers, usually H1 or similar.
                    </div>
                  </div>
                  <div className='hidden lg:block pt-4 w-80 text-xs text-ui-400 border-l border-ui-700 pl-4'>
                    font-family: Podium Sharp;<br />
                    font-size: 56px;<br />
                    font-style: italic;<br />
                    font-weight: 700;<br />
                    line-height: 125%;<br />
                  </div>
                </div>

                {/* h3 */}
                <div className='flex items-stretch gap-6 mb-20'>
                  <div className='w-24 lg:w-40 flex justify-end items-start pt-4'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      headings
                    </div>
                  </div>
                  <div className='w-3/5'>
                    <div className='h3'>
                      You can take the girl out of Salvador, but you'll never take the girl out of Salvador.
                    </div>
                    <div className='text-sm text-ui-300 mt-4'>
                      Our main size for headers, usually H1 or similar.
                    </div>
                  </div>
                  <div className='hidden lg:block pt-4 w-80 text-xs text-ui-400 border-l border-ui-700 pl-4'>
                    font-family: Podium Sharp;<br />
                    font-size: 56px;<br />
                    font-style: italic;<br />
                    font-weight: 700;<br />
                    line-height: 125%;<br />
                  </div>
                </div>

                {/* h4 */}
                <div className='flex items-stretch gap-6 mb-20'>
                  <div className='w-24 lg:w-40 flex justify-end items-start pt-4'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      headings
                    </div>
                  </div>
                  <div className='w-3/5'>
                    <div className='h4'>
                      You can take the girl out of Salvador, but you'll never take the girl out of Salvador.
                    </div>
                    <div className='text-sm text-ui-300 mt-4'>
                      Our main size for headers, usually H1 or similar.
                    </div>
                  </div>
                  <div className='hidden lg:block pt-4 w-80 text-xs text-ui-400 border-l border-ui-700 pl-4'>
                    font-family: Podium Sharp;<br />
                    font-size: 56px;<br />
                    font-style: italic;<br />
                    font-weight: 700;<br />
                    line-height: 125%;<br />
                  </div>
                </div>

                {/* h5 */}
                <div className='flex items-stretch gap-6 mb-20'>
                  <div className='w-24 lg:w-40 flex justify-end items-start pt-4'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      headings
                    </div>
                  </div>
                  <div className='w-3/5'>
                    <div className='h5'>
                      You can take the girl out of Salvador, but you'll never take the girl out of Salvador.
                    </div>
                    <div className='text-sm text-ui-300 mt-4'>
                      Our main size for headers, usually H1 or similar.
                    </div>
                  </div>
                  <div className='hidden lg:block pt-4 w-80 text-xs text-ui-400 border-l border-ui-700 pl-4'>
                    font-family: Podium Sharp;<br />
                    font-size: 56px;<br />
                    font-style: italic;<br />
                    font-weight: 700;<br />
                    line-height: 125%;<br />
                  </div>
                </div>

                {/* h6 */}
                <div className='flex items-stretch gap-6 mb-20'>
                  <div className='w-24 lg:w-40 flex justify-end items-start pt-4'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      headings
                    </div>
                  </div>
                  <div className='w-3/5'>
                    <div className='h6'>
                      You can take the girl out of Salvador, but you'll never take the girl out of Salvador.
                    </div>
                    <div className='text-sm text-ui-300 mt-4'>
                      Our main size for headers, usually H1 or similar.
                    </div>
                  </div>
                  <div className='hidden lg:block pt-4 w-80 text-xs text-ui-400 border-l border-ui-700 pl-4'>
                    font-family: Podium Sharp;<br />
                    font-size: 56px;<br />
                    font-style: italic;<br />
                    font-weight: 700;<br />
                    line-height: 125%;<br />
                  </div>
                </div>


                {/* text-lg */}
                <div className='flex items-baseline justify-start gap-6 mb-20 text-lg'>
                  <div className='w-24 lg:w-40 flex justify-end items-start'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      body
                    </div>
                  </div>
                  <div className='w-20 uppercase text-sm text-ui-300'>
                    Large
                  </div>
                  <div>
                    You can take the girl
                  </div>
                  <div className=' font-bold'>
                    You can take the girl
                  </div>
                  <a className='link '>
                    You can take the girl
                  </a>
                </div>

                {/* text-md */}
                <div className='flex items-baseline justify-start gap-6 mb-20 text-md'>
                  <div className='w-24 lg:w-40 flex justify-end items-start'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      body
                    </div>
                  </div>
                  <div className='w-20 uppercase text-sm text-ui-300'>
                    Medium
                  </div>
                  <div>
                    You can take the girl
                  </div>
                  <div className=' font-bold'>
                    You can take the girl
                  </div>
                  <a className='link '>
                    You can take the girl
                  </a>
                </div>

                {/* text-sm */}
                <div className='flex items-baseline justify-start gap-6 mb-20 text-sm'>
                  <div className='w-24 lg:w-40 flex justify-end items-start'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      body
                    </div>
                  </div>
                  <div className='w-20 uppercase text-sm text-ui-300'>
                    Small
                  </div>
                  <div>
                    You can take the girl
                  </div>
                  <div className=' font-bold'>
                    You can take the girl
                  </div>
                  <a className='link '>
                    You can take the girl
                  </a>
                </div>

                {/* text-xs */}
                <div className='flex items-baseline justify-start gap-6 mb-20 text-xs'>
                  <div className='w-24 lg:w-40 flex justify-end items-start'>
                    <div className='rounded-full bg-ui-600 border border-ui-500 py-1 px-2 uppercase text-xs text-ui-300'>
                      body
                    </div>
                  </div>
                  <div className='w-20 uppercase text-sm text-ui-300'>
                    Extra small
                  </div>
                  <div>
                    You can take the girl
                  </div>
                  <div className=' font-bold'>
                    You can take the girl
                  </div>
                  <a className='link '>
                    You can take the girl
                  </a>
                </div>




              </div>
            </div>

          </div>
          
        </DSStructure>

        
    </div>
  );
}
