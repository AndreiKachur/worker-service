import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from '../../screens/StartScreen';
import NewsScreen from '../../screens/NewsScreen';
import AuthScreen from '../../screens/AuthScreen';
import PieceOfNewsScreen from '../../screens/PieceOfNewsScreen';
import color from '../../../themes';

const Stack = createStackNavigator();

const stackItems = [
  { name: 'Start', component: NewsScreen, headerTitle: '' },
  { name: 'Auth', component: AuthScreen, headerTitle: 'Авторизация' },
  { name: 'PieceOfNews', component: PieceOfNewsScreen, headerTitle: '' },
];

function NavigationPublic() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: color.third },
      headerTintColor: color.primary,
      headerTitleStyle: { fontWeight: 'bold' },
    }}
    >
      {stackItems.map((item) => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{ headerTitle: item.headerTitle }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default NavigationPublic;
