import React from 'react';
import styles from './App.module.scss';
import { Provider } from 'mobx-react';

import RootStore from './stores/RootStore';
import WidgetHeader from './components/WidgetHeader/WidgetHeader.component';
import WidgetTabs from './components/WidgetTabs/WidgetTabs.component';
import ChatSectionContainer from './components/ChatSection/ChatSection.container';
import MessageInput from './components/MessageInput/MessageInput.component';

const AppStore = new RootStore();

function App() {
  window.rootStore = AppStore;
  return (
    <div className={styles.App}>
      <Provider {...AppStore}>
        <React.Fragment>
          <div className={styles['chat-widget']}>
            <WidgetHeader title={'Status Meeting Standup'} />
            <div className={styles['chat-tabs']}>
              <WidgetTabs />
            </div>
            <ChatSectionContainer />
            <MessageInput />
          </div>
        </React.Fragment>
      </Provider>
    </div>
  );
}

export default App;
