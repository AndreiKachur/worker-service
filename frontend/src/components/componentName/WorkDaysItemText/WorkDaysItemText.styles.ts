import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../themes';

export default StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 25,
    marginRight: 10,
    marginTop: 17,
  },
  inActiveDate: {
    height: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
