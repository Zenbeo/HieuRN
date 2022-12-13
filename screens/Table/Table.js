import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
  FlatList,
} from 'react-native';
import {images, icons, fontSize} from '../../constaints';
import {colors} from '../../constaints/colors';
import { dataItem } from './TableItem';
//import colors from '../../constaints/col

function Table({navigation}) {
  const [check, setCheck] = useState(false);
  const [product, setProduct] = useState(dataItem);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Settings/> */}
     
      <FlatList
        data={product}
        numColumns={2} //chia đôi man
        renderItem={({item, index}) => (
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,

              margin: 10,
              marginLeft: index % 2 == 0 ? 10 : 0,
              marginBottom: 5, //khoảng cách dưới
              marginRight: 10, //khoảng cách pải
              marginTop: 5, //khoảng cách trên
              borderRadius: 20,
              borderWidth: 1,
              borderColor: colors.inactive,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  resizeMode: 'contain',
                  borderRadius: 20,
                  marginRight: 10,
                }}
                source={{
                  uri: item.url,
                }}
              />
              
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
                paddingTop: 8,
              }}>
              <TouchableOpacity
                onPress={() => setCheck(!check)}
                style={{
                  flexDirection: 'row',
                  paddingTop: 8,
                }}>
                {!check ? (
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      marginLeft: 5,
                      tintColor: 'red',
                    }}
                    source={icons.heartDen}
                  />
                ) : (
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      marginLeft: 5,
                    }}
                    source={icons.heartDo}
                  />
                )}
                <Text
                  style={{
                    color: !check ? 'red' : 'black',
                    width: 70,
                    marginLeft: 5,
                    alignSelf: 'center',
                  }}>
                  Saved for later
                </Text>
              </TouchableOpacity>

              {/* <Image style={{height:25,width:25,marginLeft:5}}
                 source={icons.heartDen}/> */}
              <View
                style={{
                  flex: 1,
                  paddingRight: 5,
                }}>
                {/* hien dem Sao */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 5,
                  }}>
                
                    <Image
                      style={{
                        height: 11,
                        width: 11,
                        marginEnd: 2,
                      }}
                      source={icons.star}
                    />
                  
                </View>
                {/* Hien View */}
                <Text
                  style={{
                    color: colors.blue,
                    fontSize: fontSize.h5,
                    textAlign: 'right',
                    paddingRight: 5,
                    paddingTop: 5,
                  }}>
                  {item.review} Review
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
export default Table;
