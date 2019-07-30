import React from 'react';
import cls from 'classnames';

import styles from './Component.module.scss';

const Component = () => {
  return <div className={cls(styles.base)}>Component</div>;
};

export default Component;
