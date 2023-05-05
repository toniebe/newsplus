import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './Auth';
import DrawerStack from './Drawer';
import SplashContainer from '@FeatureModule/SplashScreen/Container/SplashContainer';

const FeatureRouter = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
        }}
        initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashContainer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DrawerStack}
          options={{
            headerShown: false,
          }}
        />

        {Auth()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FeatureRouter;
