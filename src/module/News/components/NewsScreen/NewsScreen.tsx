import React, { useState, useLayoutEffect } from 'react'
import { View, Text, ScrollView, ImageBackground, Pressable, Button } from 'react-native'
import { observer } from "mobx-react-lite"

import newsStore from '../../../../stores/newsStore/newsStore'
import styles from './NewsScreen.styles';


type NewsScreenProps = any;

const NewsScreen: React.FC<NewsScreenProps> = observer(({ navigation }) => {
  const [privateNewsfilter, setPrivateNewsFilter] = useState(true)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Новости",
      headerRight: () => (
        <View style={styles.filerButton}>
          <Button
            onPress={() => setPrivateNewsFilter(!privateNewsfilter)}
            title="Filter"
            color="rgb(200, 200, 200)"
          />
        </View>
      ),
    })
  }, [navigation, privateNewsfilter])

  const FilterNews = privateNewsfilter
    ? newsStore.news.filter(post => post.private)
    : newsStore.news.filter(post => !post.private)

  return (
    <View style={styles.component}>
      <ScrollView style={styles.posts}>
        {
          FilterNews.map((post) => {
            return (
              <Pressable key={post.id} onPress={() => { navigation.navigate('Post', post) }}>
                <ImageBackground style={styles.post} source={{ uri: post.image }}>
                  <View style={styles.headerBox}>
                    <Text style={styles.date}>{post.publicDate}</Text>
                  </View>
                  <View style={styles.titleBox}>
                    <Text style={styles.titleText}>{post.title}</Text>
                  </View>
                </ImageBackground>
              </Pressable>
            )
          })
        }
      </ScrollView>
    </View>
  )

})

export default NewsScreen;
