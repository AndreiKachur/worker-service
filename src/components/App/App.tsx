import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Button } from 'react-native'
import StartScreen from '../../screens/StartScreen'
import AuthScreen from '../../screens/AuthScreen/AuthScreen'
import MainScreen from '../../screens/MainScreen'
import NewsScreen from '../../screens/NewsScreen'
import ServiceScreen from '../../screens/ServiceScreen'
import EditPrifileScreen from '../../screens/EditProfileScreen'

import styles from './App.styles';

type AppProps = any;

const Stack = createStackNavigator()

const App: React.FC<AppProps> = (props) => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
        name="Start" 
        component={StartScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Auth')}
              title="Auth"
            
            /> )
        })}
        />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Services" component={ServiceScreen} />
        <Stack.Screen name="EditProfile" component={EditPrifileScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
  ) 
} 


export default App;
