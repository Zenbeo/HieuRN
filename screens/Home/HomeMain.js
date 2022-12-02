import { View, Text,Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { fontSize, images } from '../../constaints'
import { colors } from '../../constaints/colors'

export default function HomeMain() {
  return (
    <View style={{backgroundColor:'#99CCFF',flex:1}}>
      <View style={styles.ViewImage}>
      <Image
          tintColor="blue" //màu icons
          source={images.computers}
          style={styles.Imgae}
        />
      </View>
      <View style={styles.ViewTouch}>
        <TouchableOpacity style={styles.TouchChoose}>
            <Text style={styles.TextTouch}> Lịch sử</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchChoose}>
            <Text style={styles.TextTouch}>Đang tiến hành </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchChoose}>
            <Text style={styles.TextTouch}> Đơn mới </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    ViewImage :{
        justifyContent: 'center',
        alignItems:'center',
       marginTop:120
    },
    Imgae:{
        height: 120,
        width: 120,
        fontWeight: 'bold',
        // backgroundColor: 'blue',
        alignSelf: 'center',
      },
ViewTouch:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:100,

},
TouchChoose:{
    borderWidth:1,
    borderRadius:30,
    height:45,
    width:250,
    backgroundColor:colors.blue,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    borderColor:colors.blue
},
TextTouch:{
 color:colors.grey,
 fontSize:fontSize.h3

}

})