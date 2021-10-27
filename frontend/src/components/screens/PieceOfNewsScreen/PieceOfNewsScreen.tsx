import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View, Text, ScrollView, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './PieceOfNewsScreen.styles';
import { News } from '../../../stores/newsStore/newsStore.models';

type PieceOfNewsProps = {
  route: RouteProp<{ params: News }>
  navigation: NavigationProp<ParamListBase>;
};

const PieceOfNewsScreen: React.FC<PieceOfNewsProps> = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Дата публикации: ${route.params.createdAt}`,
    });
  });

  return (
    <View style={styles.component}>
      <ScrollView>
        <View style={styles.post}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>{route.params.title}</Text>
          </View>
          <Image style={styles.image} source={{ uri: route.params.image }} />
          <View style={styles.textBox}>
            <Text style={styles.text}>{route.params.content}</Text>
          </View>
          <View style={styles.iconsBox}>
            <Icon style={styles.views} name="eye"> {route.params.views.length}</Icon>
            <Icon style={styles.comments} name="comment"> {route.params.comments.length}</Icon>
            <Icon style={styles.likes} name="heart"> {route.params.likes.length}</Icon>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PieceOfNewsScreen;
