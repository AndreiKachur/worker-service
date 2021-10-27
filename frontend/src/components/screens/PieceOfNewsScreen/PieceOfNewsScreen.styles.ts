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
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  textBox: {
    padding: 20,
  },
  text: {
    color: '#000',
    textAlign: 'justify',

  },
});
