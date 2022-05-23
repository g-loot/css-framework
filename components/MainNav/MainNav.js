import { useRouter } from 'next/router'

export default function MainNav(props) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault()
    router.push(item.url)
  };

  return (
    <ul className={`menu ${props.style == 'secondary' ? 'menu-secondary' : ''}`}>
      {props.items.map((item, i) => (
        <li className={`${item.disabled == true ? 'is-disabled' : ''}`}>
          <a href={item.url} className={`${router.pathname.includes(item.url) ? 'is-active' : ''}`}>
            <span className={`icon icon-16 icon-${item.icon}`}></span>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}