import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import light from '../../theme/light';
import { useNavigation } from '@react-navigation/native';
import churchImages from '../../../../assets/churches/churchImages';
import { ChurchType } from '../../../data/churches';
import iconsImages from '../../../../assets/icons/iconsImages';
import { getFullAddress } from '../../functions/utils';

interface ChurchItemProps {
  church: ChurchType;
}

export function ChurchItem({ church }: Readonly<ChurchItemProps>) {
  const navigation = useNavigation();

  return (
    <View>
      <Image
        source={churchImages[1]}
        style={{ width: '100%', height: 96, borderRadius: 16 }}
      />
      <View style={{ height: 16 }} />
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            color: light.secondary.darkGrey,
            fontFamily: 'Inter-Regular',
            fontWeight: '400',
            fontSize: 14,
            letterSpacing: -0.02,
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
      <View>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: '700',
            fontSize: 14,
            color: light.neutral.black,
          }}
        >
          {church.name}
        </Text>

        <View style={{ height: 8 }} />

        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontWeight: '400',
            fontSize: 14,
            letterSpacing: -0.02,
            color: light.neutral.mid,
          }}
        >
          {getFullAddress(church)}
        </Text>
      </View>

      <View style={{ height: 8 }} />

      <View
        style={{
          marginVertical: 8,
          flexDirection: 'row',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: '700',
            color: light.neutral.mid,
          }}
        >
          1.6km
        </Text>

        <View style={{ flexDirection: 'row', gap: 16 }}>
          <TouchableOpacity
            onPress={() => navigation.push('ChurchPage', { church })}
            style={{
              borderWidth: 2,
              borderRadius: 500,
              borderColor: light.neutral.lighter,
              backgroundColor: 'transparent',
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 24,
              paddingVertical: 12,
            }}
            activeOpacity={0.8}
          >
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                fontWeight: '700',
                color: light.primary.mossGreen,
                fontSize: 16,
              }}
            >
              Ver Mais
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Ver no mapa')}
            style={{
              borderRadius: 500,
              backgroundColor: light.primary.lightGreen,
              height: 48,
              width: 48,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            activeOpacity={0.8}
          >
            <Image
              source={iconsImages.navigationPointer}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
