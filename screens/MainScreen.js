/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {images, icons, fontSize} from '../constaints';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {UIButton} from '../Button';
import Login from './Login';

function MainScreen(props) {
  //state => thay đổi => UI thay đổi (11-131)
  //biến thành getter/setter
  const [accountTypes, setAccountTypes] = useState([
    'Influencer',
    'Business',
    'Individual',
  ]); //hook useState
  //navigation
  const {navigation, rount}=props
  //function of navigate to/back
  const {navigate,goBack }=navigation
  return (  
    <View //view truc chinh
      style={{backgroundColor: 'blue', flex: 100}}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 1,
          //justifyContent :'center',
        }}>
        <View
          style={{
            flex: 15,
            // flexDirection:'row',
            // backgroundColor: 'green',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={icons.fire}
              style={{
                marginStart: 10,
                marginEnd: 5,
                width: fontSize.h2,
                height: fontSize.h2,
              }}
            />
            <Text style={{color: 'green', fontSize: 20}}>This is Bluuuu</Text>

            <View style={{flex: 1}} />
            <Image
              source={icons.home}
              style={{
                tintColor: 'black', // mau icon
                width: 25,
                height: 25,
                marginEnd: fontSize.h2,
              }}
            />
          </View>
        </View>

        {/* <View style={{
    flex:10,
    width:'100%',
    height: '20%',
    backgroundColor:'yellow'
}}>
    
</View > */}
        <View
          style={{
            flex: 30,
            //backgroundColor:'red',
            //căn nề ra giữa
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginBottom: 10,
              color: 'black',
              fontSize: 25,
            }}>
            Wellcom to
          </Text>

          <Text
            style={{
              marginBottom: 15,
              color: 'black',
              fontWeight: 'bold',
              fontSize: fontSize.h2,
            }}>
            Bluee hahaha
          </Text>

          <Text
            style={{
              marginBottom: fontSize.h2,
              fontSize: fontSize.h2,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Please select your type
          </Text>
        </View>

        <View
          style={{
            flex: 40,
            // backgroundColor: 'purple',
          }}>
          <UIButton
            onPress={() => {
              // Alert.alert('aaa')-c1
            
            }}
            title="Influencer"
            // isSelected = {true}
          />
          <UIButton
            onPress={() => {
              // Alert.alert('aaa')-c1
              //alert('haha')//c2
            }}
            title="Business"
            // isSelected = {true}
          />
          <UIButton
            onPress={() => {
              // Alert.alert('aaa')-c1
              //  alert('haha')//c2
            }}
            title="Individual"
            // isSelected = {true}
          />
        </View>

        <View
          style={{
            flex: 30,
            //backgroundColor: 'green',
          }}>
          <UIButton
            onPress={() => {
              // Alert.alert('aaa')-c1
              navigate(Login)// chuyển sang màn Login
            }}
            title={'Login'.toUpperCase()}
            // isSelected = {true}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginLeft: 20,
              alignSelf: 'center',
            }}>
            Want to register new Account{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              alert('please');
            }}
            style={{
              padding: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                marginLeft: 20,
                alignSelf: 'center',
                textDecorationLine: 'underline', //gạch chân
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
export default MainScreen;
