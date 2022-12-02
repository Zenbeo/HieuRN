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
  Dimensions
} from 'react-native';
import { icons } from '../../constaints';
import { colors } from '../../constaints/colors';

import { DataFList } from './DataList';
import FoodItem from './FoodItems';

function FoodList(props) {
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
        }}>
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
        <Image
          style={{
            marginHorizontal: 5,
            height: 35,
            width: 35,
          }}
          source={icons.shoppimg}
        />
      </View>
      <View style={{height: 1, backgroundColor: 'black'}} />
      
      
      {fillteredFood().length ? (
        <FlatList
          data={fillteredFood()}
          ListFooterComponent={() => {
            return <View style={{flex:1}} />;
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
        />) : (<View
          style={{
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
            }}>
            No food found
          </Text>
        </View>
      )}
    </View>
  );
}
export default FoodList
