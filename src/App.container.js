import { inject, observer } from 'mobx-react';
import { compose, lifecycle } from 'recompose';

import App from './App';

const AppContainer = compose(
  inject('chatStore'),
  lifecycle({
    componentDidMount() {
      this.props.chatStore.openConnection();
    },
  }),
  observer,
)(App);

export default AppContainer;
