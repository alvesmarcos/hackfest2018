import React, { Component } from 'react';
import {
  TouchableOpacity, Text, Image, View,
} from 'react-native';
import PropTypes from 'prop-types';

import { mockFotoVereador } from '../../../../assets';
import InfoComponent from '../InfoComponent';

import styles from './styles';

export default class RenderCard extends Component {
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
  };

  state = {};

  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.7}>
        <View style={styles.containerImage}>
          <Image source={mockFotoVereador} style={styles.image} />
        </View>
        <Text style={styles.autor}>{data.autor}</Text>
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
        <InfoComponent label="Apelido" info={data.apelido} />
        <InfoComponent label="Ementa" info={data.ementa} />
        <InfoComponent label="Regime Tramitação" info={data.regimeTramitacao} />
      </TouchableOpacity>
    );
  }
}
