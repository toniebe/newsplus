import React, {useContext, useState} from 'react';
import LoginScreen from '../Screen/LoginScreen';
import {checkValue} from '@SharedHelper/Validation';

import auth from '@react-native-firebase/auth';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {AppContext} from '@SharedModule/Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContainer = ({navigation}: any) => {
  const {setDataUser} = useContext(AppContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disable, setdisable] = useState<boolean>(false);

  const handleUserLogin = () => {
    if (checkValue(email, password)) {
      setdisable(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          let user = JSON.stringify(data.user);
          AsyncStorage.setItem('user', user);
          setDataUser(data.user);
          navigation.replace('Dashboard');
        })
        .catch(err => {
          if (err.code === 'auth/user-not-found') {
            Toast.show({
              type: 'error',
              text2: 'Anda belum terdaftar silahkan mendaftar terlebih dahulu',
            });
          } else if (err.code === 'auth/wrong-password') {
            Toast.show({
              type: 'error',
              text2: 'Email dan password tidak sesuai',
            });
          } else {
            Toast.show({
              type: 'error',
              text2: 'ada kesalahan pada login',
            });
          }
        });
      setdisable(false);
    } else {
      setdisable(false);
    }
  };

  return (
    <LoginScreen
      OnChangeTextPassword={(value: any) => setPassword(value)}
      valuePassword={password}
      onChangeTextEmail={(value: any) => setEmail(value)}
      OnSubmit={handleUserLogin}
      handleRegister={() => navigation.navigate('Register')}
      valueEmail={email}
      disable={disable}
    />
  );
};

export default LoginContainer;
