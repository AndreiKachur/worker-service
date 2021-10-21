import React from 'react';
import {
    View, Text, Pressable, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './NewsCard.styles';

type NewsCardProps = {
    navigation: any;
    post: Post
};

type Post = {
    id: string,
    private: boolean,
    title: string,
    content: string,
    createdAt?: User,
    publicDate?: string,
    image?: string,
    views?: number,
    likes?: number,
    comments?: Array<Commentary>,
    author?: string
}

type User = {
    id: string,
    name: string,
    avatar: string
}

type Commentary = {
    id: string,
    content: string,
    createdAt: string,
    author: User
}

const NewsCard: React.FC<NewsCardProps> = (props) => {

    return (
        <Pressable key={props.post.id} onPress={() => { props.navigation.navigate('PieceOfNews', props.post); }}>
            <View style={styles.post}>
                <Image resizeMethod="scale" source={{ uri: props.post.image }} style={styles.image} />
                <View style={styles.headerBox}>
                    <Text style={styles.date}>{props.post.publicDate}</Text>
                    <View style={styles.iconBox}>
                        <Icon style={styles.views} name="eye"> {props.post.views}</Icon>
                        <Icon style={styles.likes} name="heart"> {props.post.likes}</Icon>
                    </View>
                </View>
                <View style={styles.titleBox}>
                    <Text style={styles.titleText}>{props.post.title}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default NewsCard;
