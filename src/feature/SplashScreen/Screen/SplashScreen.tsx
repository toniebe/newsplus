import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Primary, White} from '@SharedStyles/colors';
import font from '@SharedStyles/font';
import {scale} from '@SharedHelper/Scaling';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={TextStyle}>News Plus</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: White,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Primary,
    fontSize: scale(40),
  },
});

const TextStyle = StyleSheet.flatten([font.MontserratBold, styles.title]);
