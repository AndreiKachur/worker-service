import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  component: {
    position: 'absolute',
    marginRight: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'flex-end',
    zIndex: 1,
  },
  dropDown: {
    flex: width > 500 ? 0.5 : 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,

    borderBottomLeftRadius: 20,
    backgroundColor: '#fff',
    zIndex: 2,
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    translucent: true,
  },
  button: {
    width: 150,
    marginTop: 10,
    marginBottom: 10,
  },
});
