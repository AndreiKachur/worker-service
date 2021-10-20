import { StyleSheet } from 'react-native';
import color from '../../../themes'

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
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  text: {
    color: color.secondary,
  }
});
