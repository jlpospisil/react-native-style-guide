import React from 'react';
import renderer from 'react-test-renderer';
import { SimpleList } from '../components';

const listItems = [...Array(5).keys()].map(i => ({
  title: `Item ${i}`,
  subtitle: `Here is list item number ${i}`,
}));

test('matches snapshot', () => {
  const tree = renderer.create(<SimpleList items={listItems} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('throws error', () => {
  const tree = () => <SimpleList />;
  expect(tree).toThrowError('Failed prop type');
});
