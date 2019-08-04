import { inject, observer } from 'mobx-react';
import { compose, withProps } from 'recompose';

import WidgetTabs from './WidgetTabs.component';

const propsMapper = ({ chatStore }) => {
  return {
    participants: chatStore.users.filter(participant => participant.userName)
      .length,
  };
};

const WidgetTabsContainer = compose(
  inject('chatStore'),
  observer,
  withProps(propsMapper),
  observer,
)(WidgetTabs);

export default WidgetTabsContainer;
