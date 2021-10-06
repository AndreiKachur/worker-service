import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from 'react-native';

import StartScreen from '../../screens/StartScreen';
import AuthScreen from '../../screens/AuthScreen/AuthScreen';
import NewsScreen from '../../screens/NewsScreen';
import ServicesScreen from '../../screens/ServicesScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import ServiceScreen from '../../screens/ServiceScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';
import PostScreen from '../../screens/PostScreen';
import PublicNewsScreen from '../../screens/PublicNewsScreen';
import CorparateNewsScreen from '../../screens/CorparateNewsScreen';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MyTopTabs = () => (
  <TopTab.Navigator>
    <TopTab.Screen name="Public" component={PublicNewsScreen} />
    <TopTab.Screen name="Corparate" component={CorparateNewsScreen} />
  </TopTab.Navigator>
);

const MyBottomTabs = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="News">
      {() => (<MyTopTabs />)}
    </BottomTab.Screen>
    {/* <BottomTab.Screen name="News" component={NewsScreen} /> */}
    <BottomTab.Screen name="Services" component={ServicesScreen} />
    <BottomTab.Screen
      name="Profile"
      component={ProfileScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Edit')}
            title="Edit"
          />
        ),
      })}
    />
  </BottomTab.Navigator>
);
const MyStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Start"
      component={StartScreen}
      options={({ navigation }) => ({
        headerTitle: "Публичные новости",
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Auth')}
            title="Auth"
          />
        ),
      })}
    />
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
);

export default AppNavigation;