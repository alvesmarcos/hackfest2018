import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.distance,
    backgroundColor: colors.primary,
  },
  robotImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: metrics.robotHeight / 1.5,
  },
});

export default styles;
