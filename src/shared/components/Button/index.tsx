import {Text} from 'react-native';
import React from 'react';
import {Grey, Primary, White} from '@SharedStyles/colors';

import BPrimary from './BPrimary';
import {ButtonCustomeProps} from './type';

const Button = ({
  title = 'submit',
  buttonColor = Primary,
  titleColor = White,
  size = 'large',
  type = 'primary',
  onPress,
  disable,
}: ButtonCustomeProps) => {
  return type === 'primary' ? (
    <BPrimary
      title={title}
      buttonColor={disable ? Grey : buttonColor}
      onPress={onPress}
      titleColor={titleColor}
      size={size}
      disabled={disable}
    />
  ) : (
    <Text>Secondary</Text>
  );
};

export default Button;
