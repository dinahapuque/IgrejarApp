/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import light from '../../../../shared/theme/light';
import churchImages from '../../../../../assets/churches/churchImages';
import { ChurchType } from '../../../../data/churches';
import { useNavigation } from '@react-navigation/native';
import { getFullAddress } from '../../../../shared/functions/utils';

interface ChurchCardProps {
  church: ChurchType;
}

export default function ChurchCard({ church }: Readonly<ChurchCardProps>) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.push('ChurchPage', { church })}
      activeOpacity={0.8}
      style={{
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <Image
        source={churchImages[1]}
        style={{
          height: 117,
          width: 80,
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
        }}
      />

      <View style={{ flexShrink: 1, flexWrap: 'wrap' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: light.secondary.darkGrey,
              fontFamily: 'Inter-Regular',
              fontWeight: '400',
              fontSize: 14,
            }}
          >
            Em evento
          </Text>
          <Text
            style={{
              color: light.secondary.darkGrey,
              fontFamily: 'Inter-Bold',
              fontWeight: '700',
            }}
          >
            {' '}
            Agora
          </Text>
        </View>

        <View style={{ height: 8 }} />

        <Text
          style={{
            color: light.neutral.black,
            fontFamily: 'Inter-Bold',
            fontWeight: '700',
            fontSize: 14,
          }}
        >
          {church.name}
        </Text>

        <View style={{ height: 4 }} />

        <Text
          style={{
            color: light.neutral.mid,
            fontFamily: 'Inter-Regular',
            fontWeight: '400',
            fontSize: 14,
          }}
        >
          {getFullAddress(church)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
