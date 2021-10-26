import { StyleSheet, Dimensions } from 'react-native';

import color from '../../../themes';

export default StyleSheet.create({
  textBold: {
    marginVertical: 6,
    color: color.seventh,
    fontWeight: 'bold',
    fontSize: 15,
    maxWidth: Dimensions.get('window').width * 0.9,
  },
});
