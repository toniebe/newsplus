import {articlesProps} from '@FeatureModule/Dashboard/Types';
import React, {useState} from 'react';
import {AppContext} from './AppContext';

const AppProvider = ({children}: any) => {
  const [dataOnboarding, setDateOnboarding] = useState<any>([]);
  const [user, setDataUser] = useState<any>();
  const [articleHeadline, setArticleHeadline] = useState<articlesProps[]>([]);
  const [sportArticle, setSport] = useState<articlesProps[]>([]);
  return (
    <AppContext.Provider
      value={{
        sportArticle,
        setSport,
        articleHeadline,
        setArticleHeadline,
        setDataUser,
        user,
        dataOnboarding,
        setDateOnboarding,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
