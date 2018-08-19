import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  input: {
    marginHorizontal: metrics.distance,
    marginTop: metrics.distance,
  },
  containerHeader: {

    backgroundColor: colors.primary,
  },
  robotImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: metrics.robotHeight / 2.2,
  },
});

export default styles;
