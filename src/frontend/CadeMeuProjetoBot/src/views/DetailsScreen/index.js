import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity, ScrollView, Linking,
} from 'react-native';

import styles from './styles';
import { vereadores } from '../../assets';
import { Icon } from '../../components';
import InfoComponent from '../ResultsScreen/components/InfoComponent';

class DetailsScreen extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      numero: PropTypes.string,
      ementa: PropTypes.string,
      indexacao: PropTypes.string,
      autor: PropTypes.string,
      apelido: PropTypes.string,
      objeto: PropTypes.string,
      emTramitacao: PropTypes.bool,
      materiaPolemica: PropTypes.bool,
      regimeTramitacao: PropTypes.string,
      textoIntegral: PropTypes.string, // link
      tramites: PropTypes.arrayOf(
        PropTypes.shape({
          data: PropTypes.string,
          origem: PropTypes.string,
          destino: PropTypes.string,
          turno: PropTypes.string,
          situacao: PropTypes.string,
          ultimaAcao: PropTypes.string,
        }),
      ),
    }).isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {};

  /**
   * Abrir link texto integral
   */
  handleClick = () => {
    const { data } = this.props;
    Linking.canOpenURL(data.textoIntegral).then((supported) => {
      if (supported) {
        Linking.openURL(data.textoIntegral);
      } else {
        console.log(`Don't know how to open URI: ${data.textoIntegral}`);
      }
    });
  };

  render() {
    const { data, navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.arrowBack}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={30} color="white" />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image source={vereadores(data.autor)} style={styles.image} />
          </View>
          <Text style={styles.autorLabel}>AUTOR(A)</Text>
          <Text style={styles.name}>{data.autor}</Text>
          <View style={styles.row}>
            {/* <Text style={styles.info}>Data</Text> */}
            <View style={styles.containerInfo}>
              <Text style={styles.label}>NÚMERO</Text>
              <Text style={styles.info}>{data.numero}</Text>
            </View>
            <View style={styles.verticalHr} />
            <View style={styles.containerInfo}>
              <Text style={styles.label}>EM TRAMITAÇÃO</Text>
              <Text style={styles.info}>{data.emTramitacao ? 'Sim' : 'Não'}</Text>
            </View>
            <View style={styles.verticalHr} />
            <View style={styles.containerInfo}>
              <Text style={styles.label}>POLÊMICO</Text>
              <Text style={styles.info}>{data.materiaPolemica ? 'Sim' : 'Não'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <InfoComponent full label="Apelido" info={data.apelido} />
          <InfoComponent full label="Ementa" info={data.ementa} />
          <InfoComponent full label="Regime Tramitação" info={data.regimeTramitacao} />
          <InfoComponent full label="Indexação" info={data.indexacao} />
          <InfoComponent full label="Objeto" info={data.objeto} />
          <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={this.handleClick}>
            <Text style={styles.btnText}>ACESSAR TEXTO INTEGRAL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default DetailsScreen;
