import React from 'react';
import { View, Text } from 'react-native';

import Separator from '../../common/Separator';
import styles from './VacationInfoEmpty.styles';

type VacationInfoBlockProps = {

};

const VacationInfoEmpty: React.FC<VacationInfoBlockProps> = () => (
  <View>
    <Text style={styles.textBold}>Данные отсутствуют</Text>
    <Separator />
  </View>
)


export default VacationInfoEmpty;
