import { StyleSheet,  Dimensions } from 'react-native';
import colors from '../../../themes';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
  
  },
  posts: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  post: {
    position: 'relative',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    marginBottom: 10,
    height: 300,
  },
  image: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
    zIndex: 0
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
    height: '20%',
    backgroundColor: `${colors.primaryOpacity}`,
    zIndex: 1,
  },
  titleText: {
    color: 'rgb(255, 255, 255)',
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
    zIndex: 1,
  },
  date: {
    color: 'rgb(255, 255, 255)',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',

  },
  comments: {

  },
  likes: {
  },
  views: {
    marginLeft: 5,
    marginRight: 10
  },
  filerButton: {
    marginRight: 20,
  },
  iconStyle: {
    marginRight: 10,
    marginLeft: 10,
    color: `${colors.primary}`
  }
});
