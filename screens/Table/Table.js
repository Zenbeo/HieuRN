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
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.containerTitle}>
        <ButtonBack 
        onPress={()=>navigation.goBack()}
        style={styles.buttonBack} />
        <View style={styles.titleSearch}>
          <Image 
          source={icons.search}
           style={styles.imageSearch} />
          <TextInput
            placeholder="Chọn bàn"
            placeholderTextColor={colors.silver}
            style={styles.InputSearch}
          />
        </View>

        <View style={{width: 60}} />
      </View>
      <FlatList
        data={product}
        keyExtractor={index => index.toString()}
        numColumns={2} //chia đôi man
        renderItem={({item, index}) => (
          <Pressable
            style={styles.container}
            android_ripple={{color: '#ccc'}}
            onPress={() => navigation.navigate('FoodList')}>
            <Text style={styles.nameTable}>{item.name}</Text>
            <Image source={item.url} style={styles.imageTable} />
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
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingLeft:5
  },
  InputSearch: {
    height: 35,
    width: 300,
    marginEnd: 5,
    backgroundColor: colors.white,
    fontSize: 17,
    paddingStart: 20,
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
    backgroundColor: colors.white,
    padding:5,
    //đổ  bóng
    elevation: 2,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.25,
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
});
