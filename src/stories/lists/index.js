import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react-native';
import { Text, TouchableOpacity } from 'react-native';
import { storybookContainer } from '../../../.storybook/decorators';
import { List } from '../../components';

// Setup variables and components to be used inside stories
const listItems = [...Array(5).keys()].map(i => ({
  title: `Item ${i}`,
  subtitle: `Here is list item number ${i}`,
}));

const buttonStyle = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 65,
  borderWidth: 2,
  borderRadius: 6,
  marginLeft: 2,
};

const leftButtonContainerStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
};

const Button = (props) => {
  const { text, color } = props; // eslint-disable-line react/prop-types
  return (
    <TouchableOpacity style={{ ...buttonStyle, borderColor: color }}>
      <Text style={{ color, fontWeight: 'bold' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const swipeableButtons = [
  <Button text='Btn1' color='#607d8b' />,
  <Button text='Btn2' color='#d84315' />,
];

// Add Stories
storiesOf('List', module)
  .addDecorator(storybookContainer)
  .add('Simple', () => (
    <List items={listItems} />
  ))
  .add('With left avatars', () => (
    <List
      items={listItems.map(i => ({
        ...i,
        leftAvatar: { title: i.title[i.title.length - 1] }
      }))}
    />
  ))
  .add('With right avatars', () => (
    <List
      items={listItems.map(i => ({
        ...i,
        rightAvatar: { title: i.title[i.title.length - 1] }
      }))}
    />
  ))
  .add('With badges', () => (
    <List
      items={listItems.map(i => ({
        ...i,
        badge: { value: i.title[i.title.length - 1] }
      }))}
    />
  ))
  .add('Swipeable right buttons', () => (
    <List
      items={listItems.map(i => ({
        ...i,
        swipeable: {
          rightButtons: swipeableButtons,
          rightButtonWidth: buttonStyle.width + 2,
        },
      }))}
    />
  ))
  .add('Swipeable left buttons', () => (
    <List
      items={listItems.map(i => ({
        ...i,
        swipeable: {
          leftButtons: swipeableButtons,
          leftButtonWidth: buttonStyle.width + 2,
          leftContainerStyle: leftButtonContainerStyle,
          leftButtonContainerStyle,
        },
      }))}
    />
  ));
