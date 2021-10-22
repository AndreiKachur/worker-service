import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabs from '../../common/BottomTabs';
import { headerTabs, vacationTabs } from './tabItems';
import ServiceWorkDaysScreen from '../../screens/ServiceWorkDaysScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';
import PieceOfNewsScreen from '../../screens/PieceOfNewsScreen';
import color from '../../../themes';

const headerStyle = {
  headerStyle: { backgroundColor: color.third },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold' },
};

const Stack = createStackNavigator();

function NavigationPrivate() {
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
}

export default NavigationPrivate;
