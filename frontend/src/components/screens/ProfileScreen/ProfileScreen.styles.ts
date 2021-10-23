import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../themes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  profileBox: {
    display: 'flex',
    //borderWidth: 1,
    width: windowWidth < 600 ? windowWidth * 0.7 : windowWidth * 0.3,
    height: '90%', //windowHeight < 600 ? windowHeight * 0.9 : windowHeight * 0.2,
  },
  avatarBox: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    //borderWidth: 1,
  },
  avatar: {
    //borderWidth: 1,
    width: 100,
    height: '70%',
    borderRadius: 50
  },
  userNameBox: {
    //borderWidth: 1,
    width: '100%',
    height: '30%',
  },
  userNameText: {
    color: `${colors.primary}`,
    fontSize: 24,
    textAlign: 'center'
  },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '60%',
    //borderWidth: 1,
  },
  itemBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    marginBottom: windowHeight * 0.01,
  },
  itemIcon: {
    fontSize: 30,
    color: `${colors.primary}`,
  },
  boxContent: {
    color: 'black',
    fontSize: 17,
  },
  textBox: {
    marginLeft: '5%',
  },
  boxName: {
    color: 'gray',
    fontSize: 10,
  },
  buttonBox: {
    marginTop: '5%',
    width: '100%'

  },
  editButton: {
    marginRight: 20,
  },
  iconStyle: {
    marginRight: 10,
    marginLeft: 10,
    color: `${colors.primary}`,
  },
});
