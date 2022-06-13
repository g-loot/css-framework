import Link from 'next/link';
import { useRouter } from 'next/router'

export default function MainNav(props) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault()
    router.push(item.url)
  };

  return (
    <ul className={`menu ${props.style == 'secondary' ? 'menu-secondary' : ''}`}>
      {props.items.map((item, itemIndex) => (
        <li className={`${item.disabled == true ? 'is-disabled' : ''}`} key={itemIndex} onClick={props.onClick}>
          <Link href={item.url} >
            <a className={`${router.pathname.includes(item.url) || router.pathname == '' ? 'is-active' : ''}`}>
              <span className={`icon icon-16 icon-${item.icon}`}></span>
              <span className='capitalize'>{item.label}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}