import AsyncStorage from '@react-native-async-storage/async-storage';
import {handleLogout} from '@SharedHelper/Logout';
import {AppContext} from '@SharedModule/Context/AppContext';
import React, {useContext, useEffect, useState} from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {getArticleSports} from '../api/getArticleSports';
import {getHeadline} from '../api/getHeadline';
import {categoryList} from '../api/mockCategory';
import DashboardScreen from '../Screen/DashboardScreen';
import {articlesProps} from '../Types';

const DashboardContainer = ({navigation}: any) => {
  const {setSport, user, setDataUser, setArticleHeadline} =
    useContext(AppContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticle] = useState<articlesProps[]>([]);
  const [articleSport, setArticleSport] = useState<articlesProps[]>([]);

  const fetchDataHeadline = async () => {
    setLoading(true);
    let articles = await getHeadline();

    if (!articles.errors) {
      setArticle(articles.articles);
      setArticleHeadline(articles.articles);
      setLoading(false);
    } else {
      Toast.show({
        type: 'error',
        text2: articles?.errors,
      });
      setLoading(false);
    }
  };

  const fetchDataSport = async () => {
    setLoading(true);
    let sport = await getArticleSports();
    if (!sport.errors) {
      setArticleSport(sport.articles);
      setSport(sport.articles);
      setLoading(false);
    } else {
      Toast.show({
        type: 'error',
        text2: 'Maaf terjadi kendala di sistem',
      });
      setLoading(false);
    }
  };

  const getUser = async () => {
    let userProfile = await AsyncStorage.getItem('user');
    if (userProfile) {
      let userParse: any = JSON.parse(userProfile);
      setDataUser(userParse);
    } else {
      handleLogout(navigation);
    }
  };

  useEffect(() => {
    fetchDataSport();
    fetchDataHeadline();
    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardScreen
      user={user}
      loading={loading}
      headline={articles}
      navigation={navigation}
      category={categoryList}
      dataSport={articleSport}
    />
  );
};

export default DashboardContainer;
