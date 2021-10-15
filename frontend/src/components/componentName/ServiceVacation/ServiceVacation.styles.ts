import { StyleSheet } from 'react-native';
import color from '../../../themes'

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.primary,
  },
  info: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: color.third,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '80vw',
  },
  vacationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80vw',
  },
  headerWrapper: {
    alignItems: 'center',
    width: '80vw'
  },
  header: {
    color: color.third,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  header2: {
    color: color.third,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  text: {
    marginVertical: 3,
    color: color.third,
    fontSize: 15
  },
  btn: {
    backgroundColor: color.third,
    color: color.primary,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginVertical: 5,
    fontSize: 10,
    fontWeight: 'bold',
    width: 75,
    textAlign: 'center',
  }
});
