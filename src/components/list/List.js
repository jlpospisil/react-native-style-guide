import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl } from 'react-native';
import ListItem from './ListItem';

const List = (props) => {
  const {
    items, refreshing, selectable, onRefresh, ...listProps
  } = props;
  const data = items.map(i => ({ selectable, ...i }));
  return (
    <FlatList
      data={data}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{
        alignSelf: 'stretch',
      }}
      refreshControl={onRefresh ? (
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      ) : null}
      {...listProps}
    />
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func,
  refreshing: PropTypes.bool,
  selectable: PropTypes.bool,
  onRefresh: PropTypes.func,
};

List.defaultProps = {
  keyExtractor: (item, index) => index.toString(),
  renderItem: ({ item }) => <ListItem {...item} />, // eslint-disable-line react/prop-types
  refreshing: false,
  selectable: false,
  onRefresh: null,
};

export default List;
