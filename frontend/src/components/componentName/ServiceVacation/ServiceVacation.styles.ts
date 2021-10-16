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
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  top: {
    marginTop: 20,
  },
  calendar: {
    width: Dimensions.get('window').width * 0.8,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: color.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: Dimensions.get('window').width * 0.8,
  },
  vacationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.8,
  },
  headerWrapper: {
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
  },
  header: {
    color: color.primary,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
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
    maxWidth: Dimensions.get('window').width * 0.8,
  },
  btn: {
    backgroundColor: color.primary,
    color: color.third,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginVertical: 4,
    marginLeft: 5,
    fontSize: 10,
    fontWeight: 'bold',
    width: 75,
    textAlign: 'center',
  },
  btnBig: {
    backgroundColor: color.primary,
    color: color.third,
    borderRadius: 7,
    paddingVertical: 10,
    marginVertical: 8,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    width: Dimensions.get('window').width * 0.8,
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
