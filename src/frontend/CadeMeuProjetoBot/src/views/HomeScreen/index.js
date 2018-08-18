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
  roboPensando,
} from '../../assets/index';

class HomeScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = { message: '', robotImage: roboHome, loading: false };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loading !== this.state.loading && this.state.loading) {
      this.setState({ robotImage: roboPensando }); // eslint-disable-line
    }
  }

  onChangeText = (message) => {
    let robotImage = roboHome;
    if (message) {
      robotImage = roboUsuarioDigitando;
    }
    this.setState({ message, robotImage });
  };

  delaySimulator = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random() > 0.5);
    }, 1500);
  });

  onPress = async () => {
    if (!this.state.message) {
      return this.setState({ robotImage: roboInputVazio });
    }
    this.setState({ loading: true });
    const result = await this.delaySimulator();
    // Se nao encontrar resultados
    if (!result) {
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
