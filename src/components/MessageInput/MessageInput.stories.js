import React from 'react';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import MessageInput from './MessageInput.component';

const stories = storiesOf('MessageInput', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('Basic Usage', () => (
  <div style={{ width: 200, height: 100, background: 'lightgrey' }}>
    <MessageInput
      placeholder={text('Placeholder', 'Message')}
      isActive={boolean('is Active', true)}
    />
  </div>
));
