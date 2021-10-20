import { StyleSheet } from 'react-native';
import colors from '../../../themes';

export default StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTitle: {
    alignItems: 'center'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginRight: 10,
    marginTop: 17
  },
  inActiveDate: {
    height: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.secondary,
  }
});
