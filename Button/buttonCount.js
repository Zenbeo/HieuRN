import { View, Text, StyleSheet } from 'react-native'
import React, { Children } from 'react'
import { colors } from '../constaints/colors';
export default function buttonCount( {children }) {

  return (
    <View style={styles.containerCount}>
          <TouchableOpacity
            style={[styles.buttonCount, styles.decrement]}
            onPress={onPress}>
            <Text style={styles.textCount}> - </Text>
          </TouchableOpacity>
          <Text style={styles.numberCount}> {children}</Text>
          <TouchableOpacity
            style={[styles.buttonCount, styles.increment]}
            onPress={onPress}>
            <Text style={styles.textCount}> + </Text>
          </TouchableOpacity>
        </View>
  )
}
const styles = StyleSheet.create({
    containerCount: {
      flexDirection: 'row',
      marginBottom: 5,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    buttonCount: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    increment: {
      backgroundColor: colors.Orgent,
    },
    decrement: {
      backgroundColor: colors.grey,
    },
    textCount: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.black,
    },
    numberCount: {
      fontSize: 20,
      color: colors.black,
      alignSelf: 'center',
      padding: 15,
    },


  });
  