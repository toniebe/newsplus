import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardContainer from '@FeatureModule/Dashboard/Container/DashboardContainer';
import ContentWebViewContainer from '@FeatureModule/WebView/Container/ContentWebViewContainer';

const DashboardStack = () => {
  const Dashboard = createNativeStackNavigator();
  return (
    <Dashboard.Navigator>
      <Dashboard.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Dashboard.Screen name="Dashboard" component={DashboardContainer} />
        <Dashboard.Screen
          name="DetailArticle"
          component={ContentWebViewContainer}
          options={{
            headerShown: false,
          }}
        />
      </Dashboard.Group>
    </Dashboard.Navigator>
  );
};

export default DashboardStack;
