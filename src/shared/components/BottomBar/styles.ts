import { Dimensions, StyleSheet } from 'react-native';

const bottomBarStyle = StyleSheet.create({
  view: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 24,
    paddingHorizontal: 48,
    paddingBottom: 100,
    justifyContent: 'space-between',
    gap: 2,
  },
  item: { justifyContent: 'center', alignItems: 'center' },
  itemLabel: {
    fontFamily: 'Inter-Regular',
  },
});

export { bottomBarStyle };
