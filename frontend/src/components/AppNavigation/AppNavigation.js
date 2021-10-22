import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';

import BottomTabs from '../common/BottomTabs';
import { headerTabs, vacationTabs } from './tabItems'
import StartScreen from '../screens/StartScreen';
import AuthScreen from '../screens/AuthScreen';
import ServiceVacationScreen from '../screens/ServiceVacationScreen';
import ServiceWorkDaysScreen from '../screens/ServiceWorkDaysScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PieceOfNewsScreen from '../screens/PieceOfNewsScreen';
import color from '../../themes';
import authStore from '../../stores/authStore';

const headerStyle = {
  headerStyle: { backgroundColor: color.third },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold' },
};

const Stack = createStackNavigator();

const MyStack = observer((props) => {
  if (!authStore.auth) {
    return (
      <Stack.Navigator screenOptions={headerStyle}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            headerTitle: 'Авторизация',
          }}
        />
        <Stack.Screen
          name="PieceOfNews"
          component={PieceOfNewsScreen}
          options={{
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Main" options={{ headerShown: false }}>
        {() => (<BottomTabs items={headerTabs} />)}
      </Stack.Screen>
      <Stack.Screen
        name="PieceOfNews"
        component={PieceOfNewsScreen}
        options={{
          headerTitle: '',
        }}
      />
      <Stack.Screen name="Мой Отпуск" options={{ headerShown: true }}>
        {() => (<BottomTabs items={vacationTabs} showHeader={false} />)}
      </Stack.Screen>
      <Stack.Screen name="Мой День" component={ServiceWorkDaysScreen} />
      <Stack.Screen name="Edit" component={EditProfileScreen} />
    </Stack.Navigator>
  );
});

authStore.setAutoLogin();
const AppNavigation = (props) => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);

export default AppNavigation;
