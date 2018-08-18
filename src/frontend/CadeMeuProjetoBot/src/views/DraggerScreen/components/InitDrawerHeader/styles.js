import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: metrics.radius * 3,
    borderTopRightRadius: metrics.radius * 3,
    ...metrics.shadow,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drag: {
    width: 50,
    height: 5,
    alignSelf: 'center',
    backgroundColor: colors.light,
    borderRadius: metrics.radius,
    marginTop: metrics.halfDistance,
  },
});

export default styles;
