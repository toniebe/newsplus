import {AppContext} from '@SharedModule/Context/AppContext';
import React, {useContext} from 'react';
import {categoryList} from '../api/CategoryList';
import CategoryScreen from '../Screen/CategoryScreen';

const CategoryContainer = ({navigation}: any) => {
  const {user} = useContext(AppContext);
  return (
    <CategoryScreen
      user={user}
      navigation={navigation}
      category={categoryList}
    />
  );
};

export default CategoryContainer;
