import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.distance,
    ...metrics.shadow,
    borderRadius: metrics.radius,
    backgroundColor: colors.background,
    width: '100%',
    marginTop: 40,
    marginBottom: metrics.distance,
  },
  containerImage: {
    alignItems: 'center',
    ...metrics.shadow,
    marginTop: -50,
  },
  verticalHr: {
    height: 20,
    borderWidth: 0.5,
    borderColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    resizeMode: 'cover',
  },
  containerInfo: {
    marginTop: metrics.distance,
    marginBottom: metrics.halfDistance,
    alignItems: 'center',
  },
  label: {
    fontSize: fonts.smaller,
    color: colors.primary,
  },
  info: {
    fontSize: fonts.regular,
    color: colors.regular,
  },
  autor: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: metrics.distance,
    marginHorizontal: metrics.distance * 2,
    textAlign: 'center',
  },
});

export default styles;
