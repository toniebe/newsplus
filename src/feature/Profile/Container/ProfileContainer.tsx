import React, {useContext} from 'react';
import ProfileScreen from '../Screen/ProfileScreen';
import {AppContext} from '@SharedModule/Context/AppContext';

const ProfileContainer = ({navigation}: any) => {
  const {user} = useContext(AppContext);
  return <ProfileScreen navigation={navigation} user={user} />;
};

export default ProfileContainer;
