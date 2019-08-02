import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.container';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import RootStore from './stores/RootStore';

const AppStore = new RootStore();

const ChatApp = () => {
  window.rootStore = AppStore;
  return (
    <Provider {...AppStore}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<ChatApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
