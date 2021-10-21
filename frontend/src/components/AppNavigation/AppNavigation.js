import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { observer } from 'mobx-react-lite';


import StartScreen from '../screens/StartScreen';
import AuthScreen from '../screens/AuthScreen';
import NewsScreen from '../screens/NewsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServiceVacationScreen from '../screens/ServiceVacationScreen';
import ServiceWorkDaysScreen from '../screens/ServiceWorkDaysScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PieceOfNewsScreen from '../screens/PieceOfNewsScreen';
import color from '../../themes'
import authStore from '../../stores/authStore/';

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
        <Icon name='newspaper' color={color} size={size} />
      ),
    }}
    />
    <BottomTab.Screen name="Services" component={ServicesScreen} options={{
      headerTitle: 'Сервисы',
      tabBarLabel: 'Сервисы',
      tabBarIcon: ({ color, size }) => (
        <Icon name='th' color={color} size={size} />
      ),
    }}
    />
    <BottomTab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarLabel: 'Профиль',
      tabBarIcon: ({ color, size }) => (
        <Icon name='user' color={color} size={size} />
      ),
    }}
    />
  </BottomTab.Navigator>
);

const MyStack = observer((props) => {
  if (!authStore.auth) {
    return (
      <Stack.Navigator screenOptions={headerStyle}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} options={{
          headerTitle: 'Авторизация'
        }}
        />
        <Stack.Screen name="PieceOfNews" component={PieceOfNewsScreen} options={{
          headerTitle: ''
        }} />
      </Stack.Navigator>
    )
  } else {
    return (
      <Stack.Navigator screenOptions={headerStyle}>
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {() => (<MyBottomTabs />)}
        </Stack.Screen>
        <Stack.Screen name="PieceOfNews" component={PieceOfNewsScreen} options={{
          headerTitle: ''
        }} />
        <Stack.Screen name="Мой Отпуск" component={ServiceVacationScreen} />
        <Stack.Screen name="Мой День" component={ServiceWorkDayScreen} />
        <Stack.Screen name="Edit" component={EditProfileScreen} />
      </Stack.Navigator>)
  }
})

authStore.setAutoLogin()
const AppNavigation = (props) => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);

export default AppNavigation;
