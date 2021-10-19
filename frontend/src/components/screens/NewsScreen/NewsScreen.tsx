import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, ScrollView, ImageBackground, Pressable, Button, Image,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import Icon from 'react-native-vector-icons/FontAwesome5';

import newsStore from '../../../stores/newsStore/newsStore';
import styles from './NewsScreen.styles';
import DropDown from '../../common/DropDown';
import colors from '../../../themes'
import NewsCard from '../../componentName/NewsCard';

type NewsScreenProps = any;

export type Filter = {
  id: number;
  name: "private" | "public";
  title: string;
}

const NewsScreen: React.FC<NewsScreenProps> = ({ navigation }) => {
  const [newsFilter, setNewsFilter] = useState('private');
  const [activeDropDown, setActiveDropDown] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Новости',
      headerRight: () => (
        <View style={styles.filerButton}>
          <Icon.Button
            onPress={() => setActiveDropDown(!activeDropDown)}
            name="filter"
            backgroundColor='#fff'
            iconStyle={styles.iconStyle}
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
      <ScrollView style={styles.scroll}>
        <View style={styles.posts}>
        {
          FilterNews.map((post) => (
            <NewsCard key={post.id} post={post} navigation={navigation}/>
          ))
        }
        </View>
      </ScrollView>
    </View>
  );
};

export default observer(NewsScreen);
