import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import font from '@SharedStyles/font';
import {Black, White} from '@SharedStyles/colors';
import {articlesProps} from '../Types';

const ItemHeadline = ({image, title, source, trending}: articlesProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            image
              ? {uri: image}
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
      <View style={styles.authorContainer}>
        {trending ? (
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('@SharedImages/icons/fire.png')}
              style={{width: scale(15), height: scale(15)}}
            />
            <Text>Trending No.{trending}</Text>
          </View>
        ) : null}

        <TouchableOpacity onPress={() => Linking.openURL(source.url)}>
          <Text>{source?.name ? `${source.name}` : '-'}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={[
            font.MontserratSemibold,
            {fontSize: scale(15), color: Black, textAlign: 'center'},
          ]}
          numberOfLines={2}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default ItemHeadline;

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
