import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LayoutContainer from '@SharedModule/components/Layout/LayoutContainer';
import {articlesProps} from '@SharedModule/components/Card/articlesType';
import {Primary} from '@SharedStyles/colors';
import CardArticle from '@SharedModule/components/Card/CardArticles';

export interface CategoryScreenProps {
  navigation: any;
  data: articlesProps[];
  loading: boolean;
  user: any;
}

const CategoryDetailScreen = ({
  navigation,
  data,
  loading,
  user,
}: CategoryScreenProps) => {
  return (
    <LayoutContainer goBack={true} user={user} navigation={navigation}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={Primary} />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DashboardStack', {
                  screen: 'DetailArticle',
                  params: {
                    link: item.url,
                  },
                })
              }>
              <CardArticle
                image={item.image}
                title={item.title}
                source={item.source}
              />
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      )}
    </LayoutContainer>
  );
};

export default CategoryDetailScreen;
