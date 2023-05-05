import {AppContext} from '@SharedModule/Context/AppContext';
import React, {useContext} from 'react';
import OnboardingScreen from '../Screen/OnboardingScreen';

const OnboardingContainer = ({navigation}: any) => {
  const {dataOnboarding} = useContext(AppContext);
  const onboardingData = JSON.parse(dataOnboarding);

  return <OnboardingScreen data={onboardingData} navigation={navigation} />;
};

export default OnboardingContainer;
