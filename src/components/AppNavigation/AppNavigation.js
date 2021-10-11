import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons/Ionicons'

import StartScreen from '../StartScreen/StartScreen'
import AuthScreen from '../../module/Profile/components/AuthScreen/AuthScreen'
import NewsScreen from '../../module/News/components/NewsScreen/NewsScreen'
import ServicesScreen from '../../module/Service/components/ServicesScreen/ServicesScreen'
import ProfileScreen from '../../module/Profile/components/ProfileScreen/ProfileScreen'
import ServiceScreen from '../../module/Service/components/ServiceScreen'
import EditProfileScreen from '../../module/Profile/components/EditProfileScreen/EditProfileScreen'
import PostScreen from '../../module/News/components/PostScreen/PostScreen'


const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

const MyBottomTabs = (props) => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="News" component={NewsScreen} />
    <BottomTab.Screen name="Services" component={ServicesScreen} />
    <BottomTab.Screen name="Profile" component={ProfileScreen} />
  </BottomTab.Navigator >
)

const MyStack = (props) => (
  <Stack.Navigator>
    <Stack.Screen name="Start" component={StartScreen} />
    <Stack.Screen name="Auth" component={AuthScreen} />
    <Stack.Screen name="Main" options={{ headerShown: false }}>
      {() => (<MyBottomTabs />)}
    </Stack.Screen>
    <Stack.Screen name="Service" component={ServiceScreen} />
    <Stack.Screen name="Edit" component={EditProfileScreen} />
    <Stack.Screen name="Post" component={PostScreen} />
  </Stack.Navigator>
)

const AppNavigation = (props) => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
)

export default AppNavigation