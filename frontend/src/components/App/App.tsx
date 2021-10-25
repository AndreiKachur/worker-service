import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigation from '../AppNavigation/AppNavigation';

const App: React.FC = () => (
  <>
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  </>
);

export default App;
