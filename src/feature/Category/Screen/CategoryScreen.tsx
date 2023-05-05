import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import LayoutContainer from '@SharedModule/components/Layout/LayoutContainer';
import {categoryType} from '@FeatureModule/Dashboard/Types';
import CategoryItems from '../Components/CategoryItems';

export interface CategoryProps {
  navigation: any;
  category: categoryType[];
  user: any;
}

const CategoryScreen = ({user, navigation, category}: CategoryProps) => {
  return (
    <LayoutContainer user={user} navigation={navigation}>
      <View style={styles.container}>
        <FlatList
          data={category}
          renderItem={({item}) => (
            <CategoryItems
              name={item.name}
              description={item.description}
              image={item.image}
              onPress={() =>
                navigation.navigate('DetailCategory', {category: item.name})
              }
            />
          )}
        />
      </View>
    </LayoutContainer>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
