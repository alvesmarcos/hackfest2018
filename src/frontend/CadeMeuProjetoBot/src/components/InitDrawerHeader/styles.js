import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: metrics.radius * 3,
    borderTopRightRadius: metrics.radius * 3,
    ...metrics.shadow,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 100,
    marginTop: 15,
  },
  drag: {
    width: 50,
    height: 5,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: metrics.radius,
    marginTop: metrics.halfDistance,
  },
});

export default styles;
