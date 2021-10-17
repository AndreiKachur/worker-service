import React from 'react';
import {
  View, Text, ScrollView, Image,
} from 'react-native';

import styles from './PieceOfNewsScreen.styles';

type PostScreenProps = any;

const PostScreen: React.FC<PostScreenProps> = (props) => {
  const post = props.route.params;

  return (
    <View style={styles.component}>
      <ScrollView style={styles.post}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>{post.title}</Text>
        </View>
        <Image style={styles.image} source={{ uri: post.image }} />
        <View style={styles.textBox}>
        <Text style={styles.text}>{post.title.repeat(200)}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostScreen;
