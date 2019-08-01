import React from 'react';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import WidgetTab from './WidgetTab.component';

const stories = storiesOf('Widget tab', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('General usage', () => (
  <div
    style={{
      height: 350,
      width: 350,
      background: '#ebebeb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
    }}
  >
    <WidgetTab
      isActive={boolean('is active', true)}
      name={text('Tab name', 'Chat')}
      onTabClick={() => console.log('Tab clicked')}
    />
  </div>
));
