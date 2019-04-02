import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Container, List } from '../../src/components';

const listItems = [...Array(5).keys()].map(i => ({
  key: i.toString(),
  value: `Here is list item number ${i}`,
}));

storiesOf('List', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('list', () => (
    <List items={listItems} />
  ));
