import { StyleSheet } from 'react-native';

import { metrics, colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.distance,
   ...metrics.shadow,
    borderRadius: metrics.radius,
    backgroundColor: colors.background,
    width: '100%',
    marginTop: 40,
  },
  containerImage: { 
    alignItems: 'center',
    marginTop: -50
  },
  image: { 
    width: 90,
    height: 90,
    borderRadius: 45,
    resizeMode: 'cover'
  }
});

export default styles;
