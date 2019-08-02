import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChatSection.module.scss';

import MessageList from '../MessageList/MessageList.container';
import ParticipantsList from '../ParticipantsList/ParticipantsList.container';

const ChatSection = ({ activeSection }) => {
  return (
    <div className={styles.chat}>
      {activeSection === 'chat' && <MessageList />}
      {activeSection === 'participants' && <ParticipantsList />}
    </div>
  );
};

ChatSection.propTypes = {
  activeSection: PropTypes.string,
};

export default ChatSection;
