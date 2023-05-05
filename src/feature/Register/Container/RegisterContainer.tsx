import React, {useContext, useState} from 'react';
import RegisterScreen from '../Screen/RegisterScreen';
import auth from '@react-native-firebase/auth';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {checkValue} from '@SharedHelper/Validation';
import {AppContext} from '@SharedModule/Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterContainer = ({navigation}: any) => {
  const {setDataUser} = useContext(AppContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disable, setdisable] = useState<boolean>(false);

  const handleOnSubmit = () => {
    setdisable(true);
    if (checkValue(email, password)) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
          let user = JSON.stringify(data.user);
          AsyncStorage.setItem('user', user);
          setDataUser(data.user);
          Toast.show({
            type: 'primary',
            text1: 'User berhasil dibuat tunggu akan dialihkan kehalaman utama',
          });
          setEmail('');
          setPassword('');
          setTimeout(() => navigation.replace('Dashboard'), 2000);
          setdisable(false);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Toast.show({
              type: 'error',
              text2: 'email sudah digunakan',
            });
            setdisable(false);
          }

          if (error.code === 'auth/invalid-email') {
            Toast.show({
              type: 'error',
              text2: 'Alamat email atau password tidak valid',
            });
            setdisable(false);
          }
        });
    } else {
      setdisable(false);
    }
  };

  return (
    <RegisterScreen
      disable={disable}
      OnChangeTextPassword={(value: any) => setPassword(value)}
      valuePassword={password}
      onChangeTextEmail={(value: any) => setEmail(value)}
      valueEmail={email}
      OnSubmit={handleOnSubmit}
      handleLogin={() => navigation.navigate('Login')}
    />
  );
};

export default RegisterContainer;
