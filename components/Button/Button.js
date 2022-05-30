import Icon from '../Icon/Icon';
import React from 'react';
import classNames from 'classnames';
import styles from '../../assets/styles/Button.module.css'

export default function Button(props) {
  const buttonClass = classNames({
    [styles["button"]]: true,
    [styles["button-"+props.variant]]: props.variant,
    "rounded-full": !props.label
  });
  const icon = props.icon && (
    <Icon icon={props.icon}></Icon>
  );
  const label = props.label && (
    <span>
      {props.label}
    </span>
  );
  return (
    <>
      <button role='button' className={buttonClass}>
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