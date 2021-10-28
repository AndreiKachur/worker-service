import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../themes';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4,
    elevation: 5,
  },
  modalItem: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 5,
  },
  textBox: {
    width: Dimensions.get('window').width * 0.4,
  },
  button: {
    borderRadius: 6,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: colors.primary,
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    padding: 5,
    backgroundColor: colors.primary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.primary,
    color: colors.sixth,
    padding: 10,
  },
});
