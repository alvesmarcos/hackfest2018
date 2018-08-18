import React from 'react';
import { View } from 'react-native';
import Bot from 'react-native-chatbot';

import styles from './styles';

const ChaBot = props => (
  <View style={styles.container}>
    <Bot steps={props.step} />
  </View>
);
 
export default ChaBot;
