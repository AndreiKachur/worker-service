import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

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
            tabBarIcon: ({ color, size }) => {
              switch (item.iconLib) {
                case 'FontAwesome': return (
                  <FontAwesomeIcon name={item.iconName} color={color} size={size} />)
                case 'AntDesign': return (
                  <AntDesignIcon name={item.iconName} color={color} size={size} />)
                default: return
              }
            },
          }}
        />
      ))
    }
  </BottomTab.Navigator>
);

export default BottomTabs;
