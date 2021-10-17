import { StyleSheet, Dimensions } from 'react-native';
import color from '../../../themes'

export default StyleSheet.create({
  vacationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
  header: {
    color: color.primary,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  text: {
    marginVertical: 3,
    color: color.secondary,
    fontSize: 15,
    maxWidth: Dimensions.get('window').width * 0.9,
  },
});
