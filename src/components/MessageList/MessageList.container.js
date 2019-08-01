import { inject, observer } from 'mobx-react';
import { compose, withProps } from 'recompose';

import MessageList from './MessageList.component';

const propsMapper = ({ chatStore }) => {
  return {
    messages: chatStore.messages,
  };
};

const MessageListContainer = compose(
  inject('chatStore'),
  withProps(propsMapper),
  observer,
)(MessageList);

export default MessageListContainer;
