import React from 'react';
import PropTypes from 'prop-types';

import styles from './Participant.module.scss';

const Participant = ({ name }) => {
  return (
    <article className={styles.participant}>
      <p className={styles['participant-name']}>{name}</p>
    </article>
  );
};

Participant.propTypes = {
  name: PropTypes.string,
};

export default Participant;
