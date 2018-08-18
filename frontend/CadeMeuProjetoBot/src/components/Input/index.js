import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon } from '..';
import { colors } from '../../styles';

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  state = {};

  render() {
    const { value, onChangeText, onPress } = this.props;
    return (
      <View style={styles.containerSearch}>
        <View style={styles.textInputContainer}>
          <TextInput onChangeText={text => onChangeText(text)} value={value} />
        </View>
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
          <Icon name="search" size={18} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  }
}