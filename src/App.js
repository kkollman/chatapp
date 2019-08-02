import React from 'react';
import styles from './App.module.scss';

import WidgetHeader from './components/WidgetHeader/WidgetHeader.component';
import WidgetTabs from './components/WidgetTabs/WidgetTabs.component';
import ChatSectionContainer from './components/ChatSection/ChatSection.container';
import MessageInputContainer from './components/MessageInput/MessageInput.container';

function App() {
  return (
    <div className={styles.App}>
      <React.Fragment>
        <div className={styles['chat-widget']}>
          <WidgetHeader title={'Status Meeting Standup'} />
          <div className={styles['chat-tabs']}>
            <WidgetTabs />
          </div>
          <ChatSectionContainer />
          <MessageInputContainer />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
