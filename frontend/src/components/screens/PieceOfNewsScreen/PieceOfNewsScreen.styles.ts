import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
  },
  post: {
    width: '100%',

  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    jastifyContent: 'center',
    margin: 10
  },
  titleText: {
    margin: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
    height: 300,
    borderRadius: 20
  },
  textBox: {
    margin: 20,
  },
  text: {
    color: '#000',
    textAlign: 'justify'
  }
});
