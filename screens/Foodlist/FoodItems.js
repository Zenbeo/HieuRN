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
    return status.toLowerCase().trim() == 'opening soon'
      ? colors.sucses
      : status.toLowerCase().trim() == 'closeing soon'
      ? colors.alert
      : status.toLowerCase().trim() == 'coming soon'
      ? colors.warning
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
              {/* <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: colors.inactive,
                    fontSize: fontSize.h4,
                  }}>
                  Status:
                </Text>
                <Text
                  style={{
                    color:_getColorFromStatus(status),
                    fontSize: fontSize.h4,
                  }}>
                  {status.toUpperCase()}
                </Text>
              </View> */}
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
              <View
                style={{
                  flexDirection: 'row',
                }}>
                    
               {/* {sociaNetworks['facebook'] != undefined && <Image 
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10,
                  }}
                  source={icons.facebook}
                />}
               {sociaNetworks['gmail'] != undefined && <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={icons.gmail}
                />}
                {sociaNetworks['instagram'] != undefined &&<Image
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  source={icons.instagram}
                />} */}
              </View>
            </View>
        </TouchableOpacity>
      
    )
}
export default FoodItem