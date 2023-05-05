import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import font from '@SharedStyles/font';
import {Black, White} from '@SharedStyles/colors';
import {categoryType} from '@FeatureModule/Dashboard/Types';

const CategoryItems = ({image, name, description, onPress}: categoryType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={
            image
              ? image
              : require('@SharedModule/assets/images/illustration/sp-2.png')
          }
          style={{
            width: scale(300),
            height: verticalScale(200),
            borderWidth: 1,
            borderRadius: scale(10),
          }}
        />
      </View>

      <View>
        <Text
          style={[
            font.MontserratSemibold,
            {fontSize: scale(15), color: Black, textAlign: 'center'},
          ]}
          numberOfLines={2}>
          {name}
        </Text>
        <View style={styles.authorContainer}>
          <Text>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({
  container: {
    maxWidth: scale(320),
    backgroundColor: White,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    borderRadius: scale(20),
    marginHorizontal: scale(10),
    marginTop: scale(10),
  },
  imageContainer: {
    height: verticalScale(200),
    marginTop: verticalScale(5),
    justifyContent: 'center',
  },
  authorContainer: {
    paddingVertical: verticalScale(5),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
