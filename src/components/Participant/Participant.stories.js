import React from 'react';
import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Participant from './Participant.component';

const stories = storiesOf('Participant', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('Basic usage', () => (
  <Participant name={text('Participant name', 'Janina A. Ninja')} />
));
