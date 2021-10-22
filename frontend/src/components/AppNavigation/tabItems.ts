import StartScreen from '../screens/StartScreen';
import AuthScreen from '../screens/AuthScreen';
import NewsScreen from '../screens/NewsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VacationFormScreen from '../screens/VacationFormScreen'
import VacationInfo from '../componentName/VacationInfo'
import VacationRules from '../componentName/VacationRules'
import ServiceVacationScreen from '../screens/ServiceVacationScreen';
import ServiceWorkDaysScreen from '../screens/ServiceWorkDaysScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PieceOfNewsScreen from '../screens/PieceOfNewsScreen';

export const headerTabs = [
    { name: 'News', component: NewsScreen, headerTitle: 'Новости', tabBarLabel: 'Новости', iconName: 'newspaper' },
    { name: 'Services', component: ServicesScreen, headerTitle: 'Сервисы', tabBarLabel: 'Сервисы', iconName: 'th' },
    { name: 'Profile', component: ProfileScreen, headerTitle: 'Профиль', tabBarLabel: 'Профиль', iconName: 'user' },
]
export const vacationTabs = [
    { name: 'Form', component: VacationFormScreen, headerTitle: 'Оформить', tabBarLabel: 'Оформить', iconName: 'newspaper' },
    { name: 'Info', component: VacationInfo, headerTitle: 'Инфо', tabBarLabel: 'Инфо', iconName: 'th' },
    { name: 'Rules', component: VacationRules, headerTitle: 'Правила', tabBarLabel: 'Правила', iconName: 'user' },
]