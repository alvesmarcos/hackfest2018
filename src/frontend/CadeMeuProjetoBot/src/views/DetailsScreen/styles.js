import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.distance,
    backgroundColor: colors.white,
    marginBottom: 45,
  },
});

export default styles;
