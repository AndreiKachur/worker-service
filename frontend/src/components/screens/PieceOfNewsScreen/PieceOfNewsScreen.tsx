import { RouteProp } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, ScrollView, Image,
} from 'react-native';

import styles from './PieceOfNewsScreen.styles';
import { Post } from '../../componentName/NewsCard/NewsCard';

type PieceOfNewsProps = {
  route: RouteProp<{ params: Post }>
};

const PieceOfNewsScreen: React.FC<PieceOfNewsProps> = ({ route }) => (
  <View style={styles.component}>
    <ScrollView>
      <View style={styles.post}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>{route.params.title}</Text>
        </View>
        <Image style={styles.image} source={{ uri: route.params.image }} />
        <View style={styles.textBox}>
          <Text style={styles.text}>{route.params.title.repeat(200)}</Text>
        </View>
      </View>
    </ScrollView>
  </View>
);
export default PieceOfNewsScreen;
