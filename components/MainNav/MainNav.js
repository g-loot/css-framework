import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainNav(props) {
  const extraClassNames = props.extraClassNames !== undefined ? props.extraClassNames : null
  const router = useRouter();
  const { query } = useRouter();
  const hasAds = query.ads === 'true' ? true : false;


  const handleClick = e => {
    e.preventDefault()
    router.push(item.url)
  };

  return (
    <ul className={`menu ${props.rounded === 'true' ? 'menu-rounded' : ''}  ${props.style === 'secondary' ? 'menu-secondary' : ''}  ${extraClassNames}`}>
      {props.items.map((item, itemIndex) => (
        <>
          <li className={`${item.disabled === true ? 'is-disabled' : ''}`} key={itemIndex} onClick={props.onClick}>
            <Link href={`${item.url}${hasAds ? '?ads=true' : ''}`}>
              <a className={`${router.pathname.endsWith('prototype') && item.isHome ? 'is-active' : ''} ${router.pathname.includes(item.url) || router.pathname === '' ? 'is-active' : ''}`}>
                <span className="icon rounded w-8 flex items-center justify-center">
                  <span className={`icon icon-16 icon-${item.icon}`}></span>
                </span>
                <span className='uppercase'>{item.label}</span>
              </a>
            </Link>
          </li>
        </>
      ))}
    </ul>
  );
}