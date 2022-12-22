import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {colors} from '../../constaints/colors';
import {icons, images} from '../../constaints';
import {color} from 'react-native-reanimated';

export default function ProductDetails({navigation, props}) {
  const [count, setCount] = useState(0);
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
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });
  const [check, setCheck]= useState()
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: colors.Orgent,
      }}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.close} style={styles.closebutton} />
        </TouchableOpacity>
        <Image style={styles.images} source={images.computers} />
      </View>
      <View style={styles.titleProduct}>
        <Text>Tên món</Text>
        <View style={styles.containerSize}>
          <TouchableOpacity style={styles.buttonSize}>
            <Text style={styles.textSize}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSize}>
            <Text style={styles.textSize }>L</Text>
          </TouchableOpacity>
        </View>
        <Text>Ghi chú món: </Text>
        <TextInput 
        style={styles.inputNote}
        placeholder=' Ghi chú ...'
        />
      </View>
      {keyboardIsShow == false ? (
      <View style={styles.buttonContainer}>
        <View style={styles.containerCount}>
          <TouchableOpacity
            style={[styles.buttonCount, styles.decrement]}
            onPress={decrement}>
            <Text style={styles.textCount}> - </Text>
          </TouchableOpacity>
          <Text style={styles.numberCount}> {count}</Text>
          <TouchableOpacity
            style={[styles.buttonCount, styles.increment]}
            onPress={increment}>
            <Text style={styles.textCount}> + </Text>
          </TouchableOpacity>
        </View>

        <Pressable style={styles.buttonClick} android_ripple={{color: '#EEEE'}}>
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
  images: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 15,
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  containerSize: {
    flexDirection: 'row',
    justifyContent:'center'
  },
  buttonSize: {
    height: 40,
    width: 50,
    backgroundColor: colors.Orgent,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:8
  },
  custombutton:{
    backgroundColor:colors.grey
  },
  textSize:{
    fontSize:18,
    fontWeight:'bold'
  },
  inputNote:{
    borderWidth:1,
    borderRadius:8,
    
    
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
    backgroundColor: colors.silver,
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
    borderRadius:10
  },
  textButton: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
});
