import React, { Component } from 'react'
import {TextInput,Text,View, TouchableOpacity,StyleSheet, StatusBar} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Ding from './DingHead'
export default class Login extends Component {
    render() {
        return (
            <View>
                <Ding/>
                <Ding/>
                <TouchableOpacity style={styles.touchStyle} onPress={Actions.pop}>
                    <Text>back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    touchStyle:{
        borderColor:'blue',
        borderWidth:2,
        width:60,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'45%'
    }
})
