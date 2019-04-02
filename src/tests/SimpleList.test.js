import React from 'react';
import renderer from 'react-test-renderer';
import { SimpleList } from '../components';

const listItems = [...Array(5).keys()].map(i => ({
  title: `Item ${i}`,
  subtitle: `Here is list item number ${i}`,
}));

test('renders correctly', () => {
  const tree = renderer.create(<SimpleList items={listItems} />).toJSON();
  expect(tree).toMatchSnapshot();
});
