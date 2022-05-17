export default function Button(props) {
  const icon = props.icon && (
    <span className={`icon icon-${props.icon} ${props.iconSize ? `icon-${props.iconSize}` : ''} icon-${props.iconSize} ${props.iconDirection == 'right' ? 'order-2' : ''}`}></span>
  );
  return (
  <button className={`button button-${props.variant}`}>
    {
      props.iconDirection != 'right' ? icon : ''
    }
    <span
    className={`bg-ui-700/${props.opacity ?? 100}`}>
      {props.label}
    </span>
     {
        props.iconDirection == 'right' ? icon : ''
      }
  </button>
  );
}