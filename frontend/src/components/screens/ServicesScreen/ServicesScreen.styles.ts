import { StyleSheet, Platform } from 'react-native';
import colors from '../../../themes'

export default StyleSheet.create({
  component: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 8
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    marginBottom: 4,
    padding: 20,
    height: 60,
    width: 60,
    backgroundColor: colors.primary,
    color: colors.third,
    borderRadius: 14,
  },
  title: {
    textAlign: 'center',
    fontSize: 11,
    marginBottom: 10,
    color: colors.secondary,
  },
});
