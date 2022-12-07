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
} from 'react-native';
import {icons} from '../../constaints';
import {colors} from '../../constaints/colors';

import {DataFList} from './DataList';
import FoodItem from './FoodItems';


function FoodList( {navigation}) {
  const [food, setFood] = useState(DataFList);
  const [seach, setSeach] = useState('');
  const fillteredFood = () =>
    food.filter(eachfood =>
      eachfood.name.toLowerCase().includes(seach.toLowerCase()),
    );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
       <View
        style={{
          marginVertical: 10, //cách khoảng xung quanh
          marginHorizontal: 10,
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor:colors.Orgent
        }}>
          <View style={{width:40 }}>
          <TouchableOpacity
          onPress={()=>navigation.goBack()}>
          <Image
          style={{
            marginHorizontal: 5,
            height: 30,
            width: 30,
            tintColor:'black'
          }}
          source={icons.back}
        />
          </TouchableOpacity>
          </View>
        <TextInput
          autoCorrect={false} // tắt tự động sửa
          onChangeText={text => {
            //nhập tìm kiếm=> lưu gtri và gán vào setSeach
            setSeach(text);
          }}
          //blurOnSubmit={true}//ẩn bàn phím khi ko muons ấn
          //onSubmitEditing={()=>{Keyboard.dismiss()}}
          style={{
            height: 40,
            flex: 1,
            marginEnd: 5,
            backgroundColor: colors.silver,
            borderRadius: 7,
            fontSize: 20,
            paddingStart: 10,
          }}
          placeholder="nhập món ăn bạn chọn"
          placeholderTextColor={colors.black}
        />
         <TouchableOpacity 
         onPress={()=>Alert.alert(' Giỏ hàng',' mời bạn thêm ')}>
         <Image
          style={{
            marginHorizontal: 5,
            height: 40,
            width: 35,
            tintColor:'black'
          }}
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
                alert(`Bạn muốn chọn ' ${item.name} '`);
              }}
              food={item}
            />
          )}
          keyExtractor={eachfood => eachfood.name}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image 

            />
          <Text
            style={{
              color: 'red',
              fontSize: 20,
            }}>
            Món bạn chọn không có 
          </Text>
          <Text
            style={{
              color: 'red',
              fontSize: 20,
            }}>
           Vui lòng chọn món khác
          </Text>
        </View>
      )}
    </View>
  );
}
export default FoodList;
