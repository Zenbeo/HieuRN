// import colors from '../../constaints/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {images, icons, fontSize} from '../../constaints';
import React, { useEffect } from 'react';
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
  StyleSheet,
} from 'react-native';
import {colors} from '../../constaints/colors';
import { hasLocal } from '../localhost';

function FoodItem(props) {
  let {name, images, price, size,route} = props.food;
  const {onPress} = props;
  // useEffect(()=>{
  //   console.log(images.item);
  // },[])
 
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonFood}>
   { images.map((item)=><Image
        style={styles.imageFood}
        source={{
          uri: `http://${hasLocal}`+item,
        }}
      />)}   
        
      <View
        style={styles.viewText}>
        <Text
          style={styles.nameText}>
          {name}
        </Text>
        <View
          style={styles.line}
        />

        <Text
          style={styles.cost}>
          Price: {price}
        </Text>

        <Text
          style={styles.size}>
          Size : M, L {size}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default FoodItem;
const styles=StyleSheet.create({
  buttonFood:{
    height: 200,
    marginTop: 10,
    marginBottom: -50,
    paddingStart: 10,
    flexDirection: 'row',
    //đổ  bóng
    elevation: 4,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
  },
  imageFood:{
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 15,
  },
  viewText:{
    flex: 1,
    marginRight: 10,
  },
  nameText:{
    color: 'black',
    fontSize: fontSize.h4,
    fontWeight: 'bold',
  },
  line:{
    height: 1,
    backgroundColor: 'black',
  },
cost:{
  color: colors.inactive,
  fontSize: fontSize.h4,
},
size:{
  color: colors.inactive,
  fontSize: fontSize.h4,
}
})