import React from 'react';
import PropTypes from 'prop-types';

import styles from './WidgetTabs.module.scss';
import WidgetTabContainer from '../WidgetTab/WidgetTab.container';

const WidgetTabs = ({ participants }) => {
  return (
    <div className={styles['widget-tabs']}>
      <WidgetTabContainer
        name={`Participants (${participants})`}
        id={'participants'}
      />
      <WidgetTabContainer name={'Chat'} id={'chat'} />
    </div>
  );
};

WidgetTabs.propTypes = {
  participants: PropTypes.string,
};

export default WidgetTabs;
