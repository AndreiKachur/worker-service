import React, { useLayoutEffect } from 'react';
import {
  View, Text, ScrollView, ImageBackground, Alert, Pressable, Button,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import Icon from 'react-native-vector-icons/FontAwesome5';

import newsStore from '../../../stores/newsStore';
import styles from './StartScreen.styles';

type StartScreenProps = any;

const StartScreen: React.FC<StartScreenProps> = observer(({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Публичные новости',
      headerRight: () => (
        <View style={styles.authButtonBox}>
          <Icon.Button
            onPress={() => navigation.navigate('Auth')}
            name="sign-in-alt"
            backgroundColor="rgb(200, 200, 200)"
            iconStyle={styles.iconStyle}
          ></Icon.Button>
        </View>
      ),
    });
  }, [navigation]);

  const publicNews = newsStore.news.filter((post) => !post.private);

  return (
    <View style={styles.component}>
      <ScrollView style={styles.posts}>
        {
          publicNews.map((post) => (
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

export default StartScreen;
