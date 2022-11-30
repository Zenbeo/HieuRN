import React, {Component} from 'react'
import {
    TouchableOpacity, 
    Text,
    View,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { fontSize } from '../constaints'
import { colors } from '../constaints/colors'
// import {colors,images, icons, fontSize} from '../../constaints';
function UIHearder(props) {
    const {
        title,style
    } = props
    return <View style={{
        height: 50,
        
       backgroundColor: colors.Orgent,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    }}> 
        <Text style={{fontWeight:'bold',marginLeft:5,fontSize:fontSize.h2}}>{title}</Text> 
    </View>
}
export default UIHearder