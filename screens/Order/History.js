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
    <View style={{flex:1}}>
      <View style={styles.containerView}>
        <View style={{width:90,justifyContent:'center'}}>
    <ButtonBack onPress={()=>navigation.goBack()}/>
        </View >  
        <View style={styles.titlesView}>
    <Text style={styles.TextTitles}> Lịch sử</Text>
        </View>
        <View style={{width:80}}/>
      </View>
      
      <FlatList data={history} 
      renderItem={({item}) => {
        return(
          <View style={styles.orderRow}>
           <View style={styles.onListProduct}>
           <Text style={{color:'#000'}}> Bàn số: </Text>
           <Text style={{color:'#000',fontSize:16}}>  {item.deskId}</Text>
           </View>
           <View style={styles.onListProduct}>
            <Text style={{color:'#000'}}>Tổng tiền: </Text>
            <Text style={{color:'#000',fontSize:16}}> {item.price}</Text>
            </View>
            <View style={styles.onListProduct}>
            <Text style={{color:'#000'}}>Số lượng: </Text>
            <Text style={{color:'#000',fontSize:16}}>{item.countProduct}</Text>
            </View>
            
          </View>
        )
      }}/>
      {/* <View style={{ height:10,backgroundColor:'red'}}/> */}
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
  onListProduct:{
    flexDirection:'row', 
    justifyContent:'space-between',
     paddingRight:10}
});
