import { View, Text,ActivityIndicator,Image,StyleSheet, } from 'react-native'
import React, { useEffect } from 'react'
import {  images } from '../../constaints';
import { colors } from '../../constaints/colors';

export default function LoadingScreen({navigation}) {
    // useEffect(() => {
    //     const timeLoad = setInterval(() => {
    //      navigation.navigate('HomeMain')
    //     console.log(' Loading ')
    //     }, 1000);
    //     return () => {clearInterval(timeLoad)}
    //   }, [ ])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffe Family</Text>
      <ActivityIndicator 
    //   style={styles.loading}
      color={colors.black}
      size={'large'}/>
      <Image
      style={styles.imageTitle}
       source={images.computers} 
      />
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.Orgent,
        justifyContent:'center',
        alignItems:'center',
       
    },
    imageTitle: {
        height:150,
        width:150,
        tintColor:colors.bluesky,
        marginTop:10

    },
   title:{
    fontSize:24,
    fontWeight:'bold',
    color:colors.black,
    paddingBottom:30

    },
loading:{
    fontSize:50
}
})