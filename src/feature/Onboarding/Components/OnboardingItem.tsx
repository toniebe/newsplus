import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import font from '@SharedStyles/font';
import {Primary, Secondary} from '@SharedStyles/colors';
import {OnboardingItemProps} from '../Types';

export default function OnboardingItem({data}: OnboardingItemProps) {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width: width}]}>
      <Image source={{uri: data.image_url}} style={[styles.image]} />
      <View style={styles.content}>
        <Text style={[font.MontserratBold, styles.title]}>{data.title}</Text>
        <Text style={[font.MontserratRegular, styles.description]}>
          {data.desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'khaki',
    borderRadius: scale(10),
    height: verticalScale(350),
    marginHorizontal: scale(20),
  },
  title: {
    fontWeight: '700',
    marginBottom: 10,
    fontSize: scale(35),
    color: Primary,
    textAlign: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: scale(10),
  },
  description: {
    color: Secondary,
    textAlign: 'center',
    fontSize: scale(16),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
  },
});
