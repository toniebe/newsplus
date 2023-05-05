import {articlesProps} from '@SharedModule/components/Card/articlesType';
import {AppContext} from '@SharedModule/Context/AppContext';
import React, {useContext, useEffect, useState} from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {CategoryDetail} from '../api/CatgoryDetail';
import CategoryDetailScreen from '../Screen/CategoryDetailScreen';

const CategoryDetailsContainer = ({navigation, route}: any) => {
  const {category} = route.params;
  const [articles, setArticles] = useState<articlesProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const {user} = useContext(AppContext);

  const fetchCategoryArticles = async () => {
    let data = await CategoryDetail(category);

    if (!data?.errors) {
      setArticles(data.articles);
      setLoading(false);
    } else {
      Toast.show({
        type: 'error',
        text2: 'maaf terjadi gangguan,pastikan koneksi internet kamu',
      });
    }
  };

  useEffect(() => {
    fetchCategoryArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CategoryDetailScreen
      user={user}
      loading={loading}
      navigation={navigation}
      data={articles}
    />
  );
};

export default CategoryDetailsContainer;
