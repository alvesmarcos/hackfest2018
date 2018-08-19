import { createStackNavigator } from 'react-navigation';

// import { colors } from '../styles';

// Views
import { DraggerScreen, ResultsScreen, DraggerDetailsScreen } from '../views';

const Routes = createStackNavigator(
  {
    Main: { screen: DraggerScreen },
    Results: { screen: ResultsScreen },
    Details: { screen: DraggerDetailsScreen },
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
    initialRouteName: 'Main',
  },
);

export default Routes;

