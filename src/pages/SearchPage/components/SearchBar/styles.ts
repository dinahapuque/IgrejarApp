import { StyleSheet } from 'react-native';
import light from '../../../../shared/theme/light';
import { typography } from '../../../../shared/typography';

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewInput: {
    margin: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  input: {
    height: 48,
    flex: 1,
    paddingLeft: 48,
    paddingRight: 16,
    borderRadius: 99,
    backgroundColor: light.neutral.lighter,
    fontSize: typography.body.regular.fontSize,
    lineHeight: typography.body.regular.lineHeight,
    color: typography.body.regular.color,
    fontFamily: 'Inter-Regular',
    // letterSpacing: typography.body.regular.letterSpacing,
  },
  searchIcon: {
    position: 'absolute',
    left: 60,
    top: 12,
  },
  placeholder: {},
});

export { styles };
