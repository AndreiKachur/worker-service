import NewsScreen from '../screens/NewsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VacationFormScreen from '../screens/VacationFormScreen'
import VacationInfoScreen from '../screens/VacationInfoScreen';
import VacationRulesScreen from '../screens/VacationRulesScreen';

export const headerTabs = [
    { name: 'News', component: NewsScreen, headerTitle: 'Новости', tabBarLabel: 'Новости', iconName: 'newspaper' },
    { name: 'Services', component: ServicesScreen, headerTitle: 'Сервисы', tabBarLabel: 'Сервисы', iconName: 'th' },
    { name: 'Profile', component: ProfileScreen, headerTitle: 'Профиль', tabBarLabel: 'Профиль', iconName: 'user' },
]
export const vacationTabs = [
    { name: 'Form', component: VacationFormScreen, headerTitle: 'Оформить', tabBarLabel: 'Оформить', iconName: 'newspaper' },
    { name: 'Info', component: VacationInfoScreen, headerTitle: 'Инфо', tabBarLabel: 'Инфо', iconName: 'th' },
    { name: 'Rules', component: VacationRulesScreen, headerTitle: 'Правила', tabBarLabel: 'Правила', iconName: 'user' },
]