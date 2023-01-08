import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Alert,
  FlatList
} from 'react-native';
import React from 'react';
import {colors} from '../../constaints/colors';
import {images} from '../../constaints';
import {ButtonBack} from '../../Button';
import { hasLocal } from '../localhost';

export default function History({navigation}) {
  const [history, setHistory] = React.useState([])
  React.useEffect(() => {
onRequestDataFood()
   
  }, [])
  
  const onRequestDataFood = () => {
    fetch(`http://${hasLocal}/history`).then((result) => result.json()).then((resultData) => setHistory(resultData))
   }
  return (
    <View style={{}}>
      <View style={styles.containerView}>
        <View style={{width:90,justifyContent:'center'}}>
    <ButtonBack onPress={()=>navigation.goBack()}/>
        </View >
        <View style={styles.titlesView}>
    <Text style={styles.TextTitles}> Lịch sử</Text>
        </View>
        <View style={{width:80}}/>
      </View>

      {/* <ScrollView>
        <View style={styles.orderRow}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Bàn số: </Text>
            <Text style={{color: colors.black}}>3</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Thời gian: </Text>
            <Text style={{color: colors.black}}>15:00:33</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Tổng tiền:</Text>
            <Text style={{color: colors.black}}>560.000</Text>
          </View>
        </View>

        <View style={styles.orderRow}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Bàn số: </Text>
            <Text style={{color: colors.black}}>4</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Thời gian: </Text>
            <Text style={{color: colors.black}}>16:06:03</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Tổng tiền:</Text>
            <Text style={{color: colors.black}}>340.000</Text>
          </View>
        </View>
        <View style={styles.orderRow}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Bàn số: </Text>
            <Text style={{color: colors.black}}>6</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Thời gian: </Text>
            <Text style={{color: colors.black}}>16:30:13</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Tổng tiền:</Text>
            <Text style={{color: colors.black}}>660.000</Text>
          </View>
          
        </View>
        <View style={styles.orderRow}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Bàn số: </Text>
            <Text style={{color: colors.black}}>9</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Thời gian: </Text>
            <Text style={{color: colors.black}}>17:39:13</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Tổng tiền:</Text>
            <Text style={{color: colors.black}}>660.000</Text>
          </View>
          
        </View>
        <View style={styles.orderRow}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Bàn số: </Text>
            <Text style={{color: colors.black}}>13</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Thời gian: </Text>
            <Text style={{color: colors.black}}>17:33:13</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Tổng tiền:</Text>
            <Text style={{color: colors.black}}>260.000</Text>
          </View>
          
        </View>
        <View style={styles.orderRow}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Bàn số: </Text>
            <Text style={{color: colors.black}}>12</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Thời gian: </Text>
            <Text style={{color: colors.black}}>17:30:13</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.black}}>Tổng tiền:</Text>
            <Text style={{color: colors.black}}>360.000</Text>
          </View>
          
        </View>
      </ScrollView> */}
      <FlatList data={history} 
      renderItem={({item}) => {
        return(
          <Text style={{color:'#000'}}>{item.nameProduct}</Text>
        )
      }}/>
    </View>
  );
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  Titles: {
    flex: 0.12,
    height: height / 16,
    backgroundColor: colors.Orgent,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerView:{
    height: 50, 
    backgroundColor: colors.Orgent,
    flexDirection:'row'
  },
  titlesView:{
    width:250, 
    justifyContent:'center', 
    alignItems:'center',

  },
  TextTitles: {
    fontSize: 25,
    color: colors.back,
    fontWeight:'bold'
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
