import React from 'react';
import PropTypes from 'prop-types';
import { ListItem as ListItemComponent } from 'react-native-elements';
import Swipeable from 'react-native-swipeable';

const ListItem = (props) => {
  const {
    selected, selectable, swipeable, ...listItemProps
  } = props;
  let leftIcon = null;

  if (selectable) {
    leftIcon = {
      type: 'material-community',
      name: selected ? 'check-circle' : 'circle-outline',
    };
  }

  const item = (
    <ListItemComponent
      leftIcon={leftIcon}
      {...listItemProps}
    />
  );

  if (swipeable !== null && typeof swipeable === 'object') {
    return (
      <Swipeable {...swipeable}>
        {item}
      </Swipeable>
    );
  }

  return item;
};

ListItem.propTypes = {
  selected: PropTypes.bool,
  selectable: PropTypes.bool,
  swipeable: PropTypes.object,
};

ListItem.defaultProps = {
  selected: false,
  selectable: false,
  swipeable: null,
};

export default ListItem;
