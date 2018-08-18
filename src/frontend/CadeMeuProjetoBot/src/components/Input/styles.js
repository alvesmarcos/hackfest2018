import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: metrics.distance,
    paddingVertical: 4,
    ...metrics.shadow,
    borderRadius: metrics.radius,
  },
  btnContainer: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {},
  textInputContainer: {
    flex: 1,
    padding: metrics.distance,
  },
});

export default styles;
