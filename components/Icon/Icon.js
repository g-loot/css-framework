import React from 'react';
import classNames from 'classnames';
import styles from '../../assets/styles/icons.module.css'

export default function Icon(props) {
  const iconClass = classNames(
    [styles.icon],
    [styles["icon-"+props.icon]]
  );
  return (
    <>
      <span className={iconClass}> </span>
    </>
  );
}