import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import stackItems from './stackItems';
import color from '../../../themes';
import PieceOfNewsScreen from '../../screens/PieceOfNewsScreen/PieceOfNewsScreen';// Временно

const Stack = createStackNavigator();

const NavigationPrivate: React.FC = () => (
  <Stack.Navigator screenOptions={{
    headerStyle: { backgroundColor: color.third },
    headerTintColor: color.primary,
    headerTitleStyle: { fontWeight: 'bold' },
  }}
  >
    {
        stackItems.map((item) => (
          <Stack.Screen
            key={Date.now()}
            name={item.name}
            options={item.options}
          >
            {item.component}
          </Stack.Screen>
        ))
      }
    <Stack.Screen name="PieceOfNews" component={PieceOfNewsScreen} options={{ headerTitle: '' }} />
  </Stack.Navigator>
);

export default NavigationPrivate;
