import React from 'react';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Component from './Component.component';

const stories = storiesOf('Component', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('First scenario', () => <Component />);
