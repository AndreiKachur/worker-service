import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import colors from '../../../themes';

const headerStyle = {
  headerStyle: { backgroundColor: colors.third },
  headerTintColor: colors.primary,
  headerTitleStyle: { fontWeight: 'bold' },
};

const BottomTab = createBottomTabNavigator();

const BottomTabs = ({ items, showHeader = true }) => (

  <BottomTab.Navigator screenOptions={headerStyle}>
    {
      items.map(item => (
        <BottomTab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            headerShown: showHeader,
            headerTitle: item.headerTitle,
            tabBarLabel: item.tabBarLabel,
            tabBarIcon: ({ color, size }) => (
              <Icon name={item.iconName} color={color} size={size} />
            ),
          }}
        />
      ))
    }
  </BottomTab.Navigator>
);

export default BottomTabs;
