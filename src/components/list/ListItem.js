import React from 'react';
import PropTypes from 'prop-types';
import { ListItem as ListItemComponent } from 'react-native-elements';
import Swipeable from 'react-native-swipeable';

const ListItem = (props) => {
  const { swipeable, ...listItemProps } = props;
  const item = <ListItemComponent {...listItemProps} />;

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
  swipeable: PropTypes.object,
};

ListItem.defaultProps = {
  swipeable: null,
};

export default ListItem;
