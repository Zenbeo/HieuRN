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
import { ButtonBack } from '../../Button';
import { hasLocal } from '../localhost';

export default function Processing( {navigation}) {
  const createButtonAlert = () =>
  Alert.alert(
    "Bạn muốn thêm món",
    "Ấn Ok để đặt thêm món",
    [
      {
        text: "Cancel",
        // onPress: () => navigation.goBack(),
        style: "cancel"
      },
      { text: "OK", onPress: () => navigation.navigate('FoodList')}
    ]
  );
  const [history, setHistory] = React.useState([])
  React.useEffect(() => {
    onRequestDataFood()
       
      }, [])
  const onRequestDataFood = () => {
    fetch(`http://${hasLocal}/history`).then((result) => result.json()).then((resultData) => setHistory(resultData))
   }
  return (
    <View style={{flex:1}}>
      <View style={styles.ViewName}>
        <ButtonBack style={{flex:10}}  onPress={()=>navigation.goBack()}/>
       <View style={{flex:20}}>
       <Text style={styles.TextName}>Đang tiến hành</Text>
       </View>
       
      </View>
      <FlatList
        keyExtractor={index => index.toString()}
        data={history}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.orderRow} onPress={createButtonAlert}>
               <View style={styles.onListProduct}>
           <Text style={{color:'#000'}}> Bàn số: </Text>
           <Text style={{color:'#000',fontSize:16}}>  {item.deskId}</Text>
           </View>
           <View style={styles.onListProduct}>
            <Text style={{color:'#000'}}>Tổng tiền: </Text>
            <Text style={{color:'#000',fontSize:16}}> {item.price}</Text>
            </View>
            <View style={styles.onListProduct}>
            <Text style={{color:'#000'}}>Số lượng: </Text>
            <Text style={{color:'#000',fontSize:16}}>{item.countProduct}</Text>
            </View>
              {/* <Text> Size : {item.size}</Text> */}
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
    alignItems:'center',
    flexDirection:'row',
    
  },
  TextName: {
    color: colors.black,
    fontSize: 20,
    fontWeight:'bold',
  //  paddingLeft:50
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
  onListProduct:{
    flexDirection:'row', 
    justifyContent:'space-between',
     paddingRight:10}
});
