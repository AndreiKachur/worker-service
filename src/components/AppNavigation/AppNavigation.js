import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from 'react-native';

import StartScreen from '../StartScreen/StartScreen';
import AuthScreen from  '../../module/Profile/components/AuthScreen/AuthScreen';
import NewsScreen from '../../module/News/components/NewsScreen/NewsScreen';
import ServicesScreen from '../../module/Service/components/ServicesScreen/ServicesScreen';
import ProfileScreen from '../../module/Profile/components/ProfileScreen/ProfileScreen';
import ServiceScreen from '../../module/Service/components/ServiceScreen';
import EditProfileScreen from '../../module/Profile/components/EditProfileScreen/EditProfileScreen';
import PostScreen from '../../module/News/components/PostScreen/PostScreen';
import PublicNewsScreen from '../../module/News/components/PublicNewsScreen/PublicNewsScreen';
import CorparateNewsScreen from '../../module/News/components/CorparateNewsScreen/CorparateNewsScreen';


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