import { StyleSheet } from 'react-native';
import light from '../../../../shared/theme/light';
import { typography } from '../../../../shared/typography';

const styles = StyleSheet.create({
  default: {
    backgroundColor: '#fff',
  },
  viewInput: {
    margin: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 48,
    paddingLeft: 48,
    paddingRight: 16,
    borderRadius: 99,
    backgroundColor: light.neutral.lighter,
    fontSize: typography.body.regular.fontSize,
    lineHeight: typography.body.regular.lineHeight,
    color: typography.body.regular.color,
    // letterSpacing: typography.body.regular.letterSpacing,
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 12,
  },
  placeholder: {},
});

export { styles };
