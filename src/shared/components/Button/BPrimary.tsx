import {Text, TouchableOpacity, ButtonProps} from 'react-native';
import React from 'react';
import {stylesButton, textStyleButton} from './styles';
import {Primary, White} from '@SharedStyles/colors';
import {ButtonPrimaryProps} from './type';

const BPrimary = ({
  title = 'submit',
  buttonColor = Primary,
  titleColor = White,
  size = 'large',
  onPress,
  ...nativeProps
}: ButtonPrimaryProps & ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: buttonColor,
          width: size === 'large' ? '100%' : '50%',
        },
        stylesButton.container,
      ]}
      onPress={onPress}
      {...nativeProps}>
      <Text style={[{color: titleColor}, textStyleButton]} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BPrimary;
