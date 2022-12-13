import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import React from 'react';
import {fontSize, images} from '../../constaints';
import {colors} from '../../constaints/colors';

export default function HomeMain({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.ViewBackground}>
        <Image
          tintColor="blue" //màu icons
          source={images.computers}
          style={styles.Image}
        />
      </View>
      <View style={{height: height / 5}} />

      <View style={styles.ViewButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate('History')}
          style={styles.Button}>
          <Text style={styles.TextButton}> Lịch sử</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Processing')}
          style={styles.Button}>
          <Text style={styles.TextButton}> Đơn hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Table')}
          style={styles.Button}>
          <Text style={styles.TextButton}> Đặt bàn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ViewButtonBack}>
        <TouchableOpacity
          style={styles.ButtonBack}
          onPress={() => navigation.goBack()}>
          <Text style={styles.TextButton}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  ViewBackground: {
    height: 230,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.Orgent,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  ViewButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewButtonBack: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bluesky,
    borderRadius: 20,
    height: width / 9,
    width: width / 1.5,
    marginBottom: 15,
  },
  TextButton: {
    color: colors.white,
    fontSize: 20,
  },
  Image: {
    height: 140,
    width: 140,
    fontWeight: 'bold',
    // backgroundColor: 'blue',
    alignSelf: 'center',
  },
  ButtonBack: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3366FF',
    height: width / 9,
    width: width / 2,
    marginTop: 90,
  borderRadius:30
  },
  
});
