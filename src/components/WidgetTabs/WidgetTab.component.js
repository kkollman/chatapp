import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import styles from './WidgetTab.module.scss';

const WidgetTab = ({ name, isActive, onTabClick = noop }) => {
  return (
    <div
      onClick={onTabClick}
      className={cls(styles.tab, isActive && styles.active)}
    >
      {name}
    </div>
  );
};

WidgetTab.propTypes = {
  name: PropTypes.string,
  isActive: PropTypes.bool,
  onTabClick: PropTypes.func,
};

export default WidgetTab;
