import { inject, observer } from 'mobx-react';
import { compose, withProps, withHandlers, lifecycle } from 'recompose';

import MessageInput from './MessageInput.component';

const propsMapper = ({ chatStore, uiStore }) => {
  return {
    messages: chatStore.messages,
    placeholder: uiStore.inputPlaceholder,
  };
};

const MessageInputContainer = compose(
  inject('chatStore', 'uiStore'),
  observer,
  withProps(propsMapper),
  withHandlers({
    onSubmit: ({ uiStore, chatStore }) => input => {
      if (!chatStore.username) {
        chatStore.registerUser(input);
        uiStore.inputPlaceholder = 'Message';
      } else {
        chatStore.sendMessage(input);
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      const input = document.querySelector('#input');
      if (input) {
        input.addEventListener('keydown', e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.props.onSubmit(e.target.value);
            e.target.value = '';
          }
        });
      }
    },
  }),
  observer,
)(MessageInput);

export default MessageInputContainer;
