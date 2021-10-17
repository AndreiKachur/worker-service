import { StyleSheet,  Dimensions } from 'react-native';
import colors from '../../../themes';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

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
    color: `${colors.primary}`
  }
});
