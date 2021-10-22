import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import colors from '../../../themes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
    justifyContent: windowWidth < 600 ? 'flex-start' : 'center',

  },
  logoBox: {
    marginTop: windowWidth < 600 ? '10%' : '0%',
    marginBottom: windowWidth < 600 ? '20%' : '0%',
    width: windowWidth < 600 ? windowWidth * 0.9 : windowWidth * 0.3,
    height: windowHeight < 600 ? windowHeight * 0.3 : windowHeight * 0.2,
  },
  inputsBox: {
    width: windowWidth < 600 ? Dimensions.get('window').width * 0.7 : windowWidth * 0.4,
  },
  emailInputBox: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 0,
    marginBottom: windowWidth < 600 ? '5%' : '1%',
    height: 40,
    borderRadius: 10,
  },
  passwordInputBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 0,
    marginBottom: windowWidth < 600 ? '5%' : '1%',
    height: 40,
    borderRadius: 10,
  },
  emailInput: {
    marginBottom: 20,
    borderColor: `${colors.primary}`,
    borderWidth: 0,
    borderRadius: 10,
    width: '90%',
    height: '100%',
    color: 'black',
  },
  passwordInput: {
    borderColor: `${colors.primary}`,
    borderWidth: 0,
    borderRadius: 10,
    width: '70%',
    height: '100%',
    color: 'black',
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth < 600 ? Dimensions.get('window').width * 0.7 : windowWidth * 0.4,
  },
  iconBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '15%',
  },
  iconStyle: {
    fontSize: 20,
    color: `${colors.primary}`,
  },
  iconButtonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    margin: 0,
  },
});
