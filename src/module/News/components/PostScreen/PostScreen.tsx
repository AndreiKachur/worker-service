import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import styles from './PostScreen.styles';

type PostScreenProps = any;

const PostScreen: React.FC<PostScreenProps> = (props) => {
  const DATA = props.route.params

  return (
    <View style={styles.component}>
      <ScrollView style={styles.post}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>{DATA.title.repeat(10)}</Text>
        </View>
        <Image style={styles.image} source={{ uri: DATA.image }}/>
      </ScrollView>
    </View>
  )
}


export default PostScreen
