import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { roboResultadoFeliz } from '../../assets/index';
import styles from './styles';
import { Input } from '../../components';
import RenderCard from './components/RenderCard';
import { metrics } from '../../styles';

const exampleData = [
  {
    numero: '805/2018',
    ementa:
      'OBRIGA AS PESSOAS JURÍDICAS QUE OPERAM PLANOS DE ASSISTÊNCIA ODONTOLÓGICA NO MUNICÍPIO DE JOÃO PESSOA A SE ADEQUAREM AOS VALORES REFERENCIAIS DA CLASSIFICAÇÃO BRASILEIRA HIERARQUIZADA DE PROCEDIMENTOS ODONTOLÓGICOS.',
    indexacao: 'PREÇO TRATAMENTO DENTÁRIO DENTE ODONTÓLOGO ODONTOLOGIA',
    autor: 'Raíssa Gomes Lacerda Rodrigues de Aquino',
    apelido: 'PROCEDIMENTOS ODONTOLÓGICOS',
    objeto:
      'OBRIGA AS PESSOAS JURÍDICAS QUE OPERAM PLANOS DE ASSISTÊNCIA ODONTOLÓGICA NO MUNICÍPIO DE JOÃO PESSOA A SE ADEQUAREM AOS VALORES REFERENCIAIS DA CLASS',
    emTramitacao: true,
    materiaPolemica: false,
    regimeTramitacao: 'Normal',
    textoIntegral: 'http://177.200.32.195:9673/sapl/sapl_documentos/materia/78450_texto_integral',
    tramites: [
      {
        data: '15/08/2018',
        origem: 'PARLAMENTAR',
        destino: 'Secretaria Legislativa',
        turno: 'Único',
        situacao: 'ENVIADO PARA LEITURA EM PLENÁRIO',
        ultimaAcao: 'ENVIADO PARA A LEITURA EM PLENÁRIO NO DIA 21/08/2018.',
      },
    ],
  },
  {
    numero: '482/2006',
    ementa: 'DENOMINA DE RUA INÁCIA PESSOA DA SILVA',
    indexacao: 'RUA INÁCIA PESSOA DA SILVA',
    autor: 'Luciano Cartaxo Pires',
    apelido: 'LOGRADOURO PÚBLICO',
    objeto: 'NOME DE RUA',
    emTramitacao: false,
    materiaPolemica: false,
    regimeTramitacao: 'Normal',
    textoIntegral: 'http://177.200.32.195:9673/sapl/sapl_documentos/materia/1055_texto_integral',
    tramites: [
      {
        data: '10/05/2006',
        origem: 'Executivo PMJP',
        destino: 'Secretaria Legislativa',
        turno: 'Único',
        situacao: 'L E I',
        ultimaAcao:
          'LEI Nº 10.758, DE 10/05/2006 PUBLICADA NO SEMANÁRIO MUNICIPAL Nº 1009, DE 14 A 20/05/2006',
      },
      {
        data: '19/04/2006',
        origem: 'Plenário',
        destino: 'Executivo PMJP',
        turno: 'Único',
        situacao: 'Aprovado em Plenário',
        ultimaAcao: 'AUTÓGRAFO Nº 040/2006 SANÇÃO OFICIO Nº 011/DDA/2006 DE 25/04/2006',
      },
      {
        data: '22/03/2006',
        origem: 'Plenário',
        destino: 'Comissão de Constituição, Justiça, Redação e Legis. Part.',
        turno: 'Único',
        situacao: 'Aguardando Parecer',
        ultimaAcao: 'ENCAMINHANDO PARA COMISSÃO DE CONSTITUIÇÃO E JUSTIÇA EM 23/03/2006',
      },
    ],
  },
  {
    numero: '805/2018',
    ementa:
      'OBRIGA AS PESSOAS JURÍDICAS QUE OPERAM PLANOS DE ASSISTÊNCIA ODONTOLÓGICA NO MUNICÍPIO DE JOÃO PESSOA A SE ADEQUAREM AOS VALORES REFERENCIAIS DA CLASSIFICAÇÃO BRASILEIRA HIERARQUIZADA DE PROCEDIMENTOS ODONTOLÓGICOS.',
    indexacao: 'PREÇO TRATAMENTO DENTÁRIO DENTE ODONTÓLOGO ODONTOLOGIA',
    autor: 'Raíssa Gomes Lacerda Rodrigues de Aquino',
    apelido: 'PROCEDIMENTOS ODONTOLÓGICOS',
    objeto:
      'OBRIGA AS PESSOAS JURÍDICAS QUE OPERAM PLANOS DE ASSISTÊNCIA ODONTOLÓGICA NO MUNICÍPIO DE JOÃO PESSOA A SE ADEQUAREM AOS VALORES REFERENCIAIS DA CLASS',
    emTramitacao: true,
    materiaPolemica: false,
    regimeTramitacao: 'Normal',
    textoIntegral: 'http://177.200.32.195:9673/sapl/sapl_documentos/materia/78450_texto_integral',
    tramites: [
      {
        data: '15/08/2018',
        origem: 'PARLAMENTAR',
        destino: 'Secretaria Legislativa',
        turno: 'Único',
        situacao: 'ENVIADO PARA LEITURA EM PLENÁRIO',
        ultimaAcao: 'ENVIADO PARA A LEITURA EM PLENÁRIO NO DIA 21/08/2018.',
      },
    ],
  },
];

export default class ResultsScreen extends Component {
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
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <Carousel
          data={exampleData}
          renderItem={this.renderItem}
          sliderWidth={metrics.sliderWidth}
          itemWidth={metrics.itemWidth}
        />
      </View>
    );
  }
}
