import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Primary, Secondary, White} from '@SharedStyles/colors';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import font from '@SharedStyles/font';
import Button from '@SharedModule/components/Button';
import Textinput from '@SharedModule/components/TextInput';

export interface LoginProps {
  valueEmail: string;
  onChangeTextEmail: any;
  valuePassword: string;
  OnChangeTextPassword: any;
  OnSubmit: any;
  disable: boolean;
  handleRegister: any;
}
const LoginScreen = ({
  valueEmail,
  onChangeTextEmail,
  valuePassword,
  OnChangeTextPassword,
  OnSubmit,
  disable,
  handleRegister,
}: LoginProps) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={require('@SharedImages/illustration/sp-intro.png')}
        style={styles.imageContainer}>
        <Text
          style={[font.MontserratBold, {fontSize: scale(36), color: Primary}]}>
          Masuk
        </Text>
        <Text
          style={[
            font.MontserratRegular,
            {fontSize: scale(18), color: Secondary, textAlign: 'right'},
          ]}>
          Silahkan masuk untuk mengakses fitur yang ada pada News Plus
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
          title="Masuk"
          titleColor={White}
          size="large"
        />
        <View style={styles.containerTextRegister}>
          <Text style={[font.MontserratSemibold, {color: White}]}>
            Belum memiliki Akun?
          </Text>
          <TouchableOpacity
            style={styles.textRegister}
            onPress={handleRegister}>
            <Text style={[font.MontserratSemibold, {color: Primary}]}>
              Silahkan daftar disini
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

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
    paddingHorizontal: scale(10),
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
