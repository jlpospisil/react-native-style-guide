import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl } from 'react-native';
import ListItem from './ListItem';

const List = (props) => {
  const {
    items, refreshing, selectable, renderItem, onRefresh, ...listProps
  } = props;
  // eslint-disable-next-line react/prop-types
  const defaultRenderItem = ({ item }) => <ListItem selectable={selectable} {...item} />;
  return (
    <FlatList
      data={items}
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
      renderItem={renderItem || defaultRenderItem}
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
  renderItem: null, // eslint-disable-line react/prop-types
  refreshing: false,
  selectable: false,
  onRefresh: null,
};

export default List;
