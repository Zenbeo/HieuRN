import React, {useCallback, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import icons from '../constaints/icons';
import {dataItem} from './SettingRN/DataFList';
// import {datalist} from './Data';

function MuiltiChoice(props) {
  const [selected, setSelected] = useState('');

  const toggleSelectedID = id => {
    const copySelectedIDs = [...selected]; // coppy data của selected lưu lại cho lần 2
    const index = copySelectedIDs.indexOf(id);
    if (index === -1) copySelectedIDs.push(id); //ấn 1 lần thì dk thêm màu
    else copySelectedIDs.splice(index, 1); //ấn lần 2 thì tắt màu
    setSelected(copySelectedIDs);
  };

  const datalist = [];
  for (let i = 1; i < 200; i++) {
    datalist.push({
      id: 'item' + i,
      title: 'Item no:' + i,
      image: icons.bluetooth,
    });
  }

  // const ITEM_HEIGHT =200
  // const getItemLayout = useCallback(
  //   (item,index)=>({
  //     lenght :ITEM_HEIGHT,
  //     offset : index* ITEM_HEIGHT,
  //     index,
  //   }),[]
  // )

  return (
    <FlatList
      initialNumToRender={1}
      // ListFooterComponent={footer}
      windowSize={2}
      // getItemLayout={getItemLayout}
      removeClippedSubviews={true}
      maxToRenderPerBatch={1}
      updateCellsBatchingPeriod={5}
      // numColumns={2}
      extraData={selected}
      keyExtractor={item => item.id}
      data={datalist}
      numColumns={2}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={{
              flex: 0.5,
              margin: 10,
            }}
            onPress={() => toggleSelectedID(item.id)}>
            <View style={{}}></View>
            <View
              style={{
                // backgroundColor: item.id == selectedID ? 'yellow' : 'white',
                backgroundColor: selected.includes(item.id)
                  ? 'yellow'
                  : 'white', //ktra id xong trả ve selectedID
                borderBottomWidth: 1,
                padding: 10,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{item.title}</Text>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  // backgroundColor:'black'
                  tintColor: 'black',
                }}
                source={item.image}></Image>
                
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
export default MuiltiChoice;
