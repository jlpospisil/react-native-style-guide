import React from 'react';
import PropTypes from 'prop-types';
import { ListItem as ListItemComponent } from 'react-native-elements';
import Swipeable from 'react-native-swipeable';

const ListItem = (props) => {
  const { selectable, swipeable, ...listItemProps } = props;
  const item = (
    <ListItemComponent
      leftIcon={selectable ? { name: 'check-circle' } : null}
      {...listItemProps}
    />
  );

  // TODO: only show selection checkboxes if 1 or more items are selected
  // TODO: implement first selection on long press
  // TODO: track and emit selected items

  if (typeof swipeable === 'object') {
    return (
      <Swipeable {...swipeable}>
        {item}
      </Swipeable>
    );
  }

  return item;
};

ListItem.propTypes = {
  selectable: PropTypes.bool,
  swipeable: PropTypes.object,
};

ListItem.defaultProps = {
  selectable: false,
  swipeable: null,
};

export default ListItem;
