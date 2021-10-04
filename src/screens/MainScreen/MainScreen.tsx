import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import styles from './MainScreen.styles'


type MainScreenProps = any

const MainScreen: React.FC<MainScreenProps> = (props) => {
  return (
    <View style={styles.component}>
      <Text>MainScreen</Text>
    </View>
      // <NavigationContainer>
      //   <MyTabs />
      // </NavigationContainer>
  )  
}

export default MainScreen;