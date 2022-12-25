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
  Alert
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {colors} from '../../constaints/colors';
import {icons, images} from '../../constaints';


export default function CartScreen( {navigation}) {
  const createButtonAlert = (item) =>
  Alert.alert(
   'Thêm món thành công',
    "",
    [
      { text: "OK", }
    ]
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: colors.Orgent,
      }}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.closebutton} />
          
        </TouchableOpacity>
        <Text style={styles.textTitle}>Giỏ hàng</Text>
      </View>
      <View style={styles.titleProduct}>
        <View>

        </View>
        <View style={{}}>
        <Pressable style={styles.buttonClick} android_ripple={{color: '#EEEE'}} onPress={createButtonAlert}>
          <Text style={styles.textButton}>Đặt hàng</Text>
        </Pressable>
        </View>
      </View>
      
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
    alignItems:'center'
  },
  textTitle:{
    fontSize:20,
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
    padding: 15,
    justifyContent:'flex-end'
  },
 
  custombutton:{
    backgroundColor:colors.grey
  },
  buttonContainer: {
    height: 150,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  buttonClick: {
    height: 50,
    width: '80%',
    backgroundColor: colors.Orgent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginLeft:35
  },
  textButton: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
    
  },
});
