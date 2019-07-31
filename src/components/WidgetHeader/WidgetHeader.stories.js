import React from 'react';
import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import WidgetHeader from './WidgetHeader.component';

const stories = storiesOf('Widget Header', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('Basic usage', () => (
  <WidgetHeader title={text('Title', 'Status Meeting Standup')} />
));
