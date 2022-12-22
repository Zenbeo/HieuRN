import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../constaints'

export default function ButtonBack({onPress,style}) {
   
  return (
    <View style={style}>
          <TouchableOpacity
          onPress={onPress}>
          <Image
          style={{
            marginHorizontal: 5,
            height: 35,
            width: 35,
            tintColor:'black'
          }}
          source={icons.back}
        />
          </TouchableOpacity>
          </View>
  )
}