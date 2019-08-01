import React from 'react';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { random } from 'lodash';
import faker from 'faker';
import MessageModel from '../../models/Message.model';

import MessageList from './MessageList.component';

const stories = storiesOf('Messages list', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

const messages = new Array(random(1, 10)).fill('').map((element, index) => {
  const message = new MessageModel({
    author: faker.name.findName(),
    content: faker.lorem.sentences(5),
    dateAdded: '15:24',
    id: index,
  });

  message.isDeleted = !!random(0, 1);
  message.isEdited = !!random(0, 1);
  return message;
});

stories.add('Example mocked chat', () => <MessageList messages={messages} />);
