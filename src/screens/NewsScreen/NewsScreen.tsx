import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './NewsScreen.styles';

type  NewsScreenProps = any;

const news = [
  {
    id: 1,
    title: "post 1",
    text: "text 1"
  },
  {
    id: 2,
    title: "post 2",
    text: "text 2"
  },
  {
    id: 3,
    title: "post 3",
    text: "text 3"
  },
  {
    id: 4,
    title: "post 4",
    text: "text 4"
  },
  {
    id: 5,
    title: "post 5",
    text: "text 51"
  },
  {
    id: 6,
    title: "post 6",
    text: "text 6"
  },

]

const NewsScreen: React.FC<NewsScreenProps> = ({navigation}) => (
  <View style={styles.component}>
    <Text> NewsScreen</Text>
    {news.map((post) => {
      return (
        <View  key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.text}</Text>
          <Button
            onPress={() => navigation.navigate('Post')}
            title='Open'
          />
        </View>
      )
    })}
  </View>
);

export default NewsScreen;