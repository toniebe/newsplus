import {Text, View} from 'react-native';
import React from 'react';
import {renderCategory} from '../Types';
import {ImageBackground} from 'react-native';
import {scale} from '@SharedHelper/Scaling';
import font from '@SharedStyles/font';
import {White} from '@SharedStyles/colors';

const ItemCategory = ({item}: renderCategory) => {
  return (
    <View
      style={{
        marginHorizontal: scale(5),
        borderRadius: 100,
      }}>
      <ImageBackground
        source={item.image}
        imageStyle={{
          borderRadius: scale(50),
        }}
        style={{
          width: scale(90),
          height: scale(90),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            borderRadius: scale(50),
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.4)',
            alignItems: 'center',
          }}>
          <Text
            style={[font.MontserratBold, {fontSize: scale(13), color: White}]}>
            {item.name}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ItemCategory;
