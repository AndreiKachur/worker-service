import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import stackItems from './stackItems';
import color from '../../../themes';

const Stack = createStackNavigator();

function NavigationPrivate() {
  return (
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
    </Stack.Navigator>
  );
}

export default NavigationPrivate;
