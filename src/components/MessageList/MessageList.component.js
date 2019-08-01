import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

import styles from './MessageList.module.scss';

import Message from '../Message/Message.component';

const MessageList = ({ messages }) => {
  return (
    <section className={cls(styles['message-list'])}>
      {messages.map(message => (
        <Message {...message} key={message.id} />
      ))}
    </section>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array,
};

export default MessageList;
