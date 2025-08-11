import React from 'react';
import { SafeAreaView, StatusBar, View, Dimensions, Text } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import SearchBar from './components/SearchBar';
import light from '../../shared/theme/light';
import { BottomBar } from '../../shared/components/BottomBar';
import { styles } from './components/SearchBar/styles';
import churches, { ChurchType } from '../../data/churches';

function SearchPage() {
  const [selectedChurch, setSelectedChurch] = React.useState<
    ChurchType | undefined
  >();

  return (
    <SafeAreaView style={styles.default}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />

      <SearchBar />

      <MapView
        zoomEnabled
        scrollEnabled
        showsMyLocationButton
        showsUserLocation
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height - 100, // calculate right value
        }}
        initialRegion={{
          latitude: churches[0].latitude,
          longitude: churches[0].longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        zoomControlEnabled
      >
        {churches.map(church => (
          <Marker
            onPress={() => {
              setSelectedChurch(church);
            }}
            key={church.id}
            coordinate={{
              latitude: church.latitude,
              longitude: church.longitude,
            }}
          />
        ))}
      </MapView>

      {selectedChurch && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              width: Dimensions.get('window').width - 32,
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 16,
              margin: 16,
              justifyContent: 'space-between',
              borderRadius: 16,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  color: light.secondary.darkGrey,
                  fontFamily: 'Inter-Regular',
                  fontWeight: '600',
                }}
              >
                Em evento
              </Text>
              <Text> Agora</Text>
            </View>
            <Text>{selectedChurch.name}</Text>
            <Text>
              {selectedChurch.address}, {selectedChurch.city} -{' '}
              {selectedChurch.state}, {selectedChurch.zipCode}
            </Text>
          </View>
          <BottomBar />
        </View>
      )}
    </SafeAreaView>
  );
}

export default SearchPage;
