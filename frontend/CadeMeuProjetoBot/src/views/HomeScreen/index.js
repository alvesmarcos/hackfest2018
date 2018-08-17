import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class HomeScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cadê meu projeto?</Text>
      </View>
    );
  }
}

export default HomeScreen;
