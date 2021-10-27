import { StyleSheet } from 'react-native';

import colors from '../../../themes';

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
  filerButton: {
    marginRight: 20,
  },
  iconStyle: {
    marginRight: 10,
    marginLeft: 10,
    color: `${colors.primary}`,
  },
  iconStyleActive: {
    marginRight: 10,
    marginLeft: 10,
    color: `${colors.sixth}`,
  },
});
