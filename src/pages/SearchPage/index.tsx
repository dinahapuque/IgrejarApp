import React from 'react';
import { SafeAreaView, StatusBar, Dimensions, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import SearchBar from './components/SearchBar';
import { BottomBar } from '../../shared/components/BottomBar';
import { styles } from './components/SearchBar/styles';
import churches, { ChurchType } from '../../data/churches';
import ChurchCard from './components/ChurchCard';

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

      <View
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        {selectedChurch && <ChurchCard church={selectedChurch} />}

        <BottomBar />
      </View>
    </SafeAreaView>
  );
}

export default SearchPage;
