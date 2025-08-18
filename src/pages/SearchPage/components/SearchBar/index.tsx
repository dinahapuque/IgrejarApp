/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TextInput, Image } from 'react-native';

import SearchSmIcon from '../../../../shared/svgs/SearchSmIcon';
import { styles } from './styles';
import light from '../../../../shared/theme/light';
import iconsImages from '../../../../../assets/icons/iconsImages';

export default function SearchBar() {
  const [number, setNumber] = React.useState('');

  return (
    <View style={styles.viewInput}>
      <Image
        source={iconsImages.igrejarSymbol}
        style={{ height: 40, width: 32 }}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor={light.neutral.black}
        onChangeText={setNumber}
        value={number}
        placeholder="Encontre uma igreja..."
      />

      <SearchSmIcon
        style={styles.searchIcon}
        stroke={light.neutral.black}
        strokeWidth={2}
      />
    </View>
  );
}
