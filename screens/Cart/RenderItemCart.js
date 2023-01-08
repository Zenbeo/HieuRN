import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {colors} from '../../constaints/colors';

export default function RenderItemCart({navigation, item}) {
    const [ count, setCount]=useState('')
    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }
      function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1);
          } else {
            return (prevCount = 0);
          }
        });
      }
  return (
    <View style={{marginBottom: 20}}>
      <View style={styles.containCart}>
        
        <Text style={styles.nameCart}>{item.productName}</Text>
        {/* <Text style={styles.nameCart}>  x{item.quantity}</Text> */}
        
        <Text style={styles.nameCart}> gia: {item.totalPrice}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <View>
             <Text style={styles.nameSize}>
                    Size : {item.size}
                  </Text>
                  {/* <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
                  <Text style={styles.nameButton} > Chỉnh sửa</Text>
                  </TouchableOpacity> */}
             </View>
                  <View style={styles.containerCount}>
          <TouchableOpacity
            style={[styles.buttonCount, styles.decrement]}
            onPress={decrement}>
            <Text style={styles.textCount}> - </Text>
          </TouchableOpacity>
          <Text style={styles.numberCount}>{item.quantity}</Text>
          <TouchableOpacity
            style={[styles.buttonCount, styles.increment]}
            onPress={increment}>
            <Text style={styles.textCount}> + </Text>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 20,
    color: colors.black,
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
  sumProduct: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
  containCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:200
  },
  nameCart: {
    fontSize: 17,
    color: 'black',
  },
  nameButton: {
    fontSize: 15,
    color: colors.bluesky,
  },
  nameSize: {
    fontSize: 17,
    color: colors.blackgray,
    marginLeft: 10,
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
    borderRadius: 15,
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
