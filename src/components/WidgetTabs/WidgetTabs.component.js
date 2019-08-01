import React from 'react';

import styles from './WidgetTabs.module.scss';
import WidgetTabContainer from '../WidgetTab/WidgetTab.container';

const WidgetTabs = () => {
  return (
    <div className={styles['widget-tabs']}>
      <WidgetTabContainer name={'Participants'} id={'participants'} />
      <WidgetTabContainer name={'Chat'} id={'chat'} />
    </div>
  );
};

export default WidgetTabs;
