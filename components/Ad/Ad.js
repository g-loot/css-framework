import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Ad(props) {

  const { query } = useRouter();
  const hasAds = query.ads === 'true' ? true : false;

  const Width = props.width !== undefined ? props.width : '1005'
  const Height = props.height !== undefined ? props.height : '300'
  const URL = `https://gloot.netlify.app/ads/${Width}x${Height}/index.html`
  return (
    <>
      {hasAds === true && (
        <div className="rounded-lg flex flex-col items-center justify-center overflow-hidden mb-4">
          <div className='cursor-pointer'>
            <iframe className='rounded-xl overflow-hidden pointer-events-none select-none' src={URL} width={Width} height={Height} frameBorder="0" allowFullScreen="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
          <Link href='prototype/premium'>
            <a className='link link-main text-sm'>
              Remove ads
            </a>
          </Link>
        </div>
      )}
    </>
  );
}
