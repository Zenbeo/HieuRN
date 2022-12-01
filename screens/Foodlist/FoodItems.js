// import colors from '../../constaints/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {images, icons, fontSize} from '../../constaints';
import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Dimensions,
  } from 'react-native';
import { colors } from '../../constaints/colors';

  function _getColorFromStatus(status) {
                //dau gach duoi hien thi chi dùng ham status thoi
    //   //C1
    //     if(status.toLowerCase().trim()=='opening soon'){
    //     return colors.sucses}
    //   else if (status.toLowerCase().trim()=='closeing soon'){
    //     return colors.alert}
    //     else if (status.toLowerCase().trim()=='coming soon'){
    //         return colors.warning}
    //     return colors.sucses
    //C2 
    return status.toLowerCase().trim() == 'Còn hàng'
      ? colors.sucses
      : status.toLowerCase().trim() == 'Hết hàng'
      ? colors.alert
      : colors.sucses;
  }
function FoodItem(props){
    let{name,url,price,size}=props.food 
    const {onPress} =props
    return(
        <TouchableOpacity
           onPress={onPress}
          
            style={{
              height: 200,
              paddingTop: 10,
              paddingStart: 10,
              flexDirection: 'row',
            }}>
            <Image
              style={{
                height: 100,
                width: 100,
                resizeMode: 'cover',
                borderRadius: 10,
                marginRight: 15,
              }}
              source={{
                uri:url}}/>
            <View
              style={{
                flex: 1,
                marginRight: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: fontSize.h4,
                  fontWeight: 'bold',
                }}>
                {name}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: 'black',
                }}
              />
             
              <Text
                style={{
                  color: colors.inactive,
                  fontSize: fontSize.h4,
                }}>
               Price: {price}
              </Text>
           
              <Text
                style={{
                  color: colors.inactive,
                  fontSize: fontSize.h4,
                }}>
              Size : {size}
              </Text>
              
            </View>
            
        </TouchableOpacity>
      
    )
}
export default FoodItem