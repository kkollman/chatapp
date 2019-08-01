import React from 'react';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { random } from 'lodash';
import faker from 'faker';

import ParticipantsList from './ParticipantsList.component';

const stories = storiesOf('Participant', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

const participants = new Array(random(1, 10))
  .fill('')
  .map(() => faker.name.findName());

stories.add('Participants List', () => (
  <ParticipantsList participants={participants} />
));
