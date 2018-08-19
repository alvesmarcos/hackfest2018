import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const InfoComponent = ({ label, info, full }) => {
  const infoFormatted = info.charAt(0).toUpperCase() + info.slice(1).toLowerCase();
  return (
    <View style={styles.containerInfo}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <Text numberOfLines={full ? null : 2} ellipsizeMode="tail" style={styles.info}>
        {infoFormatted}
      </Text>
    </View>
  );
};

InfoComponent.propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
  full: PropTypes.bool,
};

InfoComponent.defaultProps = {
  info: 'Não informado',
  full: false,
};

export default InfoComponent;
