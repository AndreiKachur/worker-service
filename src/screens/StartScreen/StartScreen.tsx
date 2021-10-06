import React from 'react'
import { View, Text, ScrollView, ImageBackground, Alert, Pressable } from 'react-native'
import { publicNewsData } from '../../data'

import styles from './StartScreen.styles'

type StartScreenProps = any

const DATA = publicNewsData

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => (
  <View style={styles.component}>
    <ScrollView style={styles.posts}>
      {
        DATA.map((post) => {
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

export default StartScreen;
