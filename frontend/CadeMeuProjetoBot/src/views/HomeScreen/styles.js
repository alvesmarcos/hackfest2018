import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontSize: fonts.bigger * 1.5,
    ...fonts.fontWeightLight,
  },
});

export default styles;
