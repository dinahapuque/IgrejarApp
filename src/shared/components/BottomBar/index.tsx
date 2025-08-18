import React, { useState } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

import BookOpenIcon from '../../svgs/BookOpenIcon';
import BookMarkCheckIcon from '../../svgs/BookMarkCheckIcon';
import NavigationPointerIcon from '../../svgs/NavigationPointerIcon';
import light from '../../theme/light';
import { bottomBarStyle } from './styles';

enum BottomBarOption {
  SearchPage,
  DevotionalPage,
  SavedPage,
}

export function BottomBar() {
  const [selectedTab, setSelectedTab] = useState(BottomBarOption.SearchPage);

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

  return (
    <View key={'bottom-bar'} style={bottomBarStyle.view}>
      <TouchableNativeFeedback
        onPress={() => setSelectedTab(BottomBarOption.SearchPage)}
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
        onPress={() => setSelectedTab(BottomBarOption.DevotionalPage)}
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
        onPress={() => setSelectedTab(BottomBarOption.SavedPage)}
        background={TouchableNativeFeedback.Ripple('#EEE', false)}
      >
        <View style={bottomBarStyle.item}>
          <BookMarkCheckIcon
            stroke={getStroke(BottomBarOption.SavedPage)}
            strokeWidth={getStrokeWidth(BottomBarOption.SavedPage)}
          />
          <Text style={getLabelStyle(BottomBarOption.SavedPage)}>Salvos</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
