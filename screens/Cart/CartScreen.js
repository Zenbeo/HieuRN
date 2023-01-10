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
  Alert,
  ScrollView,
  FlatList,
  LogBox,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../constaints/colors';
import {icons, images} from '../../constaints';
import buttonCount from '../../Button/buttonCount';
import {hasLocal} from '../localhost';
import RenderItemCart from './RenderItemCart';

export default function CartScreen({navigation, route}) {
  const [listProduct, setListProduct] = useState();
  const [status, setStatus] = useState(route?.params?.status)
  const createButtonAlert = () =>{
    setStatus(!status)
    navigation.navigate('Table',{
      hasDesk: status
    })
  }

  const deskID = route?.params?.deskID;
  const [listItem, setListItem] = React.useState([]);
const [newData, setNewData] = useState([])

const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    LogBox.ignoreAllLogs()
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    const data = `http://${hasLocal}/get-all-orders`;
    fetch(data)
      .then(response => response.json())
      .then(data => {
        const getIDDesk = data.filter((IdDesk) => IdDesk.deskId == deskID)
        setListItem([...getIDDesk]);
        setLoading(false);
      });
  }, [!loading]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.Orgent,
      }}>
      <View style={styles.title}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.back} style={styles.closebutton} />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Giỏ hàng</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <TouchableOpacity>
            <Text style={{fontSize: 15, color: colors.bluesky}}>
              {' '}
              Xóa giỏ hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleProduct}>
        <View style={{flex: 1}}>
 
            <View style={styles.containCart}>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.back,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                {' '}
                Đơn hàng
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.nameButton}> Thêm món</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.nameCart}>Bàn số : {deskID}</Text>
            <View>
            
              <View style={{borderWidth: 0.2, marginBottom: 10}} />
              <FlatList
              keyExtractor={(index)=>index.toString()}
              showsVerticalScrollIndicator={false}
                data={listItem}
                style={{height:550}}
                renderItem={({item}) => (                  
                      <>
                        <RenderItemCart item={item}/>

                      </>                  
                 
                )}
              />
   
          </View>
        </View>
        
        <View style={{borderWidth: 0.2, marginBottom: 15}} />
        <View>
          <View style={styles.containCart}>
            <Text style={styles.sumProduct}>Tổng tiền : </Text>
            <Text style={styles.nameCart}>120.000 đ </Text>
          </View>
          <Pressable
            style={styles.buttonClick}
            android_ripple={{color: '#EEEE'}}
            onPress={createButtonAlert}>
            <Text style={styles.textButton}>Đặt hàng</Text>
          </Pressable>
        </View>
      </View>
      {/* <FlatList data={orderData} renderItem={({item}) => (
        <Text>{item.receiverName}</Text>
      )}/> */}
    </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 20,
    color: colors.black,
  },
  images: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
    borderRadius: 10,
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
    justifyContent: 'flex-end',
  },

  custombutton: {
    backgroundColor: colors.grey,
  },
  buttonContainer: {
    height: 100,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  sumProduct: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonClick: {
    height: 50,
    width: '80%',
    backgroundColor: colors.Orgent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
  },
  textButton: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  containCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameCart: {
    fontSize: 16,
    color: 'black',
  },
  nameButton: {
    fontSize: 15,
    color: colors.bluesky,
  },
  nameSize: {
    fontSize: 15,
    color: colors.blackgray,
    marginLeft: 10,
  },

  containerCount: {
    flexDirection: 'row',
    // marginBottom: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonCount: {
    height: 23,
    width: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  increment: {
    backgroundColor: colors.Orgent,
  },
  decrement: {
    backgroundColor: colors.grey,
  },
  textCount: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.black,
  },
  numberCount: {
    fontSize: 16,
    color: colors.black,
    alignSelf: 'center',
    padding: 5,
  },
});
