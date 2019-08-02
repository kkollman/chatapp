import React from 'react';
import PropTypes from 'prop-types';

import Participant from '../Participant/Participant.component';

import styles from './ParticipantsList.module.scss';

const ParticipantsList = ({ participants }) => {
  return (
    <section className={styles['participants-list']}>
      {participants.map(participant => (
        <Participant name={participant.userName} />
      ))}
    </section>
  );
};

ParticipantsList.propTypes = {
  participants: PropTypes.array,
};

export default ParticipantsList;
