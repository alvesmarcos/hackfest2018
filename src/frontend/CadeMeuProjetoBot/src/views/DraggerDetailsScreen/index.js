import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import Drawer from 'react-native-draggable-view';

import { InitDrawerHeader, ChatBot } from '../../components';
import DetailsScreen from '../DetailsScreen'
import styles from './styles';

const step = [
  {
    id: '1',
    message: 'Você voltou õ/',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Quer saber mais sobre este vereador?',
    trigger: '3',
  },
  {
    id: '3',
    options: [{ value: 1, label: 'Sim', trigger: '5' }, { value: 2, label: 'Não', trigger: '4' }],
  },
  {
    id: '4',
    message: 'Tá bem, se precisar é só chamar (=',
    end: true
  },
  {
    id: '5',
    message: 'Quais dessas informações você quer saber?',
    trigger: '6',
  },
  {
    id: '6',
    options: [
      { value: 1, label: 'Projetos em tramitações', trigger: '7' }, 
      { value: 2, label: 'Presença', trigger: '4' },
      { value: 3, label: 'Auxílios', trigger: '4' },
      { value: 4, label: 'Salário', trigger: '4' },
      { value: 5, label: 'Partido', trigger: '4' },
    ],
  },
  {
    id: '7',
    message: 'Me pergunte mais, estou gostando =DD Quer perguntar mais?',
    trigger: '8',
  },
  {
    id: '8',
    options: [{ value: 1, label: 'Sim', trigger: '5' }, { value: 2, label: 'Não', trigger: '4' }],
  },
];

const DraggerDetailsScreen = ({ navigation }) => (
  <Drawer
    drawerBg="transparent"
    initialDrawerSize={0.09}
    renderContainerView={() => <DetailsScreen navigation={navigation} />}
    renderDrawerView={() => <ChatBot step={step} navigation={navigation} />}
    renderInitDrawerView={() => (
      <View style={styles.initDrawerContainer}>
        <StatusBar hidden />
        <InitDrawerHeader />
      </View>
    )}
  />
);

DraggerDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
};

export default DraggerDetailsScreen;
