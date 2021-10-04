import React from 'react'
import { View, Text } from 'react-native'

import styles from './MainScreen.styles'


type MainScreenProps = any

const MainScreen: React.FC<MainScreenProps> = (props) => {
  return (
      <View style={styles.component}>
        <Text>MainScreen</Text>
      </View>
  )  
}

export default MainScreen;