import { StyleSheet, Dimensions } from 'react-native';

import color from '../../../themes';

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    height: Dimensions.get('window').height * 0.85,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  mainWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
