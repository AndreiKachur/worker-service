import React from 'react';

import BottomTabs from '../../common/BottomTabs';
import { headerTabs, vacationTabs } from './tabItems';
import ServiceWorkDaysScreen from '../../screens/ServiceWorkDaysScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';
// import PieceOfNewsScreen from '../../screens/PieceOfNewsScreen';

type StackItem = {
  name: string,
  component: () => JSX.Element
  options: {
    headerShown?: boolean,
    headerTitle?: string
  }
};

const stackItems: StackItem[] = [
  {
    name: 'Main',
    component: () => (<BottomTabs items={headerTabs} />),
    options: { headerShown: false, headerTitle: '' },
  },
  // {
  //   name: 'PieceOfNews',
  //   component: () => (<PieceOfNewsScreen />),
  //   options: { headerTitle: '' },
  // },
  {
    name: 'Мой Отпуск',
    component: () => (<BottomTabs items={vacationTabs} showHeader={false} />),
    options: { headerShown: true },
  },
  {
    name: 'Мой День',
    component: () => (<ServiceWorkDaysScreen />),
    options: { headerShown: true },
  },
  {
    name: 'Edit',
    component: () => (<EditProfileScreen />),
    options: { headerTitle: 'Редактировать профиль' },
  },
];

export default stackItems;
