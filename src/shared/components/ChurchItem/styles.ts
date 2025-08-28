import { Dimensions, StyleSheet } from 'react-native';
import light from '../../theme/light';

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
  item: { justifyContent: 'center', alignItems: 'center', gap: 4 },
  itemLabel: {
    fontFamily: 'Inter-Regular',
    color: light.neutral.mid,
    fontWeight: '500',
    fontSize: 12,
  },
  itemLabelSelected: {
    fontFamily: 'Inter-Bold',
    color: light.secondary.darkGrey,
    fontWeight: '700',
    fontSize: 12,
  },
});

export { bottomBarStyle };
