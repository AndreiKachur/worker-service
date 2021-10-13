import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, ScrollView, ImageBackground, Pressable, Button,
} from 'react-native';
import { observer } from 'mobx-react-lite';

import newsStore from '../../../stores/newsStore/newsStore';
import styles from './NewsScreen.styles';
import DropDown from '../../common/DropDown';

type NewsScreenProps = any;

export type Filter = {
  id: number;
  name: "private" | "public";
  title: string;
}

const NewsScreen: React.FC<NewsScreenProps> = observer(({ navigation }) => {
  const [newsFilter, setNewsFilter] = useState('private');
  const [activeDropDown, setActiveDropDown] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Новости',
      headerRight: () => (
        <View style={styles.filerButton}>
          <Button
            onPress={() => setActiveDropDown(!activeDropDown)}
            title="Filter"
            color="rgb(200, 200, 200)"
          />
        </View>
      ),
    });
  }, [navigation, newsFilter, activeDropDown]);

  const filters: Filter[] = [
    {
      id: 1,
      name: "private",
      title: "Приватные",
    },
    {
      id: 2,
      name: "public",
      title: "Публичные",
    }
  ]

  const FilterNews = newsFilter === "private"
    ? newsStore.news.filter((post) => post.private)
    : newsStore.news.filter((post) => !post.private)


  return (
    <View style={styles.component}>
      {activeDropDown ? <DropDown
        filters={filters}
        setActiveDropDown={setActiveDropDown}
        setNewsFilter={setNewsFilter}
        newsFilter={newsFilter}
      /> : null}
      <ScrollView style={styles.posts}>
        {
          FilterNews.map((post) => (
            <Pressable key={post.id} onPress={() => { navigation.navigate('Post', post); }}>
              <ImageBackground style={styles.post} source={{ uri: post.image }}>
                <View style={styles.headerBox}>
                  <Text style={styles.date}>{post.publicDate}</Text>
                </View>
                <View style={styles.titleBox}>
                  <Text style={styles.titleText}>{post.title}</Text>
                </View>
              </ImageBackground>
            </Pressable>
          ))
        }
      </ScrollView>
    </View>
  );
});

export default NewsScreen;
