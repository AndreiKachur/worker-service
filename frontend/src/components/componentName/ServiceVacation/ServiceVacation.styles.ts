import { StyleSheet, Dimensions } from 'react-native';
import color from '../../../themes'

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
  },
  mainWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  top: {
    marginTop: 20,
  },
  calendar: {
    width: Dimensions.get('window').width * 0.9,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: color.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: Dimensions.get('window').width * 0.9,
  },
  vacationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
  headerWrapper: {
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.9,
  },
  header: {
    color: color.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  header2: {
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
  input: {
    backgroundColor: color.third,
    color: color.primary,
    borderRadius: 3,
    marginBottom: 5,
    height: 30,
    width: Dimensions.get('window').width * 0.35,
    borderWidth: 0,
    padding: 10,
  }
});
