import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Switch,
  SafeAreaView,
  Dimensions,
} from 'react-native';
// import {colors,images, icons, fontSize} from '../constaints';
import UIHearder from '../../Button/UIHearder';
import {colors} from '../../constaints/colors';
import {fontSize, icons} from '../../constaints';
// import { Ionicons } from '@expo/vector-icons';// icon
import DataFList, {dataItem} from './DataFList';
// import { UIHearder } from '../../Button';

function SettingFList(props) {
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  //   const [IsEnabledPassword, setIsEnabledPassword] = useState(false);
  //   const toggleSwitchPassword = () =>
  //     setIsEnabledPassword(previousStatePass => !previousStatePass);
  //   const [isFinger, setIsFinger] = useState(false);
  const [dataList, setDataList] = useState([]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: '100%',
      }}>
      <View style={{}}>
        <UIHearder
          style={{
            alignSelf: 'center',
            lineHeight: 45,
            color: colors.black1,
          }}
          title={'Setting UI'}
        />
        <FlatList
          data={dataItem}
       
          renderItem={({item}) => {
            //ha`m chay.
            return (
              <View style={{flex:1,flexDirection: 'column'}}>
                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Common</Text>
                </View>
                {item.common.map(i => {
                  return (       
                      <View style={{flexDirection: 'row',backgroundColor: 'pink'}}>
                        <Image
                          style={{
                            height: 20,
                            width: 20,
                            // backgroundColor:'black'
                            tintColor: 'black',
                          }}
                          source={i.icons}></Image>
                       <View style={{justifyContent:'flex-start'}}>
                       <Text style={{marginLeft: 5}}>{i.name}</Text>
                       </View>
                        <View
                      style={{
                        flexDirection: 'row',
                        margin: 3,
                        backgroundColor: 'green',
                      }}>
                         <View style={{backgroundColor: 'red',justifyContent:'flex-end',flexDirection:'row'}}>
                        <Text style={{}}>{i.text}</Text>
                      </View>
                      </View>
                     
                    </View>
                  );
                })}
                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Account</Text>
                </View>
                {item.Account.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}/>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}

                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Account</Text>
                </View>
                {item.Account.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}
                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Secutiry</Text>
                </View>
                {item.Secutiry.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}

                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Settings</Text>
                </View>
                {item.Settings.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                     
                    </View>
                  );
                })}

                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}> Note</Text>
                </View>
                {item. Note.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}

                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Account</Text>
                </View>
                {item.Account.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}

                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Account</Text>
                </View>
                {item.Account.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}

                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Account</Text>
                </View>
                {item.Account.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}

                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Account</Text>
                </View>
                {item.Account.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}
                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Account</Text>
                </View>
                {item.Account.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}

                <View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>Account</Text>
                </View>
                {item.Account.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}

<View style={{backgroundColor: colors.inactive}}>
                  <Text style={{}}>End</Text>
                </View>
                {item.Account.map(i => {
                  return (
                    <View style={{flexDirection: 'row', margin: 5}}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          // backgroundColor:'black'
                          tintColor: 'black',
                        }}
                        source={i.icons}></Image>
                      <Text style={{marginLeft: 5}}>{i.name}</Text>
                    </View>
                  );
                })}
            
              </View>
            );
            
          }}
          style={{marginBottom:60}} 
          >
          </FlatList>
      </View>
    </View>
  );
}
export default SettingFList;
