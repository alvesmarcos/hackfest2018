import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import Drawer from 'react-native-draggable-view';

import styles from './styles';
import HomeScreen from '../HomeScreen';
import InitDrawerHeader from './components/InitDrawerHeader';
import ChaBot from './components/ChatBot';

const DraggerScreen = ({ navigation }) => (
  <Drawer
    drawerBg="transparent"
    initialDrawerSize={0.09}
    renderContainerView={() => <HomeScreen navigation={navigation} />}
    renderDrawerView={() => <ChaBot navigation={navigation} />}
    renderInitDrawerView={() => (
      <View style={styles.initDrawerContainer}>
        <StatusBar hidden />
        <InitDrawerHeader />
      </View>
    )}
  />
);

DraggerScreen.propTypes = {
  navigation: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
};

export default DraggerScreen;
