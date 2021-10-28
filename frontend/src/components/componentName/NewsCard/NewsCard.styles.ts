import { StyleSheet } from 'react-native';

import colors from '../../../themes';

export default StyleSheet.create({
  post: {
    position: 'relative',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: '5%',
    borderRadius: 20,
    height: 300,
  },
  image: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 'auto',
    marginBottom: 0,
    padding: 20,
    heightMin: '20%',
    backgroundColor: `${colors.primaryOpacity}`,
  },
  titleText: {
    fontSize: 20,
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
  },
  headerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    padding: 20,
    width: '100%',
    height: '20%',
    backgroundColor: `${colors.primaryOpacity}`,
  },
  date: {
    fontSize: 15,
    color: 'rgb(255, 255, 255)',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',

  },
  comments: {
    fontSize: 15,
    marginLeft: 5,
    marginRight: 15,
  },
  likes: {
    fontSize: 15,
  },
  views: {
    fontSize: 15,
    marginLeft: 5,
    marginRight: 10,
  },
});
