import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StartScreen from '../screens/StartScreen';
import AuthScreen from '../screens/AuthScreen';
import NewsScreen from '../screens/NewsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServiceVacationScreen from '../screens/ServiceVacationScreen';
import ServiceWorkDayScreen from '../screens/ServiceWorkDayScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PostScreen from '../screens/PostScreen';
import color from '../../themes'

const headerStyle = {
  headerStyle: { backgroundColor: color.third, },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold', },
}

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const MyBottomTabs = (props) => (
  <BottomTab.Navigator screenOptions={headerStyle}>
    <BottomTab.Screen name="Новости" component={NewsScreen} />
    <BottomTab.Screen name="Сервисы" component={ServicesScreen} />
    <BottomTab.Screen name="Профиль" component={ProfileScreen} />
  </BottomTab.Navigator>
);

const MyStack = (props) => (
  <Stack.Navigator screenOptions={headerStyle}>
    <Stack.Screen name="Start" component={StartScreen} />
    <Stack.Screen name="Auth" component={AuthScreen} />
    <Stack.Screen name="Main" options={{ headerShown: false }}>
      {() => (<MyBottomTabs />)}
    </Stack.Screen>
    <Stack.Screen name="МОЙ ОТПУСК" component={ServiceVacationScreen} />
    <Stack.Screen name="МОЙ ДЕНЬ" component={ServiceWorkDayScreen} />
    <Stack.Screen name="Edit" component={EditProfileScreen} />
    <Stack.Screen name="Post" component={PostScreen} />
  </Stack.Navigator>
);

const AppNavigation = (props) => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);

export default AppNavigation;
