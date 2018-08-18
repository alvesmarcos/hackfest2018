import React, { Component } from 'react';
import { View, Image, TouchableOpacity, } from 'react-native';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

import { roboResultadoFeliz } from '../../assets/index';
import styles from './styles';
import { Input } from '../../components';

export default class ResultsScreen extends Component {
  state = { robotImage: roboResultadoFeliz };

  onPress = () => false;

  render() {
    const { robotImage } = this.state;
    const  { navigation } = this.props;
    const message = navigation.getParam('message');

    return (
      <View style={styles.container}>
          <Input value={message} onChangeText={() => false} onPress={this.onPress} editable={false} />
          <Image source={robotImage} style={styles.robotImage} />
      </View>
    );
  }
}
