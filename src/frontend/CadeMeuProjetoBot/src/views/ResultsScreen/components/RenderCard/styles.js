import { StyleSheet } from 'react-native';

import { metrics, colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.distance,
    margin: metrics.halfDistance,
    ...metrics.shadow,
    borderRadius: metrics.radius,
    backgroundColor: colors.background,
    width: '100%',
  }
});

export default styles;
