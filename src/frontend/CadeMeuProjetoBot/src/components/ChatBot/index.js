import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Bot from 'react-native-chatbot';

import styles from './styles';

const ChaBot = ({ step }) => (
  <View style={styles.container}>
    <Bot steps={step} />
  </View>
);

ChaBot.propTypes = {
  step: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChaBot;
