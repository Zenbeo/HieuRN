import { View, Text ,StyleSheet,Dimensions,ScrollView} from 'react-native'
import React from 'react'

export default function History() {


  return (
    <View>
      <View>
        <Text>Lịch sử</Text>
      </View>
      <View style={styles.body}>
          <ScrollView>
        
          </ScrollView>
        </View>
    </View>
  )
}
const {width} = Dimensions.get('window');

const styles=StyleSheet.create({
body:{

},
orderRow:{
  height: width / 3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around',
}
})