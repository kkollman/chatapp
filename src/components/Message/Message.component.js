import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

import styles from './Message.module.scss';

const Message = ({ author, dateAdded, content, isEdited, isDeleted }) => {
  const isSystemMessage = author === 'system';

  return (
    <article
      className={cls(
        styles.message,
        isEdited && styles.edited,
        isDeleted && styles.deleted,
        isSystemMessage && styles.system,
      )}
    >
      <header className={styles['message-header']}>
        <p className={styles['message-header-author']}>
          {author}
          <span className={styles['message-header-date']}>{dateAdded}</span>
        </p>
      </header>
      <div>
        <p className={styles['message-content']}>
          {isDeleted ? 'This message has been removed.' : content}
          {isEdited && !isDeleted && (
            <span className={styles['edited-mark']}> (Edited)</span>
          )}
        </p>
      </div>
    </article>
  );
};

Message.propTypes = {
  author: PropTypes.string,
  dateAdded: PropTypes.string,
  content: PropTypes.string,
  isEdited: PropTypes.bool,
  isDeleted: PropTypes.bool,
};

export default Message;
