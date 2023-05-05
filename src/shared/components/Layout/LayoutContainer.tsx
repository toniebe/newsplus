import {View} from 'react-native';
import React from 'react';
import Header from '../Header/Header';

export type layoutProps = {
  children: any;
  navigation: any;
  user: any;
  goBack?: boolean;
};

const LayoutContainer = ({
  goBack = false,
  children,
  navigation,
  user,
}: layoutProps) => {
  return (
    <View style={{flex: 1}}>
      <Header goBack={goBack} navigation={navigation} user={user} />
      {children}
    </View>
  );
};

export default LayoutContainer;
