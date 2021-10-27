import { StyleSheet } from 'react-native';

import colors from '../../../themes';

export default StyleSheet.create({
  component: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 8,
  },
  card: {
    margin: 8,
    marginBottom: 4,
    padding: 4,
    paddingTop: 10,
    height: 80,
    width: 80,
    backgroundColor: colors.fourth,
    color: colors.sixth,
    borderRadius: 14,
  },
  ico: {
    textAlign: 'center',
    margin: 8,
    marginBottom: 4,
    padding: 4,
    paddingTop: 12,
    height: 80,
    width: 80,
    backgroundColor: colors.secondary,
    color: colors.third,
    borderRadius: 14,
  },
  title: {
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 10,
    color: colors.secondary,
  },
});
