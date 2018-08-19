import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const InfoComponent = ({ label, info }) => {
  const infoFormatted = info.charAt(0).toUpperCase() + info.slice(1).toLowerCase();
  return (
    <View style={styles.containerInfo}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.info}>
        {infoFormatted}
      </Text>
    </View>
  );
};

InfoComponent.propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
};

InfoComponent.defaultProps = {
  info: 'Não informado',
};

export default InfoComponent;
