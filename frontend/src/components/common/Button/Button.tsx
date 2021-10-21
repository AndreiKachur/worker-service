import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

import colors from '../../../themes';

type ButtonProps = {
  title?: string,
  onClick?: () => any,
  width?: number,
  backgroundColor?: string,
  color?: string,
  borderRadius?: number,
  fontSize?: number,
  paddingVertical?: number,
  marginVertical?: number,
  marginHorizontal?: number,
  children?: string
};

const Button: React.FC<ButtonProps> = ({
  title = '',
  onClick,
  width = 90,
  backgroundColor = colors.primary,
  color = colors.third,
  borderRadius = 7,
  fontSize = 14,
  paddingVertical = 12,
  marginVertical = 7,
  marginHorizontal = 0,
  children = 'ОТПРАВИТЬ',
}) => (

  <TouchableOpacity
    activeOpacity={0.70}
    onPress={onClick}
  >
    <Text
      style={
          {
            backgroundColor,
            color,
            borderRadius,
            paddingVertical,
            marginVertical,
            marginHorizontal,
            fontSize,
            fontWeight: 'bold',
            textAlign: 'center',
            width: Dimensions.get('window').width * (width / 100),
          }
        }
    >
      {title || children}
    </Text>
  </TouchableOpacity>
);

export default Button;
