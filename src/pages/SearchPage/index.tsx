import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Dimensions,
  View,
  FlatList,
  Text,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import SearchBar from './components/SearchBar';
import { BottomBar, BottomBarOption } from '../../shared/components/BottomBar';
import { styles } from './components/SearchBar/styles';
import churches, { ChurchType } from '../../data/churches';
import ChurchCard from './components/ChurchCard';
import { ChurchItem } from '../../shared/components/ChurchItem';

function SearchPage() {
  const [selectedChurch, setSelectedChurch] = React.useState<
    ChurchType | undefined
  >();

  const [searchText, setSearchText] = React.useState<string>('');

  const filteredChurches = churches.filter(church =>
    church.name.toLowerCase().includes(searchText.toLowerCase().trim()),
  );

  return (
    <>
      <SafeAreaView style={styles.default}>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={'dark-content'}
        />

        <SearchBar searchText={searchText} setSearchText={setSearchText} />

        {!searchText && (
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
        )}

        {searchText && (
          <FlatList
            data={filteredChurches}
            style={{ padding: 24, backgroundColor: '#fff' }}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => <Text>No results found</Text>}
            renderItem={({ item }) => (
              <ChurchItem church={item} key={item.id} />
            )}
          />
        )}
      </SafeAreaView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        {selectedChurch && !searchText && (
          <ChurchCard church={selectedChurch} />
        )}

        <BottomBar selectedTab={BottomBarOption.SearchPage} />
      </View>
    </>
  );
}

export default SearchPage;
