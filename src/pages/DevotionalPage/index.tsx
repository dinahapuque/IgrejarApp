import React from 'react';

import { View } from 'react-native';
import { BottomBar, BottomBarOption } from '../../shared/components/BottomBar';

function DevotionalPage() {
  return (
    <View style={{ flex: 1, backgroundColor: '#aaa' }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        <BottomBar selectedTab={BottomBarOption.DevotionalPage} />
      </View>
    </View>
  );
}

export default DevotionalPage;
