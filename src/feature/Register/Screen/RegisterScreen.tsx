import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import {Primary, Secondary, White} from '@SharedStyles/colors';
import font from '@SharedStyles/font';
import Textinput from '@SharedModule/components/TextInput';
import Button from '@SharedModule/components/Button';

export interface RegisterProps {
  valueEmail: string;
  onChangeTextEmail: any;
  valuePassword: string;
  OnChangeTextPassword: any;
  OnSubmit: any;
  disable: boolean;
  handleLogin: any;
}

const RegisterScreen = ({
  valueEmail,
  onChangeTextEmail,
  valuePassword,
  OnChangeTextPassword,
  OnSubmit,
  disable,
  handleLogin,
}: RegisterProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@SharedImages/illustration/sp-2.png')}
        style={styles.imageContainer}>
        <Text
          style={[font.MontserratBold, {fontSize: scale(36), color: Primary}]}>
          Daftar
        </Text>
        <Text
          style={[
            font.MontserratRegular,
            {fontSize: scale(18), color: Secondary, textAlign: 'right'},
          ]}>
          Silahkan daftar untuk mengakses fitur yang ada pada News Plus
        </Text>
      </ImageBackground>
      <View style={styles.containerBottom}>
        <Textinput
          secureTextEntry={false}
          title="email"
          value={valueEmail}
          onChangeText={(value: any) => onChangeTextEmail(value)}
          placeholder={'ebe@example.com'}
        />
        <Textinput
          title="password"
          value={valuePassword}
          onChangeText={(value: any) => OnChangeTextPassword(value)}
          secureTextEntry={true}
          placeholder={'enter your password'}
        />
        <Button
          disable={disable}
          type="primary"
          buttonColor={Primary}
          onPress={OnSubmit}
          title="Daftar"
          titleColor={White}
          size="large"
        />
        <View style={styles.containerTextRegister}>
          <Text style={[font.MontserratSemibold, {color: White}]}>
            Sudah memiliki Akun?
          </Text>
          <TouchableOpacity style={styles.textRegister} onPress={handleLogin}>
            <Text style={[font.MontserratSemibold, {color: Primary}]}>
              Silahkan masuk disini
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    resizeMode: 'contain',
  },
  containerBottom: {
    flex: 1,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    borderTopRightRadius: scale(15),
    borderTopLeftRadius: scale(15),
    justifyContent: 'space-around',
    backgroundColor: Secondary,
    zIndex: 3,
  },
  containerTextRegister: {
    flexDirection: 'row',
    paddingVertical: verticalScale(5),
    justifyContent: 'center',
  },
  textRegister: {
    marginHorizontal: scale(5),
    justifyContent: 'center',
  },
});
