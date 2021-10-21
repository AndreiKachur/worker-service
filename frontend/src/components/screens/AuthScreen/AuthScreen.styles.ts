import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../../themes'

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
  },
  logoBox: {
    margin: '5%',
    width: '80%',
    height: 200
  },
  inputsBox: {
    margin: '5%',
    width: '70%',
  },
  emailInputBox: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 0,
    marginBottom: '5%',
    height: 40,
    borderRadius: 10,
  },
  passwordInputBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 0,
    marginBottom: '5%',
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
    color: 'black'
  },
  img: {
    resizeMethod: "resize",
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  },
  buttonBox: {
    width: '70%',
  },
  iconBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '15%'
  },
  iconStyle: {
    fontSize: 20,
    color: `${colors.primary}`
  },
  iconButtonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    margin: 0,
  }
});
