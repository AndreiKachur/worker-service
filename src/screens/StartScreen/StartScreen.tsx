import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './StartScreen.styles'

type StartScreenProps = any

const StartScreen: React.FC<StartScreenProps> = ({navigation}) => {
  

  return (
    <View style={styles.component}>
      <Text>StartScreen</Text>
    </View>
  )
}


export default StartScreen;