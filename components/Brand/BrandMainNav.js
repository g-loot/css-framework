import Link from 'next/link';
import { useRouter } from 'next/router'

export default function DSMainNav(props) {


  const router = useRouter();


  const handleClick = e => {
    e.preventDefault()
    router.push(item.url)
  };

  return (
    <ul className={`menu ${props.rounded === 'true' ? 'menu-rounded' : ''}  ${props.style === 'secondary' ? 'menu-secondary' : ''}`}>
      {props.items
      .filter(item => {
        if (!props.filter) return true
        if (item.label.includes(props.filter.toLowerCase()) || item.tags.includes(props.filter.toLowerCase())) {
          return true
        }
      })
      .map(item => (
        <li className={`${item.disabled === true ? 'is-disabled' : ''}`} key={item.id} onClick={props.onClick}>
          <Link href={item.url} >
            <a className={`${router.pathname.includes(item.url) || router.pathname === '' ? 'is-active' : ''}`}>
              <span className={`icon icon-16 icon-${item.icon}`}></span>
              <span className=''>{item.label}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}