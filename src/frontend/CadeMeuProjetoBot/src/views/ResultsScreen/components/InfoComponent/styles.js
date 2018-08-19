import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../../../styles';

const styles = StyleSheet.create({
  containerInfo: {
    marginTop: metrics.halfDistance,
  },
  label: {
    fontSize: fonts.small,
    color: colors.primary,
  },
  info: {
    fontSize: fonts.regular,
    color: colors.regular,
  },
});

export default styles;
