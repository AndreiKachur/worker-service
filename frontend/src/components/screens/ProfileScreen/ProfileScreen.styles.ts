import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../themes';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    marginRight: 20,
  },
  iconStyle: {
    marginRight: 10,
    marginLeft: 10,
    color: `${colors.primary}`,
  },
});
