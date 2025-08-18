/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

import light from '../../../../shared/theme/light';
import { EventType } from '../../../../data/churches';

interface ChurchCardProps {
  event: EventType;
}

export default function EventItem({ event }: Readonly<ChurchCardProps>) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <View
        style={{
          width: 40,
          height: 62,
          borderColor: light.neutral.lighter,
          borderWidth: 2,
          borderRadius: 99,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontWeight: '500',
            fontSize: 12,
            color: light.primary.lightGreen,
          }}
        >
          {event.datetime
            .toLocaleString('pt-BR', {
              month: 'short',
            })
            .toUpperCase()
            .substring(0, 3)}
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontWeight: '400',
            fontSize: 24,
            color: light.neutral.black,
            letterSpacing: -0.04,
          }}
        >
          {event.datetime.toLocaleString('pt-BR', {
            day: 'numeric',
          })}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: '700',
            fontSize: 16,
            color: light.neutral.black,
          }}
        >
          {event.title}
        </Text>

        <View style={{ height: 4 }} />

        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontWeight: '400',
            fontSize: 14,
            color: light.neutral.mid,
            letterSpacing: -0.02,
          }}
        >
          {event.description}
        </Text>
      </View>
    </View>
  );
}
