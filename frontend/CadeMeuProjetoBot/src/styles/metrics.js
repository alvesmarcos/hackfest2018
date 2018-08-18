/**
 * @description export de todas as cores do sistema
 */
import { Dimensions, Platform } from 'react-native';

export default {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  distance: 16,
  halfDistance: 8,
  borderTopWidth: 8,
  ratingStarDistance: 5,
  tabBarHeight: 56,
  buttonHeight: 50,
  radius: 5,
  shadow: {
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
};
