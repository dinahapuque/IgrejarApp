import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

import BookOpenIcon from '../../svgs/BookOpenIcon';
import BookMarkCheckIcon from '../../svgs/BookMarkCheckIcon';
import NavigationPointerIcon from '../../svgs/NavigationPointerIcon';
import light from '../../theme/light';
import { bottomBarStyle } from './styles';
import { useNavigation } from '@react-navigation/native';

export enum BottomBarOption {
  SearchPage,
  DevotionalPage,
  FavoritePage,
}

export function BottomBar({ selectedTab }) {
  const navigation = useNavigation();

  function getStroke(bottomBarOption: BottomBarOption) {
    return selectedTab === bottomBarOption
      ? light.secondary.darkGrey
      : light.neutral.mid;
  }

  function getStrokeWidth(bottomBarOption: BottomBarOption) {
    return selectedTab === bottomBarOption ? 3 : 1.5;
  }

  function getLabelStyle(bottomBarOption: BottomBarOption) {
    return selectedTab === bottomBarOption
      ? bottomBarStyle.itemLabelSelected
      : bottomBarStyle.itemLabel;
  }

  function goTo(bottomBarOption: BottomBarOption) {
    if (selectedTab !== bottomBarOption) {
      switch (bottomBarOption) {
        case BottomBarOption.SearchPage:
          navigation.navigate('SearchPage');
          break;
        case BottomBarOption.DevotionalPage:
          navigation.navigate('DevotionalPage');
          break;
        case BottomBarOption.FavoritePage:
          navigation.navigate('FavoritePage');
          break;
      }
    }
  }

  return (
    <View key={'bottom-bar'} style={bottomBarStyle.view}>
      <TouchableNativeFeedback
        onPress={() => goTo(BottomBarOption.SearchPage)}
        background={TouchableNativeFeedback.Ripple('#EEE', false)}
      >
        <View style={bottomBarStyle.item}>
          <NavigationPointerIcon
            stroke={getStroke(BottomBarOption.SearchPage)}
            strokeWidth={getStrokeWidth(BottomBarOption.SearchPage)}
          />
          <Text style={getLabelStyle(BottomBarOption.SearchPage)}>Buscar</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        onPress={() => goTo(BottomBarOption.DevotionalPage)}
        background={TouchableNativeFeedback.Ripple('#EEE', false)}
      >
        <View style={bottomBarStyle.item}>
          <BookOpenIcon
            stroke={getStroke(BottomBarOption.DevotionalPage)}
            strokeWidth={getStrokeWidth(BottomBarOption.DevotionalPage)}
          />
          <Text style={getLabelStyle(BottomBarOption.DevotionalPage)}>
            Devocional
          </Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        onPress={() => goTo(BottomBarOption.FavoritePage)}
        background={TouchableNativeFeedback.Ripple('#EEE', false)}
      >
        <View style={bottomBarStyle.item}>
          <BookMarkCheckIcon
            stroke={getStroke(BottomBarOption.FavoritePage)}
            strokeWidth={getStrokeWidth(BottomBarOption.FavoritePage)}
          />
          <Text style={getLabelStyle(BottomBarOption.FavoritePage)}>
            Salvos
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
