import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Container = (props) => {
  const { children, style, ...containerProps } = props;
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      {...containerProps}
    >
      {children}
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.object,
};

Container.defaultProps = {
  style: {},
};

export default Container;
