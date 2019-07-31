import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

import styles from './WidgetHeader.module.scss';

const WidgetHeader = ({ title }) => {
  return <div className={cls(styles.header)}>{title}</div>;
};

WidgetHeader.propTypes = {
  title: PropTypes.string,
};

export default WidgetHeader;
