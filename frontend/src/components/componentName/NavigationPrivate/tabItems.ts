import NewsScreen from '../../screens/NewsScreen';
import ServicesScreen from '../../screens/ServicesScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import VacationFormScreen from '../../screens/VacationFormScreen';
import VacationInfoScreen from '../../screens/VacationInfoScreen';
import VacationRulesScreen from '../../screens/VacationRulesScreen';

export const headerTabs = [
  {
    name: 'News',
    component: NewsScreen,
    headerTitle: 'Новости',
    tabBarLabel: 'Новости',
    iconLib: 'FontAwesome',
    iconName: 'newspaper',

  },
  {
    name: 'Services',
    component: ServicesScreen,
    headerTitle: 'Сервисы',
    tabBarLabel: 'Сервисы',
    iconLib: 'FontAwesome',
    iconName: 'th',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    headerTitle: 'Профиль',
    tabBarLabel: 'Профиль',
    iconLib: 'FontAwesome',
    iconName: 'user',
  },
];
export const vacationTabs = [
  {
    name: 'Form',
    component: VacationFormScreen,
    headerTitle: 'Оформить',
    tabBarLabel: 'Оформить',
    iconLib: 'AntDesign',
    iconName: 'form',
  },
  {
    name: 'Info',
    component: VacationInfoScreen,
    headerTitle: 'Инфо',
    tabBarLabel: 'Инфо',
    tabBarBadge: 3,
    iconLib: 'AntDesign',
    iconName: 'infocirlce',
  },
  {
    name: 'Rules',
    component: VacationRulesScreen,
    headerTitle: 'Правила',
    tabBarLabel: 'Правила',
    iconLib: 'AntDesign',
    iconName: 'appstore-o',
  },
];
