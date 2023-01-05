// import colors from '../../constaints/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {images, icons, fontSize} from '../../constaints';
import React, { useEffect, useState } from 'react';
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

function FoodItem(props) {
  let {name, url, price, size} = props.food;
  const {onPress} = props;

  const [dataFood, setDataFood] = useState();
  useEffect(()=>{
    getDesk()
  }, [])

  const getDesk = async () => {
    axios({
      // url: 'http://192.168.100.8/get-desk?id=&name=&status=&type=',
      url: 'http://192.168.100.8/get-product?id=&name=&category=',
      timeout: 10000,
      method: 'GET',
      contentType: ' application/json; charset=utf-8',
    })
      .then(result => {
        setDataFood(result.data)
        console.log(result);
        let responseData = result.data;
        responseData.forEach(item  => {
          console.log(item);
          console.log(item.id);
          console.log(item.name);
        });
        // navigation.navigate('HomeMain')
      })
      .catch(error => {
        console.log(error);
      });
  };
  if(!dataFood) return null //check data
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonFood}>
      <Image
        style={styles.imageFood}
        source={{
          uri: url,
        }}
      />
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
          Size : {size}
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