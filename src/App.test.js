import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.container';
import { Provider } from 'mobx-react';
import RootStore from './stores/RootStore';

const WrappedApp = () => {
  const AppStore = new RootStore();

  return (
    <Provider {...AppStore}>
      <App />
    </Provider>
  );
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WrappedApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
