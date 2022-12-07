import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constaints/colors';


export default function Processing() {
  const {height, width} = Dimensions.get('window');


  return (
    <View>
      <View style={styles.ViewName}>
        <Text style={styles.TextName}>Đang tiến hành</Text>
      </View>
      
    </View>
  )
}
const styles =StyleSheet.create({
  ViewName:{
    height: height/ 20,
    width: width /40,
    backgroundColor:colors.blue,

  },
  TextName:{
    color:colors.grey,
    fontSize: 20,

  }
})