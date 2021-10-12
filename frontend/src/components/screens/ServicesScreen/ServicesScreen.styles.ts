import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  component: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    padding: 20,
    height: 200,
    backgroundColor: '#F4F9F9',
    borderRadius: 14,
  },
  separator: {
    marginVertical: 4,
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btn: {
    marginVertical: 12,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 24,
    color: '#318CE7',
  },
  description: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 12,
    color: '#AAAAAA',
  },
});
