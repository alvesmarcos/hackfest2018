import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  initDrawerContainer: {
    backgroundColor: colors.white,
    height: 66,
    borderTopLeftRadius: metrics.radius * 3,
    borderTopRightRadius: metrics.radius * 3,
  },
});

export default styles;
