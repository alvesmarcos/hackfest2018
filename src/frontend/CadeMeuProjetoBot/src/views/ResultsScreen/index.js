import React, { Component } from 'react';

import { View, Image } from 'react-native';
import { roboResultadoFeliz } from '../../assets/index';

import styles from './styles';
import { Input } from '../../components';

export default class ResultsScreen extends Component {
  state = { message: '', robotImage: roboResultadoFeliz };

  onChangeText = message => this.setState({ message });

  onPress = () => false;

  render() {
    const { message, robotImage } = this.state;
    return (
      <View style={styles.container}>
        <Input value={message} onChangeText={this.onChangeText} onPress={this.onPress} />
        <Image source={robotImage} style={styles.robotImage} />
      </View>
    );
  }
}
