import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

function UIButton(props) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10,

        //căn chỉnh Text
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          color: '#ED6263',

          fontSize: 20,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default UIButton;
