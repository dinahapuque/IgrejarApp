/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image } from 'react-native';

import light from '../../../../shared/theme/light';
import { PastorType } from '../../../../data/churches';
import pastorsImages from '../../../../../assets/pastors/pastorsImages';

interface ChurchCardProps {
  pastor: PastorType;
}

export default function PastorItem({ pastor }: Readonly<ChurchCardProps>) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Image source={pastorsImages[1]} style={{ width: 48, height: 48 }} />
      <View>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: '700',
            fontSize: 16,
            color: light.neutral.black,
          }}
        >
          {pastor.name}
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontWeight: '400',
            fontSize: 14,
            color: light.neutral.mid,
            letterSpacing: -0.02,
          }}
        >
          {pastor.email}
        </Text>
      </View>
    </View>
  );
}
