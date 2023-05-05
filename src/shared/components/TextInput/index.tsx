import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from '@SharedHelper/Scaling';
import {Grey, Primary, White} from '@SharedStyles/colors';
import font from '@SharedStyles/font';

export interface textinputProps {
  title: string;
  value: string;
  onChangeText: any;
  placeholder: string;
  secureTextEntry: boolean;
}

const Textinput = ({
  title = 'Title',
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  ...nativeProps
}: textinputProps) => {
  const [borderColor, setBorderColor] = useState<string>(Grey);
  return (
    <View>
      {title && (
        <Text
          style={[
            font.MontserratBold,
            {fontSize: scale(14), marginVertical: verticalScale(5)},
          ]}>
          {title}
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        style={[styles.textinput, {borderColor: borderColor}]}
        onFocus={() => setBorderColor(Primary)}
        onBlur={() => setBorderColor(Grey)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...nativeProps}
      />
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
    backgroundColor: White,
  },
});
