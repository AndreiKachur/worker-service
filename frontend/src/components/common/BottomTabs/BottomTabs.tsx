import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import colors from '../../../themes';

const BottomTab = createBottomTabNavigator();

export type BottomTabsProps = {
  items: Item[],
  showHeader?: boolean
};
export type Item = {
  name: string,
  component: () => JSX.Element,
  headerTitle: string,
  tabBarLabel: string,
  tabBarBadge?: number,
  iconLib: string,
  iconName: string,
};

const BottomTabs: React.FC<BottomTabsProps> = ({ items, showHeader = true }) => (

  <BottomTab.Navigator screenOptions={{
    headerStyle: { backgroundColor: colors.third },
    headerTintColor: colors.primary,
    headerTitleStyle: { fontWeight: 'bold' },
  }}
  >
    {
      items.map((item) => (
        <BottomTab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            headerShown: showHeader,
            headerTitle: item.headerTitle,
            tabBarLabel: item.tabBarLabel,
            tabBarBadge: item.tabBarBadge,
            tabBarIcon: ({ color, size }) => {
              switch (item.iconLib) {
                case 'FontAwesome': return (
                  <FontAwesomeIcon name={item.iconName} color={color} size={size} />);
                case 'AntDesign': return (
                  <AntDesignIcon name={item.iconName} color={color} size={size} />);
                default: return (
                  <AntDesignIcon name={item.iconName} color={color} size={size} />);
              }
            },
          }}
        />
      ))
    }
  </BottomTab.Navigator>
);

export default BottomTabs;
