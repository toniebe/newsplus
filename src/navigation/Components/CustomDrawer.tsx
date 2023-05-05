import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Secondary, White} from '@SharedStyles/colors';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import font from '@SharedStyles/font';
import {handleLogout} from '@SharedHelper/Logout';
import {AppContext} from '@SharedModule/Context/AppContext';

const CustomDrawer = (props: any) => {
  const {user} = useContext(AppContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: Secondary}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('@SharedImages/illustration/journalism.png')}>
          <View
            style={{
              flex: 1,
              paddingVertical: verticalScale(20),
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'flex-end',
              paddingHorizontal: scale(10),
            }}>
            <Image
              source={
                user?.photoURL
                  ? {uri: user?.photoURL}
                  : require('@SharedImages/illustration/user.png')
              }
              style={{
                width: scale(80),
                height: scale(80),
                borderRadius: scale(40),
                marginBottom: verticalScale(10),
              }}
            />
            <Text
              style={[
                font.MontserratSemibold,
                {fontSize: scale(18), color: White},
              ]}>
              {user?.displayName ? user?.displayName : user?.email}
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: White,
            paddingTop: verticalScale(10),
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          justifyContent: 'flex-end',
          paddingVertical: verticalScale(10),
          paddingHorizontal: scale(20),
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => handleLogout(props.navigation)}>
          <Image
            source={require('@SharedImages/illustration/user.png')}
            style={{width: scale(25), height: scale(25)}}
          />
          <Text
            style={[
              {
                fontFamily: 'Montserrat-Semibold',
                fontSize: scale(15),
                marginLeft: scale(25),
              },
            ]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
