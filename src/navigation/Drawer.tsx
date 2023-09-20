import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './Components/CustomDrawer';
import {Image} from 'react-native';
import {scale} from '@SharedHelper/Scaling';
import {Secondary, White} from '@SharedStyles/colors';
import ProfileContainer from '@FeatureModule/Profile/Container/ProfileContainer';
import CategoryStack from './CategoryStack';
import DashboardStack from './DashboardStack';
import TestScreen from '@FeatureModule/TestScreen/TestScreen';

const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: Secondary,
        drawerActiveTintColor: White,
        drawerPosition: 'left',
        drawerLabelStyle: {
          fontFamily: 'Montserrat-Semibold',
          fontSize: scale(15),
          marginLeft: scale(-10),
        },

        headerShown: false,
      }}
      drawerContent={(props: any) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          title: 'Home',
          drawerIcon: ({color}) => (
            <Image
              source={require('@SharedImages/icons/home.png')}
              style={{width: scale(20), height: scale(20), tintColor: color}}
            />
          ),
        }}
        name="DashboardStack"
        component={DashboardStack}
      />
      <Drawer.Screen
        options={{
          title: 'Kategori',
          drawerIcon: ({color}) => (
            <Image
              source={require('@SharedImages/icons/megaphone.png')}
              style={{width: scale(20), height: scale(20), tintColor: color}}
            />
          ),
        }}
        name="CategoryStack"
        component={CategoryStack}
      />
      <Drawer.Screen
        options={{
          title: 'Profile',
          drawerIcon: ({color}) => (
            <Image
              source={require('@SharedImages/icons/profile.png')}
              style={{width: scale(20), height: scale(20), tintColor: color}}
            />
          ),
        }}
        name="Profile"
        component={ProfileContainer}
      />
      <Drawer.Screen
        options={{
          title: 'For testing',
          drawerIcon: ({color}) => (
            <Image
              source={require('@SharedImages/icons/profile.png')}
              style={{width: scale(20), height: scale(20), tintColor: color}}
            />
          ),
        }}
        name="TestScreen"
        component={TestScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
