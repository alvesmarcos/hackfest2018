import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';

import { roboResultadoFeliz } from '../../assets/index';
import styles from './styles';
import { Input } from '../../components';
import RenderCard from './components/RenderCard';
import { metrics } from '../../styles';

class ResultsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = { robotImage: roboResultadoFeliz };

  onPress = () => this.props.navigation.goBack();

  keyExtractor = (item, index) => `${index}`;

  onItemPress = data => this.props.navigation.navigate('Details', { data });

  renderItem = ({ item }) => <RenderCard data={item} onPress={() => this.onItemPress(item)} />;

  renderHeader = () => (
    <View style={styles.containerHeader}>
      <Input
        style={styles.input}
        value={this.props.navigation.getParam('message')}
        onChangeText={() => false}
        onPress={this.onPress}
        editable={false}
      />
      <Image source={this.state.robotImage} style={styles.robotImage} />
    </View>
  );

  render() {
    const { data } = this.props;
    //--
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <Carousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={metrics.sliderWidth}
          itemWidth={metrics.itemWidth}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer,
});

export default connect(mapStateToProps, {})(ResultsScreen);