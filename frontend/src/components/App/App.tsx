import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigation from '../AppNavigation/AppNavigation';
import styles from './App.styles';

type AppProps = any;

const App: React.FC<AppProps> = () => {
    return (
        <>
            <SafeAreaProvider>
                <AppNavigation />
            </SafeAreaProvider>
        </>
    )
}

export default App;
