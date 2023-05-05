import React from 'react';
import Toast from 'react-native-toast-message';
import {toastConfig} from '@SharedModule/components/Toast';
import FeatureRouter from '@Navigation/index';
import AppProvider from '@SharedModule/Context/AppProvider';
const App = () => {
  return (
    <AppProvider>
      <FeatureRouter />
      <Toast config={toastConfig} />
    </AppProvider>
  );
};

export default App;
