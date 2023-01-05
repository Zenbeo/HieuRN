import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../constaints/colors';
import {icons, images} from '../../constaints';
import buttonCount from '../../Button/buttonCount';

export default function CartScreen({navigation}) {
  const [listProduct, setListProduct] = useState();
  const createButtonAlert = item =>
    Alert.alert('Thêm món thành công', '', [{text: 'OK'}]);

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    function increment1() {
      //setCount(prevCount => prevCount+=1);
      setCount1(function (prevCount) {
        return (prevCount += 1);
      });
    }
    function decrement1() {
      setCount1(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1);
        } else {
          return (prevCount = 0);
        }
      });
    }
    function increment2() {
      //setCount(prevCount => prevCount+=1);
      setCount2(function (prevCount) {
        return (prevCount += 1);
      });
    }
    function decrement2() {
      setCount2(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1);
        } else {
          return (prevCount = 0);
        }
      });
    }
    function increment3() {
      //setCount(prevCount => prevCount+=1);
      setCount3(function (prevCount) {
        return (prevCount += 1);
      });
    }
    function decrement3() {
      setCount3(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1);
        } else {
          return (prevCount = 0);
        }
      });
    }
  return (
    <View
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: colors.Orgent,
      }}>
      <View style={styles.title}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.closebutton} />
        </TouchableOpacity>
        <Text style={styles.textTitle}>Giỏ hàng</Text>
       </View>
        <View style={{ paddingRight:10}}>
          <TouchableOpacity>
      <Text style={{fontSize:15,
      color:colors.bluesky,}}> Xóa giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleProduct}>
        <View style={{flex: 1}}>
          <View>
            <View
              style={styles.containCart}>
              <Text style={{fontSize:20,color:colors.back,fontWeight:'bold',marginBottom:10}}> Đơn hàng</Text>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <Text style={styles.nameButton} > Thêm món</Text>
                  </TouchableOpacity>
            </View>
            <View >
              <Text style={styles.nameCart}>
                Bàn số : 2
              </Text>
              <View style={{ borderWidth:0.2,marginBottom:10}}/>
              <ScrollView >
                <View style={{marginBottom:20}}>
               
                  <Text> x {count1} </Text>
                <View
                  style={styles.containCart}>
                  <Text style={styles.nameCart}>
                    Phin nâu đá
                  </Text>
                  <Text style={styles.nameCart}>
                    25.000
                  </Text>
                </View>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <View>
             <Text style={styles.nameSize}>
                    Size : M
                  </Text>
                  <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
                  <Text style={styles.nameButton} > Chỉnh sửa</Text>
                  </TouchableOpacity>
             </View>
                  <View style={styles.containerCount}>
          <TouchableOpacity
            style={[styles.buttonCount, styles.decrement]}
            onPress={decrement1}>
            <Text style={styles.textCount}> - </Text>
          </TouchableOpacity>
          <Text style={styles.numberCount}>{count1}</Text>
          <TouchableOpacity
            style={[styles.buttonCount, styles.increment]}
            onPress={increment1}>
            <Text style={styles.textCount}> + </Text>
          </TouchableOpacity>
        </View>
               </View>
              
                 
                </View>
                <View style={{marginBottom:20}}>
                <View
                  style={styles.containCart}>
                  <Text style={styles.nameCart}>
                    Phin đen đá
                  </Text>
                  <Text style={styles.nameCart}>
                    35.000
                  </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <View>
             <Text style={styles.nameSize}>
                    Size : L
                  </Text>
                  <TouchableOpacity>
                  <Text style={styles.nameButton} > Chỉnh sửa</Text>
                  </TouchableOpacity>
             </View>
                  <View style={styles.containerCount}>
          <TouchableOpacity
            style={[styles.buttonCount, styles.decrement]}
            onPress={decrement2}>
            <Text style={styles.textCount}> - </Text>
          </TouchableOpacity>
          <Text style={styles.numberCount}>{count2}</Text>
          <TouchableOpacity
            style={[styles.buttonCount, styles.increment]}
            onPress={increment2}>
            <Text style={styles.textCount}> + </Text>
          </TouchableOpacity>
        </View>
               </View>
                 
                </View> 
                <View>
                <View
                  style={styles.containCart}>
                  <Text style={styles.nameCart}>
                   Bánh xoài
                  </Text>
                  <Text style={styles.nameCart}>
                    35.000
                  </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <View>
               <Text style={styles.nameSize}>
                    Size : M
                  </Text>
                  <TouchableOpacity>
                  <Text style={styles.nameButton} > Chỉnh sửa</Text>
                  </TouchableOpacity>
               </View>
                  <View style={styles.containerCount}>
          <TouchableOpacity
            style={[styles.buttonCount, styles.decrement]}
            onPress={decrement3}>
            <Text style={styles.textCount}> - </Text>
          </TouchableOpacity>
          <Text style={styles.numberCount}>{count3}</Text>
          <TouchableOpacity
            style={[styles.buttonCount, styles.increment]}
            onPress={increment3}>
            <Text style={styles.textCount}> + </Text>
          </TouchableOpacity>
        </View>
               </View>
                 
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={{borderWidth: 0.2, marginBottom: 15}} />
        <View >
         <View style={styles.containCart}>
         <Text style={styles.sumProduct}>Tổng tiền : </Text>
         <Text style={styles.nameCart}>120.000 đ </Text>
         </View>
          <Pressable
            style={styles.buttonClick}
            android_ripple={{color: '#EEEE'}}
            onPress={createButtonAlert}>
            <Text style={styles.textButton}>Đặt hàng</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Orgent,
    flex: 1,
    height: 200,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  textTitle: {
    fontSize: 20,
    color:colors.black
  },
  images: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    // marginRight: 15,
    alignSelf: 'center',
  },
  closebutton: {
    height: 30,
    width: 30,
    margin: 10,
  },
  titleProduct: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 15,
    justifyContent: 'flex-end',
  },

  custombutton: {
    backgroundColor: colors.grey,
  },
  buttonContainer: {
    height: 100,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  sumProduct:{ 
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10
  },
  buttonClick: {
    height: 50,
    width: '80%',
    backgroundColor: colors.Orgent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
  },
  textButton: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  containCart:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameCart:{
    fontSize: 16,
     color: 'black'
    },
   nameButton:{
      fontSize:15,
      color:colors.bluesky
     },
  nameSize: {
      fontSize:15,
      color:colors.blackgray,
      marginLeft:10
     },


     containerCount: {
      flexDirection: 'row',
      // marginBottom: 5,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    buttonCount: {
      height: 23,
      width: 23,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:15,
    },
    increment: {
      backgroundColor: colors.Orgent,
    },
    decrement: {
      backgroundColor: colors.grey,
    },
    textCount: {
      fontSize: 10,
      fontWeight: 'bold',
      color: colors.black,
    },
    numberCount: {
      fontSize: 16,
      color: colors.black,
      alignSelf: 'center',
      padding: 5,
    },

});
