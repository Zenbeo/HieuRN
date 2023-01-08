import { View, Text, TextInput,TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [textInputValue,setTextInputValue]=useState( '')
  const [ value,setValue]=useState('')

 const saveInputValue = ()=>{
  if(textInputValue){
    AsyncStorage.setItem(' abcbcb',textInputValue)
    setTextInputValue('')
    Alert.alert(' data save')
  }
  else {
    Alert.alert(' Loi error')
  }
 }
 const getSaveInput=()=>{
  AsyncStorage.getItem(' abcbcb').then(value=>{
    setValue(value)
  })
 }
  return (
    <View>
      <TextInput
      placeholder='Nhập abc ...'
      style={{}}
      value={textInputValue}
      onChangeText={(data)=>setTextInputValue(data)}
      />
      <TouchableOpacity style={{backgroundColor:'red'}} onPress={getSaveInput}>
        <Text>Get</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'red'}} onPress={saveInputValue}>
        <Text>Save</Text>
      </TouchableOpacity>
      <Text> value is : {value}</Text>
    </View>
  )
}