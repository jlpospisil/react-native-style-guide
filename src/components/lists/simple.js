import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl } from 'react-native';
import { ListItem } from 'react-native-elements';

const SimpleList = (props) => {
  const {
    items, refreshing, onRefresh, ...listProps
  } = props;
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
      {...listProps}
    />
  );
};

SimpleList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func,
  refreshing: PropTypes.bool,
  onRefresh: PropTypes.func,
};

SimpleList.defaultProps = {
  keyExtractor: (item, index) => index.toString(),
  renderItem: ({ item }) => <ListItem {...item} />, // eslint-disable-line react/prop-types
  refreshing: false,
  onRefresh: null,
};

export default SimpleList;
