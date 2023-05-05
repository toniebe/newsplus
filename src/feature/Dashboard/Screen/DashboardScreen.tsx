import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ItemHeadline from '../Components/ItemHeadline';
import LayoutContainer from '@SharedModule/components/Layout/LayoutContainer';
import {Text} from 'react-native';
import font from '@SharedStyles/font';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import {Primary} from '@SharedStyles/colors';
import {DashboardScreenProps, renderItemTypes} from '../Types';
import ItemCategory from '../Components/ItemCategory';

const DashboardScreen = ({
  headline,
  navigation,
  loading,
  category,
  dataSport,
  user,
}: DashboardScreenProps) => {
  return (
    <LayoutContainer navigation={navigation} user={user}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={Primary} />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.topContainer}>
            <View
              style={{
                paddingHorizontal: scale(10),
                paddingTop: verticalScale(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={[
                  font.MontserratBold,
                  {fontSize: scale(16), color: Primary},
                ]}>
                Trending 10:
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={headline}
                renderItem={({item, index}: renderItemTypes) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DashboardStack', {
                        screen: 'DetailArticle',
                        params: {
                          link: item.url,
                        },
                        inital: false,
                      })
                    }>
                    <ItemHeadline
                      image={item.image}
                      title={item.title}
                      trending={index + 1}
                      source={item.source}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View
              style={{
                paddingHorizontal: scale(10),
                marginVertical: verticalScale(15),
              }}>
              <Text
                style={[
                  font.MontserratBold,
                  {fontSize: scale(16), color: Primary},
                ]}>
                Category
              </Text>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={category}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CategoryStack', {
                        screen: 'DetailCategory',
                        params: {
                          category: item.name,
                        },
                        initial: false,
                      })
                    }>
                    <ItemCategory item={item} index={index} />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: scale(10),
              paddingVertical: verticalScale(10),
              marginVertical: verticalScale(10),
            }}>
            <Text
              style={[
                font.MontserratBold,
                {fontSize: scale(16), color: Primary},
              ]}>
              Sports
            </Text>
            <FlatList
              showsVerticalScrollIndicator
              data={dataSport}
              renderItem={({item}: renderItemTypes) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DashboardStack', {
                      screen: 'DetailArticle',
                      initial: false,
                      params: {
                        link: item.url,
                      },
                    })
                  }>
                  <ItemHeadline
                    image={item.image}
                    title={item.title}
                    source={item.source}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      )}
    </LayoutContainer>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
  },
});
