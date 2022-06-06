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
        <li className={`${item.disabled == true ? 'is-disabled' : ''}`} key={itemIndex}>
          <a href={item.url} className={`${router.pathname.includes(item.url) || router.pathname == '' ? 'is-active' : ''}`}>
            <span className={`icon icon-16 icon-${item.icon}`}></span>
            <span className='uppercase'>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}