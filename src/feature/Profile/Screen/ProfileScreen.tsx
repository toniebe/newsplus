import {Image, Text, View} from 'react-native';
import React from 'react';
import LayoutContainer from '@SharedModule/components/Layout/LayoutContainer';
import font from '@SharedStyles/font';
import {scale} from '@SharedHelper/Scaling';
import {Primary, White} from '@SharedStyles/colors';

export interface ProfileScreenProps {
  navigation: any;
  user: any;
}

const ProfileScreen = ({navigation, user}: ProfileScreenProps) => {
  return (
    <LayoutContainer navigation={navigation} user={user}>
      <View
        style={{
          flex: 1,
          backgroundColor: White,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('@SharedImages/illustration/maintenance.png')}
          style={{width: scale(200), height: scale(200), resizeMode: 'contain'}}
        />
        <Text
          style={[font.MontserratBold, {fontSize: scale(20), color: Primary}]}>
          Under Development
        </Text>
      </View>
    </LayoutContainer>
  );
};

export default ProfileScreen;
