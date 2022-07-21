import Icon from '../Icon/Icon';
import React from 'react';
import classNames from 'classnames';
import styles from '../../assets/styles/button.module.css'

export default function Button(props) {
 /*
  const buttonClass = classNames({
    [styles.button]: true,
    [styles["button-"+props.variant]]: props.variant,
    "rounded-full": !props.label,
    [styles["button-play"]]: props.play,
    [styles["button-lg"]]: props.size && props.size === 'lg',
    [styles["button-md"]]: props.size && props.size === 'md',
    [styles["button-sm"]]: props.size && props.size === 'sm',
    [styles["button-currency"]]: props.currency,
    [styles["button-coin"]]: props.currency === 'coin',
    [styles["button-token"]]: props.currency === 'token',
    [styles["button-ticket"]]: props.currency === 'ticket'
  });
  */
 
  const buttonClass = classNames({
    "button": true,
    "button-main": props.variant === 'main',
    "button-secondary": props.variant === 'secondary',
    "button-tertiary": props.variant === 'tertiary',
    "button-ghost": props.variant === 'ghost',
    "button-premium": props.variant === 'premium',
    "button-claim": props.variant === 'claim',
    "button-play": props.variant === 'play',
    "rounded-full": !props.label,
    "button-play": props.play,
    "button-lg": props.size && props.size === 'lg',
    "button-md": props.size && props.size === 'md',
    "button-sm": props.size && props.size === 'sm',
    "button-currency": props.currency,
    "button-coin": props.currency === 'coin',
    "button-token": props.currency === 'token',
    "button-ticket": props.currency === 'ticket'
  });

  const icon = props.icon && (
    <>
        <Icon icon={props.icon} className='icon'></Icon>
        {/*<span className={`${styles.icon} icon-${props.icon}`}/>*/}
    </>
  );

  const label = props.label && (
    <span>
      {props.label}
    </span>
  );

  const image = props.currency === ''

  if (props.currency) {
    return (
      <>
        <button type='button' className={buttonClass}>
          <div>
            <span>{label}</span>
          </div>
          <div>
            <img className="dropshadow-xs" src={`${props.currency === 'coin' ? 'https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png': ''} ${props.currency === 'token' ? 'https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png': ''} ${props.currency === 'ticket' ? 'https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_tiket.png': ''}`} width="34" height="34" alt={props.currency} />
            <span>{props.amount}</span>
          </div>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button type='button' className={buttonClass}>
          {
            props.iconDirection != 'right' ? icon : ''
          }
          {label}
          {
            props.iconDirection == 'right' ? icon : ''
          }
        </button>
      </>
    );
  }
}