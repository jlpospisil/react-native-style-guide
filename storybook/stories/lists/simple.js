import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react-native';
import { storybookContainer } from '../../decorators';
import { SimpleList } from '../../../src/components';

const listItems = [...Array(5).keys()].map(i => ({
  title: `Item ${i}`,
  subtitle: `Here is list item number ${i}`,
}));

storiesOf('List', module)
  .addDecorator(storybookContainer)
  .add('Simple', () => (
    <SimpleList items={listItems} />
  ))
  .add('Simple with left avatar', () => (
    <SimpleList
      items={listItems.map(i => ({
        ...i,
        leftAvatar: { title: i.title[i.title.length - 1] }
      }))}
    />
  ))
  .add('Simple with right avatar', () => (
    <SimpleList
      items={listItems.map(i => ({
        ...i,
        rightAvatar: { title: i.title[i.title.length - 1] }
      }))}
    />
  ))
  .add('Simple with badge', () => (
    <SimpleList
      items={listItems.map(i => ({
        ...i,
        badge: { value: i.title[i.title.length - 1] }
      }))}
    />
  ));
