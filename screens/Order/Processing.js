import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Alert,
  TouchableOpacity,

} from 'react-native';
import React from 'react';
import {colors} from '../../constaints/colors';
import {dataFake} from '../Constans/mockup';
import FoodItem from '../Foodlist/FoodItems';

export default function Processing( {navigation}) {
  const createButtonAlert = () =>
  Alert.alert(
    "Bạn muốn thêm món",
    "Ấn Ok để đặt thêm món",
    [
      {
        text: "Cancel",
        onPress: () => navigation.goBack(),
        style: "cancel"
      },
      { text: "OK", onPress: () => navigation.navigate('UITap')}
    ]
  );
  return (
    <View>
      <View style={styles.ViewName}>
        <Text style={styles.TextName}>Đang tiến hành</Text>
      </View>
      <FlatList
        keyExtractor={index => index.toString()}
        data={dataFake}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.orderRow} onPress={createButtonAlert}>
              <Text> Tên món: {item.name}</Text>
              <Text> Giá : {item.price}</Text>
              <Text> Size : {item.size}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  ViewName: {
    height: height / 15,
    width: width ,
    backgroundColor: colors.Orgent,
    justifyContent:'center',
    alignItems:'center'
  },
  TextName: {
    color: colors.white,
    fontSize: 20,
    fontWeight:'bold'
  },
  orderRow: {
    height: width / 4,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 15,
  },
});
