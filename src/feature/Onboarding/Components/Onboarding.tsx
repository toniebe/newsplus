import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import {dataTypes} from '../Types';
import Button from '@SharedModule/components/Button';
import {Black, Primary, White} from '@SharedStyles/colors';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import font from '@SharedStyles/font';

const Onboarding = ({data, navigation}: dataTypes) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={data}
          renderItem={({item}) => <OnboardingItem data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={data} scrollX={scrollX} />
      <View style={styles.containerButton}>
        <Button
          disable={false}
          buttonColor={Primary}
          titleColor={White}
          size={'large'}
          type={'primary'}
          title="Daftar dengan email"
          onPress={() => navigation.navigate('Register')}
        />
        <View style={styles.containerTextRegister}>
          <Text style={[font.MontserratSemibold, {color: Black}]}>
            Sudah memiliki Akun?
          </Text>
          <TouchableOpacity
            style={styles.textRegister}
            onPress={() => navigation.navigate('Login')}>
            <Text style={[font.MontserratSemibold, {color: Primary}]}>
              Silahkan masuk disini
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerButton: {
    flex: 0.5,
    width: '80%',
    justifyContent: 'space-around',
  },
  containerTextRegister: {
    flexDirection: 'row',
    paddingVertical: verticalScale(5),
    justifyContent: 'center',
  },
  textRegister: {
    marginHorizontal: scale(5),
    justifyContent: 'center',
  },
});
