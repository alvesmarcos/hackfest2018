import React from 'react';
import { View } from 'react-native';
import Drawer from 'react-native-draggable-view';

import ChatBot from '../../components';

const DraggerDetailsScreen = ({ navigation }) => (
  <Drawer
    drawerBg="transparent"
    initialDrawerSize={0.09}
    renderContainerView={() => <HomeScreen navigation={navigation} />}
    renderDrawerView={() => <ChatBot step={step} navigation={navigation} />}
    renderInitDrawerView={() => (
      <View style={styles.initDrawerContainer}>
        <StatusBar hidden />
        <InitDrawerHeader />
      </View>
    )}
  />
);

export default DraggerDetailsScreen;
