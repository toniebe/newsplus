import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryContainer from '@FeatureModule/Category/Container/CategoryContainer';
import CategoryDetailsContainer from '@FeatureModule/Category/Container/CategoryDetailsContainer';

const CategoryStack = () => {
  const Category = createNativeStackNavigator();
  return (
    <Category.Navigator>
      <Category.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Category.Screen name="Category" component={CategoryContainer} />
        <Category.Screen
          name="DetailCategory"
          component={CategoryDetailsContainer}
          options={{
            headerShown: false,
          }}
        />
      </Category.Group>
    </Category.Navigator>
  );
};

export default CategoryStack;
