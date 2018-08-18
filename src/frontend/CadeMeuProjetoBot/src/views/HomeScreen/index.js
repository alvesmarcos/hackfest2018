import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';
import { Input } from '../../components';
import {
  roboHome,
  roboUsuarioDigitando,
  roboInputVazio,
  roboSemResultado,
} from '../../assets/index';

class HomeScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

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
    // Se nao encontrar resultados
    if (Math.random() > 0.5) {
      return this.setState({ robotImage: roboSemResultado });
    }
    // Encontrou resultados
    return this.props.navigation.navigate('Results');
  };

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
