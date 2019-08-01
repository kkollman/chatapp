import { inject, observer } from 'mobx-react';
import { compose, withProps, withHandlers } from 'recompose';

import WidgetTab from './WidgetTab.component';

const propsMapper = ({ uiStore, id }) => {
  return {
    isActive: uiStore.activeTabId === id,
  };
};

const WidgetTabContainer = compose(
  inject('uiStore'),
  withHandlers({
    onTabClick: ({ uiStore }) => id => {
      uiStore.handleTabClick(id);
    },
  }),
  observer,
  withProps(propsMapper),
  observer,
)(WidgetTab);

export default WidgetTabContainer;
