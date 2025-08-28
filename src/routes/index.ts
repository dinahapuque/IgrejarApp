import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChurchPage from '../pages/ChurchPage';
import SearchPage from '../pages/SearchPage';
import FavoritePage from '../pages/FavoritePage';
import DevotionalPage from '../pages/DevotionalPage';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'SearchPage',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    SearchPage: {
      screen: SearchPage,
      options: {
        animation: 'fade',
      },
    },
    DevotionalPage: {
      screen: DevotionalPage,
      options: {
        animation: 'fade',
      },
    },
    FavoritePage: {
      screen: FavoritePage,
      options: {
        animation: 'fade',
      },
    },
    ChurchPage: {
      screen: ChurchPage,
      options: {
        animation: 'slide_from_bottom',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
