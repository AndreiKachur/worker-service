import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../../themes'

export default StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '60%',
    height: 40,
    color: `${colors.primary}`,
    paddingLeft: 10,
    paddingRight: 10,
  },
  img: {
  },
});
