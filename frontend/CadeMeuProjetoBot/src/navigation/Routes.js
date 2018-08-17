import { StackNavigator } from 'react-navigation';

// import { colors } from '../styles';

// Views
import { HomeScreen } from '../views';

const Routes = StackNavigator(
  {
    Main: { screen: HomeScreen },
  },
  {
    navigationOptions: {
      headerStyle: {
        // backgroundColor: colors.secundary,
        // borderBottomColor: colors.darker,
      },
      // headerTintColor: colors.white,
      header: null,
      headerBackTitle: null,
    },
  },
);

export default Routes;
