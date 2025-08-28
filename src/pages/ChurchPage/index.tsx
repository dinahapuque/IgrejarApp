import React from 'react';

import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { getFullAddress } from '../../shared/functions/utils';
import light from '../../shared/theme/light';
import iconsImages from '../../../assets/icons/iconsImages';
import ScheduleItem from './components/ScheduleItem';
import PastorItem from './components/PastorItem';
import EventItem from './components/EventItem';
import churchImages from '../../../assets/churches/churchImages';
import { useNavigation } from '@react-navigation/native';

function ChurchPage({ route }) {
  const navigation = useNavigation();

  const { church } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View>
          <Image
            source={churchImages[1]}
            style={{ width: '100%', height: 360 }}
          />
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{
              borderRadius: 500,
              backgroundColor: '#fff',
              height: 32,
              width: 32,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: 60,
              left: 24,
            }}
            activeOpacity={0.8}
          >
            <Image
              source={iconsImages.arrowLeft}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ margin: 16 }}>
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
          <View style={{ marginVertical: 8 }}>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                fontWeight: '700',
                fontSize: 24,
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
                fontSize: 16,
                letterSpacing: -0.02,
                color: light.neutral.mid,
              }}
            >
              {getFullAddress(church)}
            </Text>
          </View>

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

          <View>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                fontWeight: '700',
                color: light.neutral.black,
                fontSize: 18,
              }}
            >
              Programação
            </Text>

            <View style={{ height: 24 }} />

            <View style={{ gap: 16 }}>
              {church.schedule?.map(item => (
                <ScheduleItem key={item.id} schedule={item} />
              ))}
            </View>
          </View>

          <View style={{ height: 32 }} />

          <View style={{ backgroundColor: light.neutral.light, height: 1 }} />

          <View style={{ marginVertical: 24 }}>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                fontWeight: '700',
                color: light.neutral.black,
                fontSize: 18,
              }}
            >
              Pastores
            </Text>

            <View style={{ height: 24 }} />

            <View style={{ gap: 16 }}>
              {church.pastors?.map(pastor => (
                <PastorItem key={pastor.id} pastor={pastor} />
              ))}
            </View>
          </View>

          <View style={{ backgroundColor: light.neutral.light, height: 1 }} />

          <View style={{ marginVertical: 32 }}>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                fontWeight: '700',
                color: light.neutral.black,
                fontSize: 18,
              }}
            >
              Próximos eventos
            </Text>

            <View style={{ height: 24 }} />

            <View style={{ gap: 16 }}>
              {church.events?.map(event => (
                <EventItem key={event.id} event={event} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ChurchPage;
