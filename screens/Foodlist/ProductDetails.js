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
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../constaints/colors';
import {icons} from '../../constaints';
import axios from 'axios';
import FormData from 'form-data';
import {hasLocal} from '../localhost';

export default function ProductDetails({navigation, props, route, item}) {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(true);
  function increment() {
    //setCount(prevCount => prevCount+=1);
    setQuantity(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement() {
    setQuantity(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  const idProduct = route?.params?.item?.id;
  const priceProduct = route?.params?.item?.price;
  const images = route?.params?.images
  useEffect(() => {
    console.log('LOG CHECK ' + priceProduct);
    console.log( 'Anh' + images);
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  }, [check]);

  const [quantity, setQuantity] = useState(0);

  const onSubmitFormHandler = async () => {
    axios
      .post(`http://${hasLocal}/create-orders`, {
        deskId: route?.params?.deskID,
        productId: idProduct,
        size: check ? 'M' : 'L',
        productPrice: priceProduct.toString(),
        quantity: quantity,
        // images: route?.params?.images
      })
      .then(function (response) {
        console.log(response);
        Alert.alert(
          "Thêm sản phẩm thành công",
          "",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => navigation.navigate('FoodList') }
          ]
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: colors.Orgent,
      }}>
      <View style={styles.title}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.close} style={styles.closebutton} />
        </TouchableOpacity> */}

        <Image
          style={styles.images}
          source={{ uri: `http://${hasLocal}`+images,}}
          />
    
      </View>
      <View style={styles.titleProduct}>
        <View style={styles.titleNameCost}>
          <Text
            style={{fontSize: 18, fontWeight: 'bold', color: colors.silver}}>
            {route?.params?.item?.name}
          </Text>
          <Text
            style={{fontSize: 16, fontWeight: 'bold', color: colors.silver}}>
            {route?.params?.item?.price}
          </Text>
        </View>
        <View style={styles.containerSize}>
          <TouchableOpacity
            onPress={() => {
              setCheck(true);
            }}
            style={[
              styles.buttonSize,
              {backgroundColor: check ? colors.Orgent : colors.grey},
            ]}>
            <Text style={styles.textSize}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCheck(false);
            }}
            style={[
              styles.buttonSize,
              {backgroundColor: check ? colors.grey : colors.Orgent},
            ]}>
            <Text style={styles.textSize}>L</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.noteText}>Ghi chú món: </Text>
        <TextInput style={styles.inputNote} placeholder=" Ghi chú ..." />
      </View>
      {keyboardIsShow == false ? (
        <View style={styles.buttonContainer}>
          <View style={styles.containerCount}>
            <TouchableOpacity
              style={[styles.buttonCount, styles.decrement]}
              onPress={decrement}>
              <Text style={styles.textCount}> - </Text>
            </TouchableOpacity>
            <Text style={styles.numberCount}> {quantity}</Text>
            <TouchableOpacity
              style={[styles.buttonCount, styles.increment]}
              onPress={increment}>
              <Text style={styles.textCount}> + </Text>
            </TouchableOpacity>
          </View>

          <Pressable
            style={styles.buttonClick}
            android_ripple={{color: '#EEEE'}}
            onPress={onSubmitFormHandler}>
            <Text style={styles.textButton}>Thêm vào giỏ</Text>
          </Pressable>
        </View>
      ) : (
        <View></View>
      )}
    </KeyboardAvoidingView>
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
  },
  titleNameCost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  images: {
    height: 400,
    width: 420,
    resizeMode: 'cover',
    marginRight:10
  },
  closebutton: {
    height: 30,
    width: 30,
    margin: 10,
  },
  titleProduct: {
    backgroundColor: colors.white,
    flex: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    padding: 15,
  },
  containerSize: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonSize: {
    height: 50,
    width: 60,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    //đổ  bóng
    elevation: 1,
    //  shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
  },
  noteText: {
    fontSize: 16,
    paddingLeft: 5,
  },
  custombutton: {
    backgroundColor: colors.grey,
  },
  textSize: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputNote: {
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonContainer: {
    height: 150,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  containerCount: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonCount: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  increment: {
    backgroundColor: colors.Orgent,
  },
  decrement: {
    backgroundColor: colors.grey,
  },
  textCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  numberCount: {
    fontSize: 20,
    color: colors.black,
    alignSelf: 'center',
    padding: 15,
  },
  buttonClick: {
    height: 50,
    width: '80%',
    backgroundColor: colors.Orgent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
});
