/**
 * @description export de todas as cores do sistema
 */
import { Dimensions, Platform } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const itemHorizontalMargin = wp(2);
const slideWidth = wp(75);

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
  robotHeight: 220,
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

  sliderWidth: viewportWidth,
  itemHorizontalMargin,
  slideWidth,
  itemWidth: slideWidth + itemHorizontalMargin * 2,
  slideHeight: viewportHeight * 0.36,
};
