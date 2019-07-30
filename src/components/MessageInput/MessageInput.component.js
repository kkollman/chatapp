import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

import styles from './MessageInput.module.scss';

const MessageInput = ({ placeholder, isActive }) => {
  return (
    <div className={styles['message-input-wrapper']}>
      <input
        className={cls(styles.input, !isActive && styles['input--disabled'])}
        placeholder={placeholder}
        disabled={!isActive}
      />
    </div>
  );
};

MessageInput.propTypes = {
  placeholder: PropTypes.string,
  isActive: PropTypes.bool,
};

export default MessageInput;
