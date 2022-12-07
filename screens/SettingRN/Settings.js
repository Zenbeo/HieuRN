import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import React from 'react';
import {colors} from '../../constaints/colors';
import {icons} from '../../constaints';

export default function Settings() {
  return (
    <View>
      <View style={styles.ViewSetting}>
        <Image style={styles.imageUser} source={icons.user} />
        <View>
        <Text style={styles.TextSetting}>Đăng nhập</Text>
        <Text style={styles.TextSetting}>admin</Text>
        </View>
      </View>
      <View style={{height:height/1.5}}></View>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.ButtonLogout}>
          <Text style={styles.TextLogout}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  ViewSetting: {
    padding:10,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: colors.Orgent,
    height: height / 5,
    width: width,
  },
  TextSetting: {
    fontSize: 20,
    color:colors.black,
    marginLeft:10
  },
  imageUser: {
    height:height/15,
    width:width/7.5
  },
  ButtonLogout:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.bluesky,
    borderRadius:20,
    height:height/17,
    width:width/2
  },
  TextLogout:{
    fontSize:15,
    color:colors.white
  }

});
