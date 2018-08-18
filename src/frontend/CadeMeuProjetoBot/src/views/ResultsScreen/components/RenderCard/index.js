import React, { Component } from 'react';

import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class RenderCard extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text>akskask ask askas k</Text>
        <Text>akskask ask askas k</Text>
        <Text>akskask ask askas k</Text>
        <Text>akskask ask askas k</Text>
        <Text>akskask ask askas k</Text>
        <Text>akskask ask askas k</Text>
      </TouchableOpacity>
    );
  }
}
