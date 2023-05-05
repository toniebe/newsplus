import {AppContext} from '@SharedModule/Context/AppContext';
import React, {useContext} from 'react';
import ContentWebViewScreen from '../Screen/ContentWebViewScreen';

const ContentWebViewContainer = ({navigation, route}: any) => {
  const {user} = useContext(AppContext);
  const {link} = route.params;
  return (
    <ContentWebViewScreen navigation={navigation} user={user} link={link} />
  );
};

export default ContentWebViewContainer;
