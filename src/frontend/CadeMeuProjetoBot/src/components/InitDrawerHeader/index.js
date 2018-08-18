import React from 'react';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import styles from './styles';
import { apenasRosto } from '../../assets';

export default () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.drag} />
    <View style={styles.content}>
      {/* <Text style={styles.header}>Olá, estou aqui!</Text> */}
      <Image source={apenasRosto} style={styles.image} />
    </View>
  </SafeAreaView>
);
