import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
    <BottomTab.Screen name='News' component={NewsScreen} options={{
      tabBarLabel: 'Новости',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name='post' color={color} size={size} />
      ),
    }}
    />
    <BottomTab.Screen name="Services" component={ServicesScreen} options={{
      tabBarLabel: 'Сервисы',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name='animation-outline' color={color} size={size} />
      ),
    }}
    />
    <BottomTab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarLabel: 'Профиль',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name='account' color={color} size={size} />
      ),
    }}
    />
  </BottomTab.Navigator>
);

const MyStack = (props) => (
  <Stack.Navigator screenOptions={headerStyle}>
    <Stack.Screen name="Start" component={StartScreen} />
    <Stack.Screen name="Auth" component={AuthScreen} />
    <Stack.Screen name="Main" options={{ headerShown: false }}>
      {() => (<MyBottomTabs />)}
    </Stack.Screen>
    <Stack.Screen name="Мой Отпуск" component={ServiceVacationScreen} />
    <Stack.Screen name="Мой День" component={ServiceWorkDayScreen} />
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
