import { inject, observer } from 'mobx-react';
import { compose, withProps } from 'recompose';

import ChatSection from './ChatSection.component';

const propsMapper = ({ uiStore }) => {
  return {
    activeSection: uiStore.activeTabId,
  };
};

const ChatSectionContainer = compose(
  inject('uiStore'),
  observer,
  withProps(propsMapper),
  observer,
)(ChatSection);

export default ChatSectionContainer;
