import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingContainer from '@FeatureModule/Onboarding/Container/OnboardingContainer';
import RegisterContainer from '@FeatureModule/Register/Container/RegisterContainer';
import LoginContainer from '@FeatureModule/Login/Container/LoginContainer';

const Auth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Group>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{headerShown: false}}
      />
    </Stack.Group>
  );
};

export default Auth;
