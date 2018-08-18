import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import styles from './styles';

export default () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.drag} />
    <View style={styles.content}>
      <Text style={styles.header}>Olá, estou aqui!</Text>
    </View>
  </SafeAreaView>
);
