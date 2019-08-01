import { inject, observer } from 'mobx-react';
import { compose, withProps } from 'recompose';

import ParticipantsList from './ParticipantsList.component';

const propsMapper = ({ chatStore }) => {
  return {
    participants: chatStore.users,
  };
};

const ParticipantsListContainer = compose(
  inject('chatStore'),
  withProps(propsMapper),
  observer,
)(ParticipantsList);

export default ParticipantsListContainer;
