import { StyleSheet, Dimensions } from 'react-native';

import color from '../../../themes';

export default StyleSheet.create({
    calendar: {
        width: Dimensions.get('window').width * 1,
    },
    headerWrapper: {
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.9,
    },
    mainWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    header: {
        color: color.primary,
        fontWeight: 'bold',
        fontSize: 20,
    },
    textWrapper: {
        marginBottom: 20
    },
    text: {
        marginVertical: 3,
        color: color.secondary,
        fontSize: 15,
        maxWidth: Dimensions.get('window').width * 0.9,
    },
});
