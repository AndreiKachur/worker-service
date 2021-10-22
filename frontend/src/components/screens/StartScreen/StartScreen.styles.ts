import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../themes';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
    width: '100%',

  },
  scroll: {
    width: '100%',
    height: '100%',
  },
  posts: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
  },
  authButtonBox: {
    marginRight: 20,
  },
  iconStyle: {
    marginRight: 10,
    marginLeft: 10,
    color: `${colors.primary}`,
  },
});
