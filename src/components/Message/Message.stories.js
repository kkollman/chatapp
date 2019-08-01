import React from 'react';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Message from './Message.component';

const stories = storiesOf('Message', module);
stories.addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
);
stories.addDecorator(centered);

stories.add('Regular usage', () => (
  <div style={{ maxWidth: 500, background: '#fafafa', padding: '3em' }}>
    <Message
      author={text('Author', 'Ed Edwards')}
      dateAdded={text('Date', '15:12')}
      content={text(
        'Message content',
        "He's nervous, but on the surface he looks calm and ready\n" +
          "To drop bombs, but he keeps on forgettin'\n" +
          'What he wrote down, the whole crowd goes so loud',
      )}
      isEdited={boolean('is edited', false)}
      isDeleted={boolean('is deleted', false)}
    />
  </div>
));
