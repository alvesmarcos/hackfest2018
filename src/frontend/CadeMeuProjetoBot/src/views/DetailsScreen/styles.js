import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 45,
    backgroundColor: colors.background,
  },
  headerContainer: {
    backgroundColor: colors.primary,
    padding: metrics.distance,
    alignItems: 'center',
    justifyContent: 'center',
    ...metrics.shadow,
  },
  imageContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  name: {
    fontSize: fonts.big,
    textAlign: 'center',
    color: colors.white,
    marginHorizontal: metrics.distance * 3,
    marginBottom: metrics.halfDistance * 2,
  },
  contentContainer: {
    padding: metrics.distance,
    marginBottom: metrics.distance,
    backgroundColor: colors.background,
  },
  arrowBack: {
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: metrics.halfDistance,
  },
  containerInfo: {
    marginTop: metrics.distance,
    marginBottom: metrics.halfDistance,
    alignItems: 'center',
  },
  label: {
    fontSize: fonts.smaller,
    fontWeight: 'bold',
    color: colors.white,
  },
  info: {
    fontSize: fonts.regular,
    color: colors.light,
  },
  verticalHr: {
    height: 20,
    borderWidth: 0.5,
    borderColor: colors.white,
    marginHorizontal: metrics.distance,
  },
  autorLabel: {
    marginTop: metrics.distance,
    fontSize: fonts.smaller,
    color: colors.lighter,
    ...fonts.fontWeightLight,
    alignSelf: 'center',
  },
  button: {
    height: 56,
    padding: metrics.distance,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    borderColor: colors.primary,
    borderRadius: metrics.radius,
    marginTop: metrics.distance,
  },
  btnText: {
    color: colors.primary,
  },
});

export default styles;
