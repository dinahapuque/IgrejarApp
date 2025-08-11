import React from 'react';
import { View, TextInput } from 'react-native';

import SearchSmIcon from '../../../../shared/svgs/SearchSmIcon';
import { styles } from './styles';
import light from '../../../../shared/theme/light';

export default function SearchBar() {
  const [number, setNumber] = React.useState('');

  return (
    <View style={styles.viewInput}>
      <TextInput
        style={styles.input}
        placeholderTextColor={light.neutral.black}
        onChangeText={setNumber}
        value={number}
        placeholder="useless placeholder"
      />

      <SearchSmIcon
        style={styles.searchIcon}
        stroke={light.neutral.black}
        strokeWidth={2}
      />
    </View>
  );
}
