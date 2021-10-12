import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  component: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 20,
    height: 120,
    width: 120,
    backgroundColor: '#318CE7',
    color: '#F4F9F9',
    borderRadius: 22,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F4F9F9',
  },
});
