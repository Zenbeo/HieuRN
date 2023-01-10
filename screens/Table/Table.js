import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  Platform,
  Keyboard,
  ScrollView,
  FlatList,
  StyleSheet,
  TextInput,
  LogBox,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {ButtonBack} from '../../Button';
import {images, icons, fontSize} from '../../constaints';
import {colors} from '../../constaints/colors';
import axios from 'axios';
import { hasLocal } from '../localhost';

function Table({navigation,route}) {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState();
  
  //check table On/off
  const [selected, setSelected] = useState('');

  const toggleSelectedID = id => {
    const copySelectedIDs = [...selected]; // coppy data của selected lưu lại cho lần 2
    const index = copySelectedIDs.indexOf(id);
    if (index === -1) copySelectedIDs.push(id); //ấn 1 lần thì dk thêm màu
    else copySelectedIDs.splice(index, 1); //ấn lần 2 thì tắt màu
    setSelected(copySelectedIDs);
  };
  const ChooseHandler=({item})=>{
    toggleSelectedID(item.id)
  }
  useEffect(()=>{
    console.log("LOG HAS DESK " + route?.params?.hasDesk);
    LogBox.ignoreAllLogs()
    getDesk()
  }, [])
  const getDesk = async () => {
    axios({
      url: `http://${hasLocal}/get-desk?id=&name=&status=&type=&page=`,
      timeout: 10000,
      method: 'GET',
      contentType: ' application/json; charset=utf-8',
     
    })
      .then(result => {
        setData(result.data)
        console.log(result);
        let responseData = result.data;
        responseData.forEach(item  => {
          console.log(item);
        })
      })
      .catch(error => {
        console.log(error);
      });
  };
  if(!data) return null //check data
  return (
    <View style={{backgroundColor: 'white',flex:1}}>
      <View style={styles.containerTitle}>
        <ButtonBack 
        onPress={()=>navigation.goBack()}
        style={styles.buttonBack} />
        <View style={styles.titleSearch}>
          <Image 
          source={icons.search}
           style={styles.imageSearch} />
          <TextInput
          onChangeText={text=>setCheck(text)}
            placeholder="Chọn bàn"
            // placeholderTextColor={colors.silver}
            style={styles.InputSearch}
          />
        </View>

        <View style={{width: 60}} />
      </View>
      
      <FlatList
        data={data}
        keyExtractor={index => index.toString()}
        numColumns={2} //chia đôi man
        renderItem={({item, index}) => (
          <Pressable
           style={[styles.container]}
            android_ripple={{color: '#ccc'}}
            onPress={()=>navigation.navigate('FoodList',{
              id:item.id,
              // status: item.status
            })}
            >
            <Text style={styles.nameTable}>{item.name}</Text>
            <Image source={icons.table} style={styles.imageTable} />
          </Pressable>
        )}
      />
      
    </View>
  );
}
export default Table;
const styles = StyleSheet.create({
  containerTitle: {
    backgroundColor: colors.Orgent,
    minHeight: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4
  },
  buttonBack: {
   marginLeft:15
  },
  imageSearch:{
    height: 25,
     width: 25,
     
    },
  titleSearch:{
    flexDirection:'row',
    backgroundColor:colors.white,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:5,
  },
  InputSearch: {
    maxHeight:40,
    width: 300,
    marginEnd: 5,
    backgroundColor: colors.white,
    fontSize: 15,
    paddingStart: 10,
  },
  container: {
    height:160,
    width:160,
    margin: 18,
    marginRight: 25,
    paddingTop:10,
    paddingHorizontal:15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // backgroundColor: selected.includes(item.id) ? colors.white : colors.bluesky,
    padding:5,
    // borderWidth:1,
    //đổ  bóng
    elevation: 4,
    shadowColor: colors.greyBlack,
    shadowRadius: 8,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
  marginBottom:5
  },

  nameTable: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.warning,
    marginBottom:5
  },
  imageTable: {
    height: 90,
    width: 90,
  },
  buttonPressed: {
    opacity: 0.3,
  },
  Text:{
    color: colors.bluesky,
    fontSize: 22,
  },
  searchErrorView:{
    height:'100%',
  justifyContent:'center',
  alignItems:'center'
  }
});
