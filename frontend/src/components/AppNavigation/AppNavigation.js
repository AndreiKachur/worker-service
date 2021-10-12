import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StartScreen from '../screens/StartScreen';
import AuthScreen from '../screens/AuthScreen';
import NewsScreen from '../screens/NewsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServiceScreen from '../screens/ServiceScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const MyBottomTabs = (props) => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="News" component={NewsScreen} />
    <BottomTab.Screen name="Services" component={ServicesScreen} />
    <BottomTab.Screen name="Profile" component={ProfileScreen} />
  </BottomTab.Navigator>
);

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
);

const AppNavigation = (props) => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);

export default AppNavigation;
