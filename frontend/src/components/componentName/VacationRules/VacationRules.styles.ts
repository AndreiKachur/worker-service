import { StyleSheet, Dimensions } from 'react-native';
import color from '../../../themes'

export default StyleSheet.create({
  text: {
    marginVertical: 3,
    color: color.secondary,
    fontSize: 15,
    maxWidth: Dimensions.get('window').width * 0.9,
  },
});
