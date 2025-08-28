import React from 'react';

import { SafeAreaView, View } from 'react-native';
import { BottomBar, BottomBarOption } from '../../shared/components/BottomBar';
import { ChurchItem } from '../../shared/components/ChurchItem';
import churches from '../../data/churches';

function FavoritePage() {
  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: '#fff' }}>
      <View style={{ margin: 24, gap: 16 }}>
        <ChurchItem church={churches[0]} />
        <ChurchItem church={churches[1]} />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        <BottomBar selectedTab={BottomBarOption.FavoritePage} />
      </View>
    </SafeAreaView>
  );
}

export default FavoritePage;
