import React, {useState, useEffect} from 'react';
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
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
  StyleSheet,
} from 'react-native';
import {icons} from '../../constaints';
import {colors} from '../../constaints/colors';
import { hasLocal } from '../localhost';

import {DataFList} from './DataList';
import FoodItem from './FoodItems';


function FoodList( {navigation,route}) {
  const [food, setFood] = useState([]);
  const [seach, setSeach] = useState('');
  const fillteredFood = () =>
    food.filter(eachfood =>
      eachfood.name.toLowerCase().includes(seach.toLowerCase()),
    );
    const createButtonAlert = (item) => {
      navigation.navigate('ProductDetails',{
        item: item,
        deskID: route?.params.id,
        price: item.price
      }) 
    }

  useEffect(() => {
      onRequestDataFood()
  })

 const onRequestDataFood = () => {
  fetch(`http://${hasLocal}/get-product?id=&name=&category=`).then((result) => result.json()).then((resultData) => setFood(resultData))
 }
  return (
    <View style={{ backgroundColor: 'white'}}>
       <View
        style={styles.ViewButton}>
          <View style={{width:40 }}>
          <TouchableOpacity
          onPress={()=>navigation.goBack()}>
          <Image
          style={styles.IconsBack}
          source={icons.back}
        />
          </TouchableOpacity>
          </View>
       <View style={styles.titleSreach}>
        <Image 
        source={icons.search}
        style={styles.imageSearch}
        />
       <TextInput
          autoCorrect={false} // tắt tự động sửa
          onChangeText={text => {
            //nhập tìm kiếm=> lưu gtri và gán vào setSeach
            setSeach(text);
          }}
          style={styles.InputSearch}
          placeholder="nhập món ăn bạn chọn"
          // placeholderTextColor={colors.grey}       
        />
       </View>
         <TouchableOpacity 
         onPress={()=>navigation.navigate('CartScreen',{
          deskID: route?.params?.id,
          // status: route?.params?.status
          // onCallbackItem: onCallBackItem
         })}>
         <Image
          style={styles.Images}
          source={icons.shoppimg}
        />
         </TouchableOpacity>
        </View>
      <View style={{height: 1, backgroundColor: 'black'}} />

          
      {fillteredFood().length ? (
        <FlatList
          data={fillteredFood()}
          ListFooterComponent={() => {
            return <View style={{flex: 1}} />;
          }}
          renderItem={({item}) => (
            <FoodItem
              onPress={() => {
                createButtonAlert(item)
              }}
              food={item}
            />
          )}
          keyExtractor={eachfood => eachfood.name}
        />
      ) : (
        <View
          style={styles.searchErrorView}>
            <Image 
            style={{height:70,width:70}}
              source={icons.notification}
              tintColor={colors.Orgent}
            />
          <Text
            style={styles.Text}>
            Món bạn chọn không có 
          </Text>
          <Text
            style={styles.Text}>
           Vui lòng chọn món khác
          </Text>
        </View>
      )}
    </View>
  );
}
export default FoodList;

const styles=StyleSheet.create({
  ViewButton:{
    marginVertical: 10, //cách khoảng xung quanh
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:colors.Orgent,
    borderRadius:15,
    height:45
  },
  titleSreach:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'78%',
    backgroundColor:colors.white,
    borderRadius:10,
    // height:40
    
  },
  imageSearch:{
    maxHeight:25,
    width:25,
    marginLeft:5
  },
  InputSearch:{
    maxHeight:40,
    flex: 1,
    marginEnd: 5,
    backgroundColor: colors.white,
    fontSize: 16,
    // paddingStart: 10,

  },
  Images:{
    marginHorizontal: 5,
    height: 40,
    width: 35,
    tintColor:'black'
  },
  IconsBack:{
    marginHorizontal: 5,
    height: 35,
    width: 30,
    tintColor:'black'
  },
Text:{
  color: colors.Orgent,
  fontSize: 20,
},
searchErrorView:{
  height:'100%',
justifyContent:'center',
alignItems:'center'
}
})