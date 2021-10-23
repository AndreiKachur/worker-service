import React, { useLayoutEffect } from 'react';
import {
  View, ScrollView,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import Icon from 'react-native-vector-icons/FontAwesome5';

import newsStore from '../../../stores/newsStore';
import styles from './StartScreen.styles';
import NewsCard from '../../componentName/NewsCard';

type StartScreenProps = {
  navigation: any
};

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Публичные новости',
      headerRight: () => (
        <View style={styles.authButtonBox}>
          <Icon.Button
            onPress={() => navigation.navigate('Auth')}
            name="sign-in-alt"
            backgroundColor="#fff"
            iconStyle={styles.iconStyle}
          />
        </View>
      ),
    });
  }, [navigation]);

  const publicNews = newsStore.news.filter((post) => !post.private);

  return (
    <View style={styles.component}>
      <ScrollView style={styles.scroll}>
        <View style={styles.posts}>
          {
            publicNews.map((post) => (
              <NewsCard key={post.id} post={post} navigation={navigation} />
            ))
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default observer(StartScreen);
