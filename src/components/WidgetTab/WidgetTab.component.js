import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import styles from './WidgetTab.module.scss';

const WidgetTab = ({ name, isActive, onTabClick = noop, id }) => {
  return (
    <div
      onClick={() => onTabClick(id)}
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
  id: PropTypes.string,
};

export default WidgetTab;
