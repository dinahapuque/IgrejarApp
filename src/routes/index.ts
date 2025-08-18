import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchPage from '../pages/SearchPage';
import ChurchPage from '../pages/ChurchPage';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'SearchPage',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    SearchPage: {
      screen: SearchPage,
    },
    ChurchPage,
  },
});

export const Navigation = createStaticNavigation(RootStack);
