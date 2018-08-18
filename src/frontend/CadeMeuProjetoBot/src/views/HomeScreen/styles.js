import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.distance,
    backgroundColor: colors.primary,
    marginBottom: 45,
  },
  robotImage: {
    resizeMode: 'contain',
    height: metrics.robotHeight,
  },
  text: {
    color: colors.white,
    fontSize: fonts.bigger * 1.5,
    ...fonts.fontWeightLight,
    marginBottom: metrics.distance,
  },
});

export default styles;
