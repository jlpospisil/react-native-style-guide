import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, Text } from 'react-native';

const List = (props) => {
  const { items, ...listProps } = props;
  return (
    <FlatList
      data={items}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{
        alignSelf: 'stretch',
      }}
      // refreshControl={(
      //   <RefreshControl
      //     refreshing={loading}
      //     onRefresh={this.loadAccounts}
      //   />
      // )}
      {...listProps}
    />
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.object,
    })
  ).isRequired,
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func,
};

List.defaultProps = {
  keyExtractor: item => item.key.toString(),
  renderItem: ({ item }) => <Text>{item.value}</Text>,
};

export default List;
