import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../themes';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editProfileBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth < 600 ? windowWidth * 0.8 : windowWidth * 0.3,
    height: '90%',
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5%',
    width: '100%',
  },
  avatarBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 1,
    width: '100%',
    padding: 0,
    marginBottom: windowWidth < 600 ? '5%' : '1%',
    height: 40,
    borderRadius: 10,
  },
  fullNameInputBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 0,
    marginBottom: windowWidth < 600 ? '5%' : '1%',
    height: 40,
    borderRadius: 10,
  },
  telephoneNumberInputBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 0,
    marginBottom: windowWidth < 600 ? '5%' : '1%',
    height: 40,
    borderRadius: 10,
  },
  input: {
    borderColor: `${colors.primary}`,
    borderWidth: 0,
    borderRadius: 10,
    width: '70%',
    height: '100%',
    color: 'black',
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
  searchButtonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: '5%',
    width: '30%',
    height: '70%',
    backgroundColor: `${colors.primary}`,
    borderRadius: 5,
  },
  iconSearchStyle: {
    fontSize: 20,
    color: '#fff',
  },
  searchText: {
    color: '#fff',
  },
  avatarText: {
    width: '50%',
    color: 'black',
    paddingLeft: '1%',
    paddingRight: '1%',
  },
});
