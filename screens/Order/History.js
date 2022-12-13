import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {colors} from '../../constaints/colors';
import {images} from '../../constaints';
import {ButtonBack} from '../../Button';

export default function History({navigation}) {
  return (
    <View style={{}}>
      <View style={{height: 60, backgroundColor: colors.Orgent,flexDirection:'row'}}>
        <View style={{width:90,justifyContent:'center'}}>
    <ButtonBack onPress={()=>navigation.goBack()}/>
        </View >
        <View style={{width:250, justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontSize:25,color:colors.black,}}> Lịch sử</Text>
        </View>
        <View style={{width:80}}/>
      </View>

      <ScrollView>
        <View style={styles.orderRow}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Bàn số: </Text>
            <Text style={{color: colors.black}}>1</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Thời gian: </Text>
            <Text style={{color: colors.black}}>12:00:03</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Tổng tiền:</Text>
            <Text style={{color: colors.black}}>1.000.000</Text>
          </View>
        </View>

        <View style={styles.orderRow}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Bàn số: </Text>
            <Text style={{color: colors.black}}>4</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Thời gian: </Text>
            <Text style={{color: colors.black}}>15:06:03</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Tổng tiền:</Text>
            <Text style={{color: colors.black}}>500.000</Text>
          </View>
        </View>
        <View style={styles.orderRow}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Bàn số: </Text>
            <Text style={{color: colors.black}}>3</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Thời gian: </Text>
            <Text style={{color: colors.black}}>16:00:03</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Tổng tiền:</Text>
            <Text style={{color: colors.black}}>460.000</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  Titles: {
    flex: 0.12,
    height: height / 14,
    backgroundColor: colors.Orgent,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TextTitles: {
    fontSize: 25,
    color: colors.white,
  },
  orderRow: {
    height: width / 4,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 15,
  },
  ViewBackground: {
    height: 230,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.Orgent,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
