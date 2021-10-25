import { StyleSheet } from 'react-native';

import colors from '../../../themes';

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  post: {
    margin: '5%',
    backgroundColor: `${colors.primaryOpacity}`,
    borderRadius: 20,
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
  },
  titleText: {
    margin: '5%',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    // marginLeft: 10,
    // marginRight: 10,
    width: '100%',
    height: 300,
    // borderRadius: 20
  },
  textBox: {
    padding: 20,
  },
  text: {
    color: '#000',
    textAlign: 'justify',

  },
});
