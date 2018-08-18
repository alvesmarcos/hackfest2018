import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { mockFotoVereador } from '../../../../assets';

import styles from './styles';

export default class RenderCard extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.containerImage}>
          <Image 
            source={mockFotoVereador}
            style={styles.image}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
          <Text>Data</Text>
          <Text>Numero</Text>
        </View>
        <Text>Apelido</Text>
        <Text>{'Tramitação'}</Text>
      </TouchableOpacity>
    );
  }
}
