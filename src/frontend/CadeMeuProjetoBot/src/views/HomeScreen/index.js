import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';
import { Input } from '../../components';
import { roboHome, roboUsuarioDigitando, roboInputVazio } from '../../assets/index';

class HomeScreen extends React.Component {
  state = { message: '', robotImage: roboHome };

  onChangeText = (message) => {
    let robotImage = roboHome;
    if (message) {
      robotImage = roboUsuarioDigitando;
    }
    this.setState({ message, robotImage });
  };

  onPress = () => {
    if (!this.state.message) {
      return this.setState({ robotImage: roboInputVazio });
    }
  }

  render() {
    const { message, robotImage } = this.state;
    return (
      <View style={styles.container}>
        <Image source={robotImage} style={styles.robotImage} />
        <Input value={message} onChangeText={this.onChangeText} onPress={this.onPress} />
      </View>
    );
  }
}

export default HomeScreen;
