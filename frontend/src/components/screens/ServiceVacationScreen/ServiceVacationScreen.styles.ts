import { StyleSheet, Dimensions } from 'react-native';
import color from '../../../themes'

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
  },
  spinner: {
    height: Dimensions.get('window').height * 0.85,
    justifyContent: 'center',
  },
  mainWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
