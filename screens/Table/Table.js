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
} from 'react-native';
import {color} from 'react-native-reanimated';
import {ButtonBack} from '../../Button';
import {images, icons, fontSize} from '../../constaints';
import {colors} from '../../constaints/colors';
import {dataItem} from './TableItem';
//import colors from '../../constaints/col

function Table({navigation}) {
  const [check, setCheck] = useState(false);
  const [product, setProduct] = useState(dataItem);
  
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
    // navigation.navigate('FoodList')
  }
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
      {/* {fillteredTable().length ? ( */}
      <FlatList
        data={product}
        keyExtractor={index => index.toString()}
        numColumns={2} //chia đôi man
        renderItem={({item, index}) => (
          <Pressable
           style={styles.container}
            android_ripple={{color: '#ccc'}}
            onPress={() => navigation.navigate('FoodList')}
            // onPress={ChooseHandler}
            >
            <Text style={styles.nameTable}>{item.name}</Text>
            <Image source={item.url} style={styles.imageTable} />
          </Pressable>
        )}
      />
      <View style={{flex:10}}/>
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
  },

  nameTable: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.warning,
  },
  imageTable: {
    height: 130,
    width: 130,
  },
  buttonPressed: {
    opacity: 0.3,
  },
  Text:{
    color: colors.bluesky,
    fontSize: 20,
  },
  searchErrorView:{
    height:'100%',
  justifyContent:'center',
  alignItems:'center'
  }
});
