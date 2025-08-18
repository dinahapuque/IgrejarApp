/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

import light from '../../../../shared/theme/light';
import { ScheduleType } from '../../../../data/churches';

interface ChurchCardProps {
  schedule: ScheduleType;
}

export default function ScheduleItem({ schedule }: Readonly<ChurchCardProps>) {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          fontWeight: '400',
          fontSize: 18,
          letterSpacing: -0.018,
          color: light.neutral.black,
        }}
      >
        {schedule.day}
      </Text>

      {schedule.items.map(item => (
        <View
          key={item.hour}
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontWeight: '700',
              fontSize: 16,
              color: light.neutral.black,
            }}
          >
            {item.description}
          </Text>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontWeight: '700',
              fontSize: 16,
              color: light.neutral.black,
            }}
          >
            {item.hour}
          </Text>
        </View>
      ))}
    </View>
  );
}
