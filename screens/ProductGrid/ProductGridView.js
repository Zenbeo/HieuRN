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
//import colors from '../../constaints/colors';
import Settings from '../SettingRN/Settings';
import { ListData } from './GridView';

function ProductGridView(props) {
  const [check, setCheck] = useState(false);
  const [product, setProduct] = useState(ListData);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Settings/> */}
      <View
        style={{
          height: 60,
          backgroundColor: colors.Orgent,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize.h2,
            color: colors.black1,
            fontWeight: 'bold',
          }}>
          Máy Hút Bụi
        </Text>
      </View>
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
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  color: colors.black1,
                  fontSize: fontSize.h3,
                }}>
                ${item.price}
              </Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                fontSize: 13,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.blue,
                  fontSize: 13,
                }}>
                {item.nameProduct}
              </Text>
              {/* chia tung phan tu trong specifications */}
              {item.specifications.map(specifications => (
                <Text
                  key={specifications}
                  style={{
                    color: colors.black1,
                    fontSize: 13,
                    padding: 1,
                  }}>
                  * {specifications}
                </Text>
              ))}
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
                  {Array.from(Array(item.stars)).map(item => (
                    <Image
                      style={{
                        height: 11,
                        width: 11,
                        marginEnd: 2,
                      }}
                      source={icons.star}
                    />
                  ))}
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
export default ProductGridView;
