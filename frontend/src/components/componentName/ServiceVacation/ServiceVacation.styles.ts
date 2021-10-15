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
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  top: {
    marginTop: 20,
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
    fontSize: 15,
    maxWidth: '80vw',
  },
  btn: {
    backgroundColor: color.third,
    color: color.primary,
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
    backgroundColor: color.third,
    color: color.primary,
    borderRadius: 3,
    width: '80vw',
    paddingVertical: 7,
    marginVertical: 8,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: color.third,
    color: color.primary,
    borderRadius: 3,
    marginBottom: 5,
    height: 30,
    width: '35vw',
    borderWidth: 0,
    padding: 10,
  }
});
