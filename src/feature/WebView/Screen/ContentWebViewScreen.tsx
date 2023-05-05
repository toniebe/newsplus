import React from 'react';
import LayoutContainer from '@SharedModule/components/Layout/LayoutContainer';
import {WebView} from 'react-native-webview';

export interface ContentWebViewProps {
  navigation: any;
  user: any;
  link: any;
}

const ContentWebViewScreen = ({
  navigation,
  user,
  link,
}: ContentWebViewProps) => {
  return (
    <LayoutContainer goBack navigation={navigation} user={user}>
      <WebView
        source={{
          uri: link,
        }}
      />
    </LayoutContainer>
  );
};

export default ContentWebViewScreen;
