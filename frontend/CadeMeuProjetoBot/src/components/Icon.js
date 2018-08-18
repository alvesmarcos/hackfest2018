import React from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Icon = ({ lib, ...props }) => {
  switch (lib.toLowerCase()) {
    case 'ionicons':
      return <Ionicons {...props} />;
    case 'entypo':
      return <Entypo {...props} />;
    case 'materialcommunityicons':
      return <MaterialCommunityIcons {...props} />;
    case 'materialicons':
      return <MaterialIcons {...props} />;
    case 'fontawesome':
      return <FontAwesome {...props} />;
    case 'feather':
      return <Feather {...props} />;
    default:
      return <Feather {...props} />;
  }
};

Icon.propTypes = {
  lib: PropTypes.string,
};

Icon.defaultProps = {
  lib: '',
};

export default Icon;
