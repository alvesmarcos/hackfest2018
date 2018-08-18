import { StackNavigator } from 'react-navigation';

// import { colors } from '../styles';

// Views
import { DraggerScreen, ResultsScreen } from '../views';

const Routes = StackNavigator(
  {
    Main: { screen: DraggerScreen },
    Results: { screen: ResultsScreen },
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
