import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import {Secondary, White} from '@SharedStyles/colors';
import font from '@SharedStyles/font';

export interface headerProps {
  navigation: any;
  goBack?: boolean;
  user: any;
}

const Header = ({goBack, navigation, user}: headerProps) => {
  return (
    <View style={styles.container}>
      {goBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('@SharedImages/icons/left-arrow.png')}
            style={{
              width: scale(15),
              height: scale(15),
              resizeMode: 'contain',
              tintColor: White,
            }}
          />
        </TouchableOpacity>
      ) : null}

      <Text
        style={[font.MontserratSemibold, {fontSize: scale(14), color: White}]}>
        {user?.displayName || 'Halo Sobat News Plus'}
      </Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={
            user?.photoURL
              ? {uri: user?.photoURL}
              : require('@SharedImages/illustration/user.png')
          }
          style={{width: scale(25), height: scale(25), borderRadius: scale(40)}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    backgroundColor: Secondary,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
