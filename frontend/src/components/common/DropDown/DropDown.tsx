import React from 'react';
import {
    View, Pressable, Button
} from 'react-native';

import styles from './DropDown.styles';
import { Filter } from '../../screens/NewsScreen/NewsScreen'

type DropDownProps = any;

const DropDown: React.FC<DropDownProps> = (props) => {
    // const fadeAnim = useRef(new Animated.Value(1)).current;


    // const fadeIn = () => {
    //     Animated.timing(fadeAnim, {
    //         toValue: 1,
    //         duration: 300
    //     }).start();
    // };

    // const fadeOut = () => {
    //     Animated.timing(fadeAnim, {
    //         toValue: 0,
    //         duration: 300
    //     }).start();
    // };

    const dropDownOut = () => {
        props.setActiveDropDown(false)
    }

    return (
        <Pressable onPress={dropDownOut} style={styles.component}>
            <View style={styles.dropDown}>
                {props.filters.map((filter: Filter) => {
                    return (
                        <View key={filter.id} style={styles.button}>
                            <Button color={
                                filter.name === props.newsFilter
                                    ? "rgb(100, 100, 100)"
                                    : "rgb(200, 200, 200)"
                            }
                                onPress={() => {
                                    props.setNewsFilter(filter.name)
                                }} title={filter.title} />
                        </View>
                    )
                })}
            </View>
        </Pressable>
    );
};

export default DropDown;