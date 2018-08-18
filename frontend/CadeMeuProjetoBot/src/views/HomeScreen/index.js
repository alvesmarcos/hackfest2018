import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { Input } from '../../components';

class HomeScreen extends React.Component {
  state = { message: '' };

  onChangeText = message => this.setState({ message });

  render() {
    const { message } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cadê meu projeto?</Text>
        <Input value={message} onChangeText={this.onChangeText} onPress={() => false} />
      </View>
    );
  }
}

export default HomeScreen;
