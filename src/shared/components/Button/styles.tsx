import {scale, verticalScale} from '@SharedHelper/Scaling';
import font from '@SharedStyles/font';
import {StyleSheet} from 'react-native';

export const stylesButton = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
});

export const textStyleButton = StyleSheet.flatten([font.MontserratSemibold]);
