export default function MainNav(props) {
  console.log(props.items);
  return (
    <ul className="menu">
      {props.items.map((item, i) => (
        <li>
          <a>
            <span className={`icon icon-16 icon-${item.icon}`}></span>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}