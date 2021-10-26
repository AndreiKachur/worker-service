import React from 'react';
import {
  View, Text, Pressable, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import styles from './NewsCard.styles';
import { News } from '../../../stores/newsStore/newsStore.models';

type NewsCardProps = {
  navigation: NavigationProp<ParamListBase>;
  pieceOfNews: News
};

const NewsCard: React.FC<NewsCardProps> = ({ pieceOfNews, navigation }) => (
  <Pressable onPress={() => {
    navigation.navigate('PieceOfNews', pieceOfNews);
  }}
  >
    <View style={styles.post}>
      <Image resizeMethod="scale" source={{ uri: pieceOfNews.image }} style={styles.image} />
      <View style={styles.headerBox}>
        <Text style={styles.date}>{pieceOfNews.createdAt}</Text>
        <View style={styles.iconBox}>
          <Icon style={styles.views} name="eye"> {pieceOfNews.views.length}</Icon>
          <Icon style={styles.comments} name="comments"> {pieceOfNews.comments.length}</Icon>
          <Icon style={styles.likes} name="heart"> {pieceOfNews.likes.length}</Icon>
        </View>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>{pieceOfNews.title}</Text>
      </View>
    </View>
  </Pressable>
);

export default NewsCard;
