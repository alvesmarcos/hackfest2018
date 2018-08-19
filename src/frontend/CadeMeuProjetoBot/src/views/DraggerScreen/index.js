import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import Drawer from 'react-native-draggable-view';

import styles from './styles';
import HomeScreen from '../HomeScreen';
import { ChatBot, InitDrawerHeader } from '../../components';

const step = [
  {
    id: '1',
    message: 'Qual é o seu nome?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Prazer em conhecer você {previousValue} :)',
    trigger: '4',
  },
  {
    id: '4',
    message: 'Quer saber como utilizar nosso sistema?',
    trigger: '5',
  },
  {
    id: '5',
    options: [{ value: 1, label: 'Sim', trigger: '7' }, { value: 2, label: 'Não', trigger: '6' }],
  },
  {
    id: '6',
    message: 'Certo, então já podemos começar!',
    end: true,
  },
  {
    id: '7',
    message:
      'Nosso aplicativo funciona assim, você utiliza a barra de pesquisa para fazer qualquer pergunta sobre algum tema de seu interesse e retornarenamos os projetos relacionados da Câmara Municipal de João Pessoa.',
    trigger: '8',
  },
  {
    id: '8',
    message: 'Você quer um exemplo de uma pergunta?',
    trigger: '9',
  },
  {
    id: '9',
    options: [{ value: 1, label: 'Sim', trigger: '10' }, { value: 2, label: 'Não', trigger: '6' }],
  },
  {
    id: '10',
    message: 'Ex. Quais projetos relacionados a saúde existem para o bairro de Mangabeira?',
    trigger: '11',
  },
  {
    id: '11',
    message: 'Quer outro exemplo?',
    trigger: '12',
  },
  {
    id: '12',
    options: [{ value: 1, label: 'Sim', trigger: '6' }, { value: 2, label: 'Não', trigger: '6' }],
  },
];

const DraggerScreen = ({ navigation }) => (
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

DraggerScreen.propTypes = {
  navigation: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
};

export default DraggerScreen;
