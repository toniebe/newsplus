import React from 'react';
import Onboarding from '../Components/Onboarding';
import {dataTypes} from '../Types';

const OnboardingScreen = ({data, navigation}: dataTypes) => {
  return <Onboarding data={data} navigation={navigation} />;
};

export default OnboardingScreen;
