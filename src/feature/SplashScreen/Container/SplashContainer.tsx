import React, {useContext, useEffect} from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import SplashScreen from '../Screen/SplashScreen';
import {ActivateConfig, GetAllConfig} from '@SharedModule/config/RemoteConfig';
import remoteConfig from '@react-native-firebase/remote-config';
import {AppContext} from '@SharedModule/Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashContainer = ({navigation}: any) => {
  const {setDateOnboarding, setDataUser} = useContext(AppContext);

  const getRemoteConfig = async () => {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 300,
    });
  };

  const handleNavigation = async () => {
    let userProfile = await AsyncStorage.getItem('user');
    if (userProfile) {
      let user = JSON.parse(userProfile);
      setDataUser(user);
      setTimeout(() => navigation.replace('Dashboard'), 3000);
    } else {
      setTimeout(() => navigation.replace('Onboarding'), 3000);
    }
  };
  useEffect(() => {
    getRemoteConfig();
    ActivateConfig(() => {
      GetAllConfig(
        (data: any) => {
          setDateOnboarding(data);
        },
        (err: boolean) => {
          if (err) {
            Toast.show({
              type: 'error',
              text2: 'Periksa kembali koneksi anda',
            });
          } else {
            handleNavigation();
          }
        },
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SplashScreen />;
};

export default SplashContainer;
