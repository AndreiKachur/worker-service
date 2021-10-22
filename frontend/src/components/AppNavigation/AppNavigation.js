import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import NavigationPublic from '../componentName/NavigationPublic';
import NavigationPrivate from '../componentName/NavigationPrivate';
import authStore from '../../stores/authStore';

const MyStack = observer(() => (!authStore.auth ? <NavigationPublic /> : <NavigationPrivate />));

authStore.setAutoLogin();

const AppNavigation = () => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);

export default AppNavigation;
